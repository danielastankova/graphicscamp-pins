// GraphicsCamp CW50 (7-13 Dec 2026, printables and bingo week, version of 27 Nov) SCHEDULER, 35 pins: posts each pin at its time while this tab is open. Run in the browser console on pinterest.com while in the BUSINESS account.
// F12 -> Console -> paste -> Enter. Uses Pinterest's own web endpoints with your login session (unofficial).
(async () => {
  const USER = "graphicscampshop";
  const PINS = [
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset Map for Kids, Step by Step Room Cleaning Printable for ADHD",
  "description": "A map for messy rooms: the room reset map walks kids through zones, from making a walking path to clearing one surface, so cleaning up has a clear order. Made for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin01",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_01_4546160710.png?v=1",
  "ts": 1796644800,
  "when": "2026-12-07T14:00:00",
  "alt": "Room Reset Map for Kids, Step by Step Room Cleaning Printable for ADHD. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables for Kids, Calm Holiday Bundle for ADHD and Autism",
  "description": "Christmas printables for kids in one bundle: gnome feelings cards, holiday chore cards, a sensory social story, a calm advent calendar and a Christmas break day schedule. 8 printables that help ADHD and autistic kids through busy December. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin02",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_02_4618485132.png?v=1",
  "ts": 1796655600,
  "when": "2026-12-07T17:00:00",
  "alt": "Christmas Printables for Kids, Calm Holiday Bundle for ADHD and Autism. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Bingo Printable, Pink Picture Bingo Cards for Kids",
  "description": "Christmas bingo printable in soft pink: 30 picture bingo cards with bows, Santa, trees and Holly Jolly Season, plus calling cards and markers. Print tonight and play at a class party or family game night. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin03",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_03_4624253374.png?v=1",
  "ts": 1796666400,
  "when": "2026-12-07T20:00:00",
  "alt": "Christmas Bingo Printable, Pink Picture Bingo Cards for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Activities, Kids Day Schedule for Winter Break",
  "description": "Christmas break activities planned together: kids pick picture cards like baking, crafts, a walk or a movie and put them on their day board. Long winter break days feel calm and predictable. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin04",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_04_4614268621.png?v=1",
  "ts": 1796675400,
  "when": "2026-12-07T22:30:00",
  "alt": "Christmas Break Activities, Kids Day Schedule for Winter Break. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Cards Printable, 74 Holiday Cards in A6 and 4x6",
  "description": "Christmas cards printable in many styles: pink ornaments, a penguin with a gift, Be Kind Be Merry and It's the most wonderful time of the year. 74 designs you print at home, ready in minutes. Printable PDF cards in A6 + 4x6 in, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626436809?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin05",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_05_4626436809.png?v=1",
  "ts": 1796684400,
  "when": "2026-12-08T01:00:00",
  "alt": "Christmas Cards Printable, 74 Holiday Cards in A6 and 4x6. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, Morning Routine and Calm Posters",
  "description": "Little steps, big independence. Good Morning, Put On Shoes and Take 3 Slow Breaths posters show kids each step on their own, with fewer reminders from you. For ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin06",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_06_4511580807.png?v=1",
  "ts": 1796731200,
  "when": "2026-12-08T14:00:00",
  "alt": "Executive Function Toolkit for Kids, Morning Routine and Calm Posters. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Bingo Game, Scandinavian Picture Bingo for Kids",
  "description": "Christmas bingo game in calm Scandinavian colors: 30 picture bingo cards with a fox, a deer, a cottage, trees and a wreath, plus calling cards. A cozy printable game for families and classrooms. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624549252?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin07",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_07_4624549252.png?v=1",
  "ts": 1796742000,
  "when": "2026-12-08T17:00:00",
  "alt": "Christmas Bingo Game, Scandinavian Picture Bingo for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "Christmas Social Stories for Autistic Kids, Family, Gifts and Sensory",
  "description": "Christmas social stories for big holiday days: visiting family, giving and getting presents, and when Christmas feels like a lot. Three gentle picture stories with caregiver guides. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin08",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_08_4618478623.png?v=1",
  "ts": 1796752800,
  "when": "2026-12-08T20:00:00",
  "alt": "Christmas Social Stories for Autistic Kids, Family, Gifts and Sensory. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Gift Tags Printable, Pink, Scandi and Woodland To From Tags",
  "description": "Christmas gift tags printable in three styles: bright woodland kids tags, soft pink tags and neutral Scandinavian tags. 72 to/from tags to print at home and tie on with ribbon. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626016332?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin09",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_09_4626016332.png?v=1",
  "ts": 1796761800,
  "when": "2026-12-08T22:30:00",
  "alt": "Christmas Gift Tags Printable, Pink, Scandi and Woodland To From Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Printable Christmas Decor, Pink Gallery Wall to Print at Home",
  "description": "Printable Christmas decor for last-minute walls: Holly Jolly Season, a pink cottage, a reindeer with a bow, pink ornaments and stockings. Choose from 26 pink prints, print at home and frame today. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin10",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_10_4606588813.png?v=1",
  "ts": 1796770800,
  "when": "2026-12-09T01:00:00",
  "alt": "Printable Christmas Decor, Pink Gallery Wall to Print at Home. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Morning Routine Chart",
  "title": "Morning and Bedtime Routine Bundle, Visual Routine Posters for Kids",
  "description": "Smooth mornings, calm bedtimes. Picture posters for waking up, getting dressed and breakfast, plus a calm bedtime poster and a routine strip, help kids follow each step on their own. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4473346501?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin11",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_11_4473346501.png?v=1",
  "ts": 1796817600,
  "when": "2026-12-09T14:00:00",
  "alt": "Morning and Bedtime Routine Bundle, Visual Routine Posters for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Bingo for Toddlers, Colorful Animal Picture Bingo",
  "description": "Christmas bingo for toddlers and preschool: 30 big picture bingo cards with a fox, a penguin, a gingerbread house and more, plus calling cards. No reading needed, just print and play. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624959592?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin12",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_12_4624959592.png?v=1",
  "ts": 1796828400,
  "when": "2026-12-09T17:00:00",
  "alt": "Christmas Bingo for Toddlers, Colorful Animal Picture Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Activities for Kids, Calm Printables for Winter Break",
  "description": "Christmas activities for kids at home: a gift social story and holiday helper chore cards from a bundle of 8 calm Christmas printables. Visual supports for ADHD and autistic kids during the break. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin13",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_13_4618485132.png?v=1",
  "ts": 1796839200,
  "when": "2026-12-09T20:00:00",
  "alt": "Christmas Activities for Kids, Calm Printables for Winter Break. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Christmas Chore Chart for Kids, Holiday Helper Picture Chore Cards",
  "description": "A Christmas chore chart for kids: tidy your toys, wash the dishes, take out the trash and fold the laundry. Picture chore cards make December helping easy for little holiday helpers. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616655476?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin14",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_14_4616655476.png?v=1",
  "ts": 1796848200,
  "when": "2026-12-09T22:30:00",
  "alt": "Christmas Chore Chart for Kids, Holiday Helper Picture Chore Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Gift Tags, Printable To From Tags for Presents",
  "description": "Pink Christmas gift tags to print at home: a bow wreath, stockings, gingham trees, a pink cottage, Santa This Way and a heart. 24 printable to/from tags for pretty pink presents. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253210?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin15",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_15_4624253210.png?v=1",
  "ts": 1796857200,
  "when": "2026-12-10T01:00:00",
  "alt": "Pink Christmas Gift Tags, Printable To From Tags for Presents. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset System for Boys, My Personal Room Reset Checklist",
  "description": "His room, his checklist. The personal room reset page lets boys write the steps that make their room feel ready, so tidying follows their own plan. For ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4539272201?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin16",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_16_4539272201.png?v=1",
  "ts": 1796904000,
  "when": "2026-12-10T14:00:00",
  "alt": "Room Reset System for Boys, My Personal Room Reset Checklist. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Feelings Cards, Gnome Calm Down Cards for Kids",
  "description": "Christmas feelings cards with cozy gnomes: Reindeer Stretch, Cozy Squeeze and more calm down ideas kids can point to when holiday feelings get big. Print, cut and keep them close. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042576?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin17",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_17_4616042576.png?v=1",
  "ts": 1796914800,
  "when": "2026-12-10T17:00:00",
  "alt": "Christmas Feelings Cards, Gnome Calm Down Cards for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Bingo Cards, 30 Pink Picture Bingo Cards Printable",
  "description": "Christmas bingo cards in pink: trees, wreaths, Santa, bows and Let It Snow pictures on 30 printable bingo cards with calling cards. Fun for school parties, playdates and family nights. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin18",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_18_4624253374.png?v=1",
  "ts": 1796925600,
  "when": "2026-12-10T20:00:00",
  "alt": "Christmas Bingo Cards, 30 Pink Picture Bingo Cards Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "First Then Christmas Board, Holiday Visual Schedule for Kids",
  "description": "A First Then Next Christmas board: kids see what happens now, next and after, from wrapping presents to quiet time. Picture cards make busy December transitions calmer for autistic and ADHD kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616042792?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin19",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_19_4616042792.png?v=1",
  "ts": 1796934600,
  "when": "2026-12-10T22:30:00",
  "alt": "First Then Christmas Board, Holiday Visual Schedule for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Printables, Wall Art, Gift Tags and Bingo Bundle",
  "description": "Pink Christmas printables in one bundle: a pink heart snowflake, a pink snowman, a tree with bows, gift tags and bingo cards. 26 prints, 24 tags and 30 bingo cards to decorate, wrap and play. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin20",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_20_4624273985.png?v=1",
  "ts": 1796943600,
  "when": "2026-12-11T01:00:00",
  "alt": "Pink Christmas Printables, Wall Art, Gift Tags and Bingo Bundle. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Chore Chart and Room Reset Bundle, Picture Chore Cards for Kids",
  "description": "Chores kids can really do: sort lights and darks, match socks and decide what to do with each thing. Picture chore cards and room reset pages build tidy habits. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546844402?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin21",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_21_4546844402.png?v=1",
  "ts": 1796990400,
  "when": "2026-12-11T14:00:00",
  "alt": "Chore Chart and Room Reset Bundle, Picture Chore Cards for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Schedule for Kids, Visual Day Board Printable",
  "description": "A Christmas break schedule kids can build themselves: activity cards for baking, crafts, games and outdoor time on a picture day board. It makes long winter break days feel calm. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin22",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_22_4614268621.png?v=1",
  "ts": 1797001200,
  "when": "2026-12-11T17:00:00",
  "alt": "Christmas Break Schedule for Kids, Visual Day Board Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Bingo Printable, Neutral Scandinavian Bingo Cards",
  "description": "Christmas bingo printable in neutral colors: picture cards with a cottage, a fox, a wreath, trees and Merry Christmas. 30 Scandinavian style bingo cards with calling cards for a calm holiday game. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624549252?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin23",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_23_4624549252.png?v=1",
  "ts": 1797012000,
  "when": "2026-12-11T20:00:00",
  "alt": "Christmas Bingo Printable, Neutral Scandinavian Bingo Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Gifts Social Story, Giving and Receiving Presents",
  "description": "A Christmas gifts social story: how to choose a present, how giving feels and what to do when a gift is a surprise. Gentle pictures and a caregiver guide for autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998436?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin24",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_24_4615998436.png?v=1",
  "ts": 1797021000,
  "when": "2026-12-11T22:30:00",
  "alt": "Christmas Gifts Social Story, Giving and Receiving Presents. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandinavian Gift Tags, Neutral Christmas Gift Tags Printable",
  "description": "Scandinavian Christmas gift tags in soft neutrals: a snowy cottage, a little tree, a wreath, ornaments and Merry Christmas. 18 printable to/from tags for calm, cozy wrapping. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624549100?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin25",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_25_4624549100.png?v=1",
  "ts": 1797030000,
  "when": "2026-12-12T01:00:00",
  "alt": "Scandinavian Gift Tags, Neutral Christmas Gift Tags Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset for Kids, When My Room Feels Too Messy Printable",
  "description": "Too messy? Start with one spot. This room reset page lets kids pick one small place to clean first, like the doorway or the bed, so a messy room feels doable. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin26",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_26_4546160710.png?v=1",
  "ts": 1797076800,
  "when": "2026-12-12T14:00:00",
  "alt": "Room Reset for Kids, When My Room Feels Too Messy Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Visiting Family at Christmas Social Story, Hugs Are Optional",
  "description": "Visiting family at Christmas: this social story tells kids that hugs and kisses are optional and shows other ways to say hello, like a wave or a high five. With a caregiver guide. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030263?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin27",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_27_4616030263.png?v=1",
  "ts": 1797087600,
  "when": "2026-12-12T17:00:00",
  "alt": "Visiting Family at Christmas Social Story, Hugs Are Optional. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Party Games for Kids, Woodland Picture Bingo",
  "description": "Christmas party games for kids made easy: 30 colorful woodland picture bingo cards with calling cards. Print them for a class party, a playdate or a family Christmas game night. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624959592?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin28",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_28_4624959592.png?v=1",
  "ts": 1797098400,
  "when": "2026-12-12T20:00:00",
  "alt": "Christmas Party Games for Kids, Woodland Picture Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Kids Christmas Gift Tags, Bright Woodland Animal To From Tags",
  "description": "Kids Christmas gift tags in bright colors: a fox, a bunny, a penguin, a bear and Christmas trees. 30 printable to/from tags to make every present under the tree feel special. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624952547?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin29",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_29_4624952547.png?v=1",
  "ts": 1797107400,
  "when": "2026-12-12T22:30:00",
  "alt": "Kids Christmas Gift Tags, Bright Woodland Animal To From Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Last Minute Christmas Decor, Scandinavian Prints, Tags and Bingo",
  "description": "Last minute Christmas decor you can print tonight: a snowy cottage, a woodland fox, ornaments, gift tags and bingo cards. The Scandinavian Christmas bundle is an instant download, no shipping. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624545333?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin30",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_30_4624545333.png?v=1",
  "ts": 1797116400,
  "when": "2026-12-13T01:00:00",
  "alt": "Last Minute Christmas Decor, Scandinavian Prints, Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, Calm Down Poster and Small Wins Chart",
  "description": "Big feelings, calm tools. A Close Eyes and Count to 10 poster and a Small Wins Matter page help ADHD and autistic kids calm their body and notice their progress. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin31",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_31_4511580807.png?v=1",
  "ts": 1797163200,
  "when": "2026-12-13T14:00:00",
  "alt": "Executive Function Toolkit for Kids, Calm Down Poster and Small Wins Chart. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Calm Christmas for Kids, Sensory Social Story for the Holidays",
  "description": "A calm Christmas for kids who feel a lot: My Nose Notices Strong Smells and a caregiver guide explain holiday sensory changes in simple words and show what helps. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030123?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin32",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_32_4616030123.png?v=1",
  "ts": 1797174000,
  "when": "2026-12-13T17:00:00",
  "alt": "Calm Christmas for Kids, Sensory Social Story for the Holidays. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "Christmas Social Stories for Kids, Prepare for Holiday Days",
  "description": "Christmas social stories for kids: choosing a hug or a wave, gift time, when Christmas feels like a lot and opening presents gently. Read them together before the big days. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin33",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_33_4618478623.png?v=1",
  "ts": 1797184800,
  "when": "2026-12-13T20:00:00",
  "alt": "Christmas Social Stories for Kids, Prepare for Holiday Days. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Cards Instant Download, Printable Holiday Card Set",
  "description": "Christmas cards as an instant download: a pink Christmas tree and Fa La La are 2 of 74 designs in A6 and 4x6 inch. Print as many as you need, no shipping and no waiting. Printable PDF cards in A6 + 4x6 in, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626436809?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin34",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_34_4626436809.png?v=1",
  "ts": 1797193800,
  "when": "2026-12-13T22:30:00",
  "alt": "Christmas Cards Instant Download, Printable Holiday Card Set. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Last Minute Gift Tags, Printable Christmas To From Tags",
  "description": "Last minute gift tags you can print tonight: pink, Scandinavian and bright woodland styles. 72 printable Christmas to/from tags in one bundle, ready to cut and tie on. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626016332?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin35",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50c_35_4626016332.png?v=1",
  "ts": 1797202800,
  "when": "2026-12-14T01:00:00",
  "alt": "Last Minute Gift Tags, Printable Christmas To From Tags. Printable from GraphicsCamp on Etsy, instant download."
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
  const KEY = "gc_posted_cw50c";
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
  console.log("All CW50 pins posted.");
})();
