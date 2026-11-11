#!/usr/bin/env python3
"""GraphicsCamp Pinterest Poster - publishes the shop's own pins through the official Pinterest API v5.

Single-user tool for the GraphicsCamp shop (graphicscamp.etsy.com). It reads the weekly pin plan
(the same CSV used for Pinterest bulk upload) and creates each pin at its scheduled time.

Setup (once):
  set PINTEREST_CLIENT_ID=<app id>            (Windows: setx ..., or PowerShell $env:...)
  set PINTEREST_CLIENT_SECRET=<app secret>    (never share it, never commit it)
  python pinterest_poster.py login            -> browser opens, you approve, token saved to token.json

Commands:
  login                 OAuth authorization (redirect http://localhost:8085/callback must be in the app's Redirect URIs)
  whoami                show the connected account
  boards                list boards (name -> id)
  post-due <plan.csv>   create every pin whose "Publish date" (Sofia time) has passed and is at most 3 h late
                        and that isn't in posted.json yet; --dry-run to only show what would be posted
  post-one <plan.csv> <row>   create one pin now (for the demo video)
Add --sandbox to any command while the app only has Trial access (pins are then visible only to you).
No passwords or session cookies are ever used: authentication is OAuth only.
"""
import base64, csv, datetime as dt, http.server, json, os, secrets, sys, threading, urllib.parse, urllib.request, webbrowser
from zoneinfo import ZoneInfo

HERE = os.path.dirname(os.path.abspath(__file__))
TOKEN = os.environ.get("PINTEREST_TOKEN_FILE", os.path.join(HERE, "token.json"))
POSTED = os.environ.get("PINTEREST_POSTED_FILE", os.path.join(HERE, "posted.json"))
REDIRECT = os.environ.get("PINTEREST_REDIRECT_URI", "http://localhost:8085/callback")
SCOPES = "boards:read,pins:read,pins:write,user_accounts:read"
TZ = ZoneInfo("Europe/Sofia")
MAX_LATE_H = 3
SANDBOX = "--sandbox" in sys.argv
DRY = "--dry-run" in sys.argv
ARGS = [a for a in sys.argv[1:] if not a.startswith("--")]
API = "https://api-sandbox.pinterest.com/v5" if SANDBOX else "https://api.pinterest.com/v5"


def creds():
    cid, sec = os.environ.get("PINTEREST_CLIENT_ID"), os.environ.get("PINTEREST_CLIENT_SECRET")
    if not cid or not sec:
        sys.exit("Set PINTEREST_CLIENT_ID and PINTEREST_CLIENT_SECRET environment variables first.")
    return cid, sec


def token_request(data):
    cid, sec = creds()
    req = urllib.request.Request("https://api.pinterest.com/v5/oauth/token", data=urllib.parse.urlencode(data).encode(),
        headers={"Authorization": "Basic " + base64.b64encode(f"{cid}:{sec}".encode()).decode(),
                 "Content-Type": "application/x-www-form-urlencoded"})
    with urllib.request.urlopen(req) as r:
        tok = json.load(r)
    tok["obtained_at"] = int(dt.datetime.now().timestamp())
    old = load_token(required=False) or {}
    if "refresh_token" not in tok and old.get("refresh_token"):
        tok["refresh_token"] = old["refresh_token"]; tok["refresh_token_expires_in"] = old.get("refresh_token_expires_in")
    with open(TOKEN, "w") as f:
        json.dump(tok, f)
    return tok


def load_token(required=True):
    if os.environ.get("PINTEREST_REFRESH_TOKEN") and not os.path.exists(TOKEN):   # CI: refresh token from a secret
        return token_request({"grant_type": "refresh_token", "refresh_token": os.environ["PINTEREST_REFRESH_TOKEN"]})
    if not os.path.exists(TOKEN):
        if required: sys.exit("No token yet: run  python pinterest_poster.py login")
        return None
    return json.load(open(TOKEN))


def access_token():
    tok = load_token()
    if dt.datetime.now().timestamp() > tok["obtained_at"] + tok.get("expires_in", 0) - 300:
        tok = token_request({"grant_type": "refresh_token", "refresh_token": tok["refresh_token"]})
    return tok["access_token"]


