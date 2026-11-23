// GraphicsCamp CW49 (30 Nov - 6 Dec 2026) SCHEDULER, 35 pins: posts each pin at its time while this tab is open. Run in the browser console on pinterest.com while in the BUSINESS account.
// F12 -> Console -> paste -> Enter. Uses Pinterest's own web endpoints with your login session (unofficial).
(async () => {
  const USER = "graphicscampshop";
  const PINS = [
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset System for Kids, My Personal Room Reset Checklist Printable",
  "description": "Their room, their own reset. The personal room reset page lets kids write the few steps that make their room feel ready, so cleaning up follows their plan instead of your reminders. Made for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin01",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_01_4546160710.png?v=1",
  "ts": 1796040000,
  "when": "2026-11-30T14:00:00",
  "alt": "Room Reset System for Kids, My Personal Room Reset Checklist Printable. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Calm Christmas Advent Calendar for Kids, Printable Countdown Starts December 1",
  "description": "Advent starts tomorrow! Print this calm advent calendar tonight and give kids one kind or calming activity for each of the 24 days before Christmas, like a warm drink, a kind note or holiday music. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998302?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin02",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_02_4615998302.png?v=1",
  "ts": 1796050800,
  "when": "2026-11-30T17:00:00",
  "alt": "Calm Christmas Advent Calendar for Kids, Printable Countdown Starts December 1. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Gift Exchange Social Story for Kids, Choosing a Christmas Present",
  "description": "Picking a gift for someone special: this Christmas social story shows kids how to think about what a person likes, needs or enjoys, and how good it feels to give. Includes a caregiver guide. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998436?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin03",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_03_4615998436.png?v=1",
  "ts": 1796061600,
  "when": "2026-11-30T20:00:00",
  "alt": "Gift Exchange Social Story for Kids, Choosing a Christmas Present. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Calm Down Corner Ideas",
  "title": "Christmas Sensory Social Story: Noisy Holiday Parties and Headphones",
  "description": "Noisy parties? Headphones help. The My Ears Notice Sounds page explains holiday noise in simple words and shows kids they can use headphones, ask for quieter sounds or take a break. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030123?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin04",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_04_4616030123.png?v=1",
  "ts": 1796070600,
  "when": "2026-11-30T22:30:00",
  "alt": "Christmas Sensory Social Story: Noisy Holiday Parties and Headphones. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables Bundle for Kids, Advent, Social Stories and Schedules",
  "description": "Calm holiday weeks start here: an advent calendar, gift and family visit social stories, a holiday chore chart and a Christmas break day schedule, plus more. 8 printables for ADHD and autistic kids in one bundle. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin05",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_05_4618485132.png?v=1",
  "ts": 1796079600,
  "when": "2026-12-01T01:00:00",
  "alt": "Christmas Printables Bundle for Kids, Advent, Social Stories and Schedules. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, ADHD Routine Cards and Reward Charts",
  "description": "Fewer reminders, more wins. Picture routine posters, a reward chart, calm cards and a morning routine strip help ADHD and autistic kids see each step and finish it with less help. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin06",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_06_4511580807.png?v=1",
  "ts": 1796126400,
  "when": "2026-12-01T14:00:00",
  "alt": "Executive Function Toolkit for Kids, ADHD Routine Cards and Reward Charts. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Advent Calendar for Kids Printable, Calm December Activities from Day 1",
  "description": "December 1st: calm starts today. Kids pick up the advent calendar and do one gentle activity a day, from making paper snowflakes to sharing something they are grateful for. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998302?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin07",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_07_4615998302.png?v=1",
  "ts": 1796137200,
  "when": "2026-12-01T17:00:00",
  "alt": "Advent Calendar for Kids Printable, Calm December Activities from Day 1. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Visiting Family for Christmas Social Story, More People and More Noise",
  "description": "More people, more noise? A holiday visit social story prepares kids for busy family gatherings and reminds them they can use calming tools and take a quiet break when it feels like a lot. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030263?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin08",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_08_4616030263.png?v=1",
  "ts": 1796148000,
  "when": "2026-12-01T20:00:00",
  "alt": "Visiting Family for Christmas Social Story, More People and More Noise. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Holiday Gnome Calm Down Cards for Kids, Cocoa Breath and Snow Globe Pause",
  "description": "Cocoa breath, snow globe pause, a quiet corner or asking for help: cozy gnome cards give kids simple Christmas calm down ideas they can point to when feelings get big. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042576?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin09",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_09_4616042576.png?v=1",
  "ts": 1796157000,
  "when": "2026-12-01T22:30:00",
  "alt": "Holiday Gnome Calm Down Cards for Kids, Cocoa Breath and Snow Globe Pause. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Visual Schedule for Kids, Snow Day Activity Cards",
  "description": "Snow day tomorrow? Plan it! Kids choose cards like build a snowman, make snow angels and a pajama day, then stick them on their day board so the whole day feels calm and clear. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin10",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_10_4614268621.png?v=1",
  "ts": 1796166000,
  "when": "2026-12-02T01:00:00",
  "alt": "Christmas Break Visual Schedule for Kids, Snow Day Activity Cards. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "ADHD Morning Routine Chart",
  "title": "Morning and Bedtime Routine Bundle, Picture Routine Posters for Kids",
  "description": "Same steps, every single day. Brush teeth, put on shoes and take three slow breaths: picture posters for mornings and evenings help kids follow routines on their own. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4473346501?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin11",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_11_4473346501.png?v=1",
  "ts": 1796212800,
  "when": "2026-12-02T14:00:00",
  "alt": "Morning and Bedtime Routine Bundle, Picture Routine Posters for Kids. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas First Then Next Board, Holiday Evening Routine for Kids",
  "description": "Wrap presents, write to Santa, then quiet time. A festive First Then Next board shows kids what comes next on busy December evenings, so winding down feels easier. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042792?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin12",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_12_4616042792.png?v=1",
  "ts": 1796223600,
  "when": "2026-12-02T17:00:00",
  "alt": "Christmas First Then Next Board, Holiday Evening Routine for Kids. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "Christmas Social Stories Set for Autism, Gifts, Family Visits and Sensory",
  "description": "Social stories for the holiday season: giving and receiving presents, visiting family and when Christmas feels like a lot. Three gentle picture stories with caregiver guides, in one set. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin13",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_13_4618478623.png?v=1",
  "ts": 1796234400,
  "when": "2026-12-02T20:00:00",
  "alt": "Christmas Social Stories Set for Autism, Gifts, Family Visits and Sensory. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Holiday Helper Chore Chart for Kids, December Chores and Rewards",
  "description": "December chores, kid-sized. A weekly holiday chore chart with small tasks like making the bed and tidying up, plus a goal and reward box, keeps kids helping all month. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616655476?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin14",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_14_4616655476.png?v=1",
  "ts": 1796243400,
  "when": "2026-12-02T22:30:00",
  "alt": "Holiday Helper Chore Chart for Kids, December Chores and Rewards. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Gift Social Story, When a Present Is Not What You Expected",
  "description": "Surprised? Unsure? That's okay. This page of the gift exchange social story tells kids it is normal to have different feelings about a present, and shows calm, kind ways to respond. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998436?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin15",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_15_4615998436.png?v=1",
  "ts": 1796252400,
  "when": "2026-12-03T01:00:00",
  "alt": "Christmas Gift Social Story, When a Present Is Not What You Expected. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset System for Boys, Before I Begin Reset Starter Printable",
  "description": "Tiny or full? He chooses. The Before I Begin page lets boys pick a tiny, quick or full room reset and the support they want, so clean up starts with a choice, not a fight. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4539272201?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin16",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_16_4539272201.png?v=1",
  "ts": 1796299200,
  "when": "2026-12-03T14:00:00",
  "alt": "Room Reset System for Boys, Before I Begin Reset Starter Printable. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Christmas Activity Bundle for ADHD and Autistic Kids, 8 Calm Printables",
  "description": "8 calm Christmas printables in one bundle: feelings cards with cozy gnomes, a kindness advent calendar, a holiday chore chart, social stories and visual schedules for busy holiday weeks. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin17",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_17_4618485132.png?v=1",
  "ts": 1796310000,
  "when": "2026-12-03T17:00:00",
  "alt": "Christmas Activity Bundle for ADHD and Autistic Kids, 8 Calm Printables. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Sensory Overload Social Story, Bright Lights and Busy Places",
  "description": "Twinkly lights too bright? The My Eyes Notice Lights and Movement page helps kids understand busy holiday sights and choose what helps: look away, close their eyes or find a quieter place. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030123?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin18",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_18_4616030123.png?v=1",
  "ts": 1796320800,
  "when": "2026-12-03T20:00:00",
  "alt": "Christmas Sensory Overload Social Story, Bright Lights and Busy Places. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "Visiting Family Social Story with I Need a Break Card for Autistic Kids",
  "description": "An I Need a Break card for holiday visits: kids can hand or show it to let family know they need a quiet moment. Part of a visiting family for Christmas social story with a caregiver guide. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030263?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin19",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_19_4616030263.png?v=1",
  "ts": 1796329800,
  "when": "2026-12-03T22:30:00",
  "alt": "Visiting Family Social Story with I Need a Break Card for Autistic Kids. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Calm Down Corner Ideas",
  "title": "Christmas Feelings Cards for Kids, Missing Someone and Left Out Gnome Cards",
  "description": "Missing someone this Christmas? Gnome feelings cards help kids name harder holiday emotions like missing someone, left out, worried or disappointed, and find a calm idea that helps. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042576?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin20",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_20_4616042576.png?v=1",
  "ts": 1796338800,
  "when": "2026-12-04T01:00:00",
  "alt": "Christmas Feelings Cards for Kids, Missing Someone and Left Out Gnome Cards. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Chore Chart and Room Reset Bundle for Kids, Picture Chores and Room Homes",
  "description": "Helping hands, happy home. Picture chore cards for personal responsibility plus a room homes page show kids what to do and where everything goes, so tidy habits stick. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546844402?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin21",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_21_4546844402.png?v=1",
  "ts": 1796385600,
  "when": "2026-12-04T14:00:00",
  "alt": "Chore Chart and Room Reset Bundle for Kids, Picture Chores and Room Homes. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Day Schedule for Kids, Kindness Activity Cards",
  "description": "A kindness plan for the break: cards like deliver holiday cards, make a gratitude jar and fill a stocking for someone special turn winter break days into calm, kind routines. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin22",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_22_4614268621.png?v=1",
  "ts": 1796396400,
  "when": "2026-12-04T17:00:00",
  "alt": "Christmas Break Day Schedule for Kids, Kindness Activity Cards. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Social Story Set for Kids, Prepare Autistic Kids for the Holidays",
  "description": "Get ready for holiday moments with three Christmas social stories: presents, family visits and sensory overload. Read them together in the weeks before the big days. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin23",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_23_4618478623.png?v=1",
  "ts": 1796407200,
  "when": "2026-12-04T20:00:00",
  "alt": "Christmas Social Story Set for Kids, Prepare Autistic Kids for the Holidays. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "First Then Board Christmas Printable, Play Outside Then Hot Chocolate",
  "description": "Play outside, then cocoa! A Christmas First Then Next board with 60 picture cards helps kids move between winter activities with fewer battles. Made for autistic and ADHD kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042792?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin24",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_24_4616042792.png?v=1",
  "ts": 1796416200,
  "when": "2026-12-04T22:30:00",
  "alt": "First Then Board Christmas Printable, Play Outside Then Hot Chocolate. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Gift Giving Social Story for Kids, Wrapping Presents with Care",
  "description": "Wrapped with care, given with love. A Christmas social story page shows kids how to get a present ready, add a tag or a kind message, and enjoy the fun of giving. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998436?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin25",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_25_4615998436.png?v=1",
  "ts": 1796425200,
  "when": "2026-12-05T01:00:00",
  "alt": "Gift Giving Social Story for Kids, Wrapping Presents with Care. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset Choice Board for Kids, Tiny, Quick or Full Clean Up",
  "description": "Tiny, quick or full reset? The reset choice board lets kids pick how big today's clean up will be, so tidying fits their energy. Part of the Room Reset system for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin26",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_26_4546160710.png?v=1",
  "ts": 1796472000,
  "when": "2026-12-05T14:00:00",
  "alt": "Room Reset Choice Board for Kids, Tiny, Quick or Full Clean Up. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Holiday Printables Bundle for Kids, Calm Christmas Toolkit for ADHD and Autism",
  "description": "The calm Christmas bundle: First Then Next board, break day schedule, advent calendar, gnome feelings cards and social stories. Visual supports for every busy December day. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin27",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_27_4618485132.png?v=1",
  "ts": 1796482800,
  "when": "2026-12-05T17:00:00",
  "alt": "Holiday Printables Bundle for Kids, Calm Christmas Toolkit for ADHD and Autism. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Visiting Family Social Story: Plans Might Change and That Is Okay",
  "description": "Plans change, and that's okay. A holiday visit social story page helps kids handle travel changes and surprises during Christmas visits, and reminds them they can still have a good time. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030263?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin28",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_28_4616030263.png?v=1",
  "ts": 1796493600,
  "when": "2026-12-05T20:00:00",
  "alt": "Visiting Family Social Story: Plans Might Change and That Is Okay. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Gnome Emotion Cards for Kids, Christmas Feelings Flash Cards Printable",
  "description": "Every feeling is welcome: scared, sad, angry or motivated. Holiday gnome feelings cards help kids name what they feel during the busy season. Print, cut and keep them in a calm corner. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042576?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin29",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_29_4616042576.png?v=1",
  "ts": 1796502600,
  "when": "2026-12-05T22:30:00",
  "alt": "Gnome Emotion Cards for Kids, Christmas Feelings Flash Cards Printable. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Holiday Sensory Social Story, Christmas Routine Changes for Autism",
  "description": "Holiday changes, explained gently. The My Mind Notices Lots of Changes page tells kids that new plans and visits can feel tricky, and shows how a simple plan and questions help. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030123?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin30",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_30_4616030123.png?v=1",
  "ts": 1796511600,
  "when": "2026-12-06T01:00:00",
  "alt": "Holiday Sensory Social Story, Christmas Routine Changes for Autism. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, Calm Down and Reward Chart Printables",
  "description": "Calm, focus, celebrate. A hug a pillow calm poster and a daisy reward chart with tokens help ADHD and autistic kids reset their body and celebrate each small win. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin31",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_31_4511580807.png?v=1",
  "ts": 1796558400,
  "when": "2026-12-06T14:00:00",
  "alt": "Executive Function Toolkit for Kids, Calm Down and Reward Chart Printables. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Visual Schedule for Autism, First Then Next Holiday Board",
  "description": "One step, then the next. Hang stockings, wrap presents, watch a movie: a holiday First Then Next board helps kids through busy Christmas evenings with calm transitions. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042792?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin32",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_32_4616042792.png?v=1",
  "ts": 1796569200,
  "when": "2026-12-06T17:00:00",
  "alt": "Christmas Visual Schedule for Autism, First Then Next Holiday Board. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Winter Break Schedule for Kids, Christmas Activity Day Board Printable",
  "description": "Winter break, mapped out. A Christmas day board with 48 activity cards lets kids plan their day, from holiday games to baking, so long break days feel predictable. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin33",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_33_4614268621.png?v=1",
  "ts": 1796580000,
  "when": "2026-12-06T20:00:00",
  "alt": "Winter Break Schedule for Kids, Christmas Activity Day Board Printable. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Social Stories for Kids, Holiday Worries and Family Visits",
  "description": "Stories that ease holiday worries: gift time and visiting family, told with friendly pictures and simple words. A set of 3 Christmas social stories for autistic and ADHD kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin34",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_34_4618478623.png?v=1",
  "ts": 1796589000,
  "when": "2026-12-06T22:30:00",
  "alt": "Christmas Social Stories for Kids, Holiday Worries and Family Visits. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Holiday Chore Cards for Kids, Hang Stockings and Water the Plants",
  "description": "Hang stockings, water the plants, sweep the floor and make the bed: picture holiday chore cards show little helpers exactly what to do during Christmas break. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616655476?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin35",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49_35_4616655476.png?v=1",
  "ts": 1796598000,
  "when": "2026-12-07T01:00:00",
  "alt": "Holiday Chore Cards for Kids, Hang Stockings and Water the Plants. ADHD and autism friendly printable for kids in A4 and US Letter, instant download."
 }
];
  const csrf = (document.cookie.match(/csrftoken=([^;]+)/) || [])[1];
  if (!csrf) { console.error("Not logged in?"); return; }
  const H = {"X-CSRFToken": csrf, "X-Requested-With": "XMLHttpRequest", "X-Pinterest-AppState": "active"};
  // 1) board name -> id (by slug; several methods). You may also fill BOARD_IDS by hand.
  const BOARD_IDS = {};
  const slug = n => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const boards = {};
  for (const name of [...new Set(PINS.map(p => p.board))]) {
    const s = slug(name), path = `/${USER}/${s}/`; let id = BOARD_IDS[name] || null;
    if (!id) try {
      const q = encodeURIComponent(JSON.stringify({options: {username: USER, slug: s, field_set_key: "detailed"}, context: {}}));
      const r = await fetch(`/resource/BoardResource/get/?source_url=${encodeURIComponent(path)}&data=${q}`, {credentials: "include",
        headers: {"X-Requested-With": "XMLHttpRequest", "X-Pinterest-AppState": "active", "X-Pinterest-Source-Url": path,
                  "X-Pinterest-PWS-Handler": "www/[username]/[slug].js", "Accept": "application/json, text/javascript, */*, q=0.01"}});
      const t = await r.text(); try { id = JSON.parse(t).resource_response.data.id; } catch (e) {}
    } catch (e) {}
    if (!id) try {
      const html = await fetch(path, {credentials: "include"}).then(r => r.text());
      let i = -1;
      while (!id && (i = html.indexOf(path, i + 1)) >= 0) {
        const w = html.slice(Math.max(0, i - 1500), i + 1500);
        if (w.includes('"type":"board"')) { const m = w.match(/"id":"(\d{12,22})"/); if (m) id = m[1]; }
      }
    } catch (e) {}
    boards[name] = id; console.log(id ? "BOARD" : "BOARD NOT FOUND", name, id || "");
    await new Promise(res => setTimeout(res, 800));
  }
  // 2) post each pin when its time comes. Keep this tab open; if the laptop was off, overdue pins go out
  //    (one every ~2 min) the next time you run the script. Already-posted pins are remembered in this browser.
  const KEY = "gc_posted_cw49";
  const done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
  // Safety 2: a pin more than 3 hours late is skipped, not posted (protects against reruns after a browser restart).
  const MAX_LATE = 3 * 3600 * 1000;
  PINS.forEach(p => { if (!done.has(p.title) && p.ts * 1000 < Date.now() - MAX_LATE) { done.add(p.title); console.log("SKIPPED (too late)", p.title); } });
  localStorage.setItem(KEY, JSON.stringify([...done]));
  const post = async p => {
    const bid = boards[p.board];
    if (!bid) { console.warn("NO BOARD", p.board, "-> skipped", p.title); return false; }
    const opts = {board_id: bid, title: p.title, description: p.description, link: p.link, image_url: p.image_url,
      alt_text: p.alt, method: "uploaded", field_set_key: "create_success", skip_pin_create_log: true};
    const body = new URLSearchParams({source_url: "/pin-builder/", data: JSON.stringify({options: opts, context: {}})});
    const r = await fetch("/resource/PinResource/create/", {method: "POST", credentials: "include",
      headers: {...H, "Content-Type": "application/x-www-form-urlencoded"}, body});
    const j = await r.json().catch(() => ({}));
    const d = j.resource_response && j.resource_response.data;
    if (r.ok && d) { console.log("POSTED", new Date().toLocaleString(), "|", p.title, "| id:", d.id); return true; }
    console.warn("FAIL", p.title, r.status, JSON.stringify(j.resource_response || j).slice(0, 300)); return false;
  };
  while (PINS.some(p => !done.has(p.title))) {
    const due = PINS.filter(p => !done.has(p.title) && p.ts * 1000 <= Date.now());
    if (due.length) {
      const p = due[0];
      if (await post(p)) { done.add(p.title); localStorage.setItem(KEY, JSON.stringify([...done])); }
      await new Promise(res => setTimeout(res, due.length > 1 ? 120000 : 5000));
    } else {
      const next = PINS.filter(p => !done.has(p.title)).sort((x, y) => x.ts - y.ts)[0];
      console.log("Waiting. Next:", new Date(next.ts * 1000).toLocaleString(), "|", next.title, `| ${done.size} posted`);
      await new Promise(res => setTimeout(res, Math.min(30 * 60000, Math.max(60000, next.ts * 1000 - Date.now()))));
    }
  }
  console.log("All CW49 pins posted.");
})();