def api(method, path, body=None):
    req = urllib.request.Request(API + path, method=method, data=json.dumps(body).encode() if body else None,
        headers={"Authorization": "Bearer " + access_token(), "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        raise SystemExit(f"API error {e.code} on {method} {path}: {e.read().decode()[:400]}")


def login():
    cid, _ = creds()
    state = secrets.token_urlsafe(16); got = {}
    class H(http.server.BaseHTTPRequestHandler):
        def do_GET(self):
            q = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
            got.update({k: v[0] for k, v in q.items()})
            self.send_response(200); self.send_header("Content-Type", "text/html; charset=utf-8"); self.end_headers()
            self.wfile.write("<h2>GraphicsCamp Pinterest Poster is connected. You can close this tab.</h2>".encode())
        def log_message(self, *a): pass
    port = urllib.parse.urlparse(REDIRECT).port or 80
    srv = http.server.HTTPServer(("localhost", port), H)
    url = "https://www.pinterest.com/oauth/?" + urllib.parse.urlencode({"client_id": cid, "redirect_uri": REDIRECT,
        "response_type": "code", "scope": SCOPES, "state": state})
    print("Opening Pinterest authorization page:\n" + url); webbrowser.open(url)
    while "code" not in got and "error" not in got:
        srv.handle_request()
    if got.get("state") != state: sys.exit("State mismatch, aborting.")
    if "error" in got: sys.exit("Authorization refused: " + got["error"])
    token_request({"grant_type": "authorization_code", "code": got["code"], "redirect_uri": REDIRECT})
    print("Connected. Token saved to", TOKEN, "(keep this file private).")


def boards():
    out, bookmark = {}, None
    while True:
        r = api("GET", "/boards?page_size=100" + (f"&bookmark={bookmark}" if bookmark else ""))
        for b in r.get("items", []): out[b["name"]] = b["id"]
        bookmark = r.get("bookmark")
        if not bookmark: return out


def read_plan(path):
    rows = list(csv.DictReader(open(path, encoding="utf-8-sig")))
    for r in rows:
        r["_when"] = dt.datetime.fromisoformat(r["Publish date"]).replace(tzinfo=TZ)
    return rows


def create_pin(r, bmap):
    bid = bmap.get(r["Pinterest board"])
    if not bid: print("  board not found:", r["Pinterest board"]); return None
    body = {"board_id": bid, "title": r["Title"][:100], "description": r["Description"][:800], "link": r["Link"],
            "alt_text": r["Title"][:500], "media_source": {"source_type": "image_url", "url": r["Media URL"]}}
    if DRY: print("  [dry-run] would create:", r["Title"]); return "dry"
    p = api("POST", "/pins", body); print("  created pin", p.get("id"), "|", r["Title"]); return p.get("id")


def post_due(path):
    posted = json.load(open(POSTED)) if os.path.exists(POSTED) else {}
    now = dt.datetime.now(TZ); bmap = boards(); n = 0
    for r in read_plan(path):
        key = r["Media URL"] + "|" + r["Publish date"]
        if key in posted or r["_when"] > now: continue
        if now - r["_when"] > dt.timedelta(hours=MAX_LATE_H):
            print("  skipped (more than 3 h late):", r["Title"]); posted[key] = "skipped"; continue
        pid = create_pin(r, bmap)
        if pid and not DRY: posted[key] = pid; n += 1
    if not DRY: json.dump(posted, open(POSTED, "w"), indent=1)
    print(f"{n} pin(s) created at {now:%Y-%m-%d %H:%M} Sofia time.")


if __name__ == "__main__":
    cmd = ARGS[0] if ARGS else "help"
    if cmd == "login": login()
    elif cmd == "whoami": print(json.dumps(api("GET", "/user_account"), indent=1)[:600])
    elif cmd == "boards": [print(f"{v}  {k}") for k, v in boards().items()]
    elif cmd == "post-due": post_due(ARGS[1])
    elif cmd == "post-one": create_pin(read_plan(ARGS[1])[int(ARGS[2]) - 1], boards())
    else: print(__doc__)
