// GraphicsCamp CW50 (7-13 Dec 2026) SCHEDULER, 35 pins: posts each pin at its time while this tab is open. Run in the browser console on pinterest.com while in the BUSINESS account.
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
  "board": "Pink Christmas Decor",
  "title": "Pink Snowman Christmas Print, Printable Pink Christmas Wall Art",
  "description": "A snowman in pink: a cozy snowman with a pink hat and scarf makes easy Christmas decor you print at home. Frame it for a girls room or nursery, part of a printable pink Christmas wall art set. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin02",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_02_4606588813.png?v=1",
  "ts": 1796655600,
  "when": "2026-12-07T17:00:00",
  "alt": "Pink Snowman Christmas Print, Printable Pink Christmas Wall Art. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables for Kids Bundle, Calm Advent and Holiday Schedules",
  "description": "Print tonight, calm all month: a calm advent calendar, gnome feelings cards, holiday chore cards, a sensory social story and a Christmas break day board, 8 printables for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin03",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_03_4618485132.png?v=1",
  "ts": 1796666400,
  "when": "2026-12-07T20:00:00",
  "alt": "Christmas Printables for Kids Bundle, Calm Advent and Holiday Schedules. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle, Pink Christmas Decor Prints and Matching Gift Tags",
  "description": "Pink prints and matching tags: a rocking horse, a pink cottage, a big coquette bow and a Santa This Way sign, plus gift tags and picture bingo. Print at home Christmas decor in one bundle. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin04",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_04_4624273985.png?v=1",
  "ts": 1796675400,
  "when": "2026-12-07T22:30:00",
  "alt": "Pink Christmas Bundle, Pink Christmas Decor Prints and Matching Gift Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Day Schedule for Kids, Winter Break Visual Planner",
  "description": "Cozy break days, planned together. Kids pick activity cards like baking, crafts and a movie for their Christmas break day board, so long days at home feel calm and predictable. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin05",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_05_4614268621.png?v=1",
  "ts": 1796684400,
  "when": "2026-12-08T01:00:00",
  "alt": "Christmas Break Day Schedule for Kids, Winter Break Visual Planner. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Decor Printable, Heart Snowflake Print and Pink Bingo",
  "description": "Print, frame, play bingo: a pink heart snowflake print hangs next to picture bingo cards from the same pink Christmas bundle, with 26 prints, 24 gift tags and 30 bingo cards. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin07",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_07_4624273985.png?v=1",
  "ts": 1796742000,
  "when": "2026-12-08T17:00:00",
  "alt": "Pink Christmas Decor Printable, Heart Snowflake Print and Pink Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Holiday Chore Chart for Kids, Sweep, Water Plants and Hang Decorations",
  "description": "Little jobs for holiday helpers: sweep the floor, water the plants, hang decorations and organize the shelf. Picture chore cards make December helping easy for kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616655476?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin08",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_08_4616655476.png?v=1",
  "ts": 1796752800,
  "when": "2026-12-08T20:00:00",
  "alt": "Holiday Chore Chart for Kids, Sweep, Water Plants and Hang Decorations. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Gallery Wall Printable, Santa, Reindeer and Snowman Prints",
  "description": "Frame some pink holiday joy: a polar bear, a candy cane, Santa with a present, a reindeer with a bow and a pink snowman. A printable gallery wall for a coquette Christmas room. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin09",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_09_4606588813.png?v=1",
  "ts": 1796761800,
  "when": "2026-12-08T22:30:00",
  "alt": "Pink Christmas Gallery Wall Printable, Santa, Reindeer and Snowman Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Christmas Activities for Autistic Kids, Calm Holiday Printables Bundle",
  "description": "Fewer holiday meltdowns: a sensory social story, a gift exchange story and holiday chore cards help kids know what is coming. Part of a bundle of 8 calm Christmas printables. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin10",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_10_4618485132.png?v=1",
  "ts": 1796770800,
  "when": "2026-12-09T01:00:00",
  "alt": "Christmas Activities for Autistic Kids, Calm Holiday Printables Bundle. Printable from GraphicsCamp on Etsy, instant download."
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
  "title": "Calm Christmas Printables Bundle for Kids, Advent, Feelings and Stories",
  "description": "Your calm Christmas kit: an advent calendar, gnome feelings cards, a family visit social story, a holiday chore chart and a gift story. 8 printables for busy December days. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin12",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_12_4618485132.png?v=1",
  "ts": 1796828400,
  "when": "2026-12-09T17:00:00",
  "alt": "Calm Christmas Printables Bundle for Kids, Advent, Feelings and Stories. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Gift Tags Printable, Print at Home To From Tags",
  "description": "Pretty tags, printed at home: a wreath, stockings, pink trees, a cottage, Santa This Way and a heart. 24 printable to/from gift tags for sweet pink Christmas presents. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253210?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin13",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_13_4624253210.png?v=1",
  "ts": 1796839200,
  "when": "2026-12-09T20:00:00",
  "alt": "Pink Christmas Gift Tags Printable, Print at Home To From Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandinavian Christmas Bundle, Neutral Wall Art, Gift Tags and Bingo",
  "description": "Scandi Christmas, all in one set: a snowman, a red truck, a penguin, a bear and fox in the mountains plus matching gift tags and picture bingo. 18 neutral prints to print at home. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624545333?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin14",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_14_4624545333.png?v=1",
  "ts": 1796848200,
  "when": "2026-12-09T22:30:00",
  "alt": "Scandinavian Christmas Bundle, Neutral Wall Art, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Wall Art Printable, Let It Snow and Pink Ornament Prints",
  "description": "Let it snow in soft pink: a fox in a pink scarf, Let It Snow typography and pink ornaments. Printable Christmas posters for a girls room, nursery or holiday corner. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin15",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_15_4606588813.png?v=1",
  "ts": 1796857200,
  "when": "2026-12-10T01:00:00",
  "alt": "Pink Christmas Wall Art Printable, Let It Snow and Pink Ornament Prints. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bingo Game Printable, Christmas Party Bingo for Kids",
  "description": "Pink bingo party tonight: 30 picture bingo cards with trees, bows, Santa and Ho Ho Ho, plus calling cards and bow markers. An easy print at home Christmas party game. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin17",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_17_4624253374.png?v=1",
  "ts": 1796914800,
  "when": "2026-12-10T17:00:00",
  "alt": "Pink Christmas Bingo Game Printable, Christmas Party Bingo for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Calm Corner Printables, Social Story and Holiday Chore Cards",
  "description": "A calm corner, Christmas edition: a visiting family social story and holiday chore cards are part of a bundle of 8 calm Christmas printables for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin18",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_18_4618485132.png?v=1",
  "ts": 1796925600,
  "when": "2026-12-10T20:00:00",
  "alt": "Christmas Calm Corner Printables, Social Story and Holiday Chore Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle Printable, Wall Art, Gift Tags and Bingo Cards",
  "description": "Pink from wall to wrapping: Ho Ho Ho and nutcracker prints, pink ornaments, gift tags and bingo cards. One matching pink Christmas bundle to decorate, wrap and play. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin19",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_19_4624273985.png?v=1",
  "ts": 1796934600,
  "when": "2026-12-10T22:30:00",
  "alt": "Pink Christmas Bundle Printable, Wall Art, Gift Tags and Bingo Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Autism Visual Schedule",
  "title": "Christmas Social Stories Set for Kids, Family Visits, Gifts and Sensory",
  "description": "Three stories for big days: visiting family, opening presents and when Christmas feels like a lot. Gentle picture social stories with caregiver guides for autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618478623?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin20",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_20_4618478623.png?v=1",
  "ts": 1796943600,
  "when": "2026-12-11T01:00:00",
  "alt": "Christmas Social Stories Set for Kids, Family Visits, Gifts and Sensory. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Fa La La Pink Christmas Wall Art, Printable Pink Christmas Tree Poster",
  "description": "Fa la la in pink: a Christmas tree with pink bows, a reindeer, a coquette bow, a polar bear and Fa La La La typography. Printable pink Christmas decor to frame at home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin22",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_22_4606588813.png?v=1",
  "ts": 1797001200,
  "when": "2026-12-11T17:00:00",
  "alt": "Fa La La Pink Christmas Wall Art, Printable Pink Christmas Tree Poster. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Woodland Christmas Bundle for Kids, Animal Prints, Gift Tags and Bingo",
  "description": "Bright woodland Christmas fun: a fox with a tree, a penguin with a star and a skating bunny, plus gift tags and picture bingo. 30 colorful prints for a kids room, all printable. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624953451?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin23",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_23_4624953451.png?v=1",
  "ts": 1797012000,
  "when": "2026-12-11T20:00:00",
  "alt": "Woodland Christmas Bundle for Kids, Animal Prints, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Visual Schedule Printables for Kids, Holiday Bundle for Autism",
  "description": "Holiday visuals, ready to print: a gift story, gnome feelings cards, chore cards, an advent calendar and a First Then Next board. 8 Christmas printables in one bundle. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin24",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_24_4618485132.png?v=1",
  "ts": 1797021000,
  "when": "2026-12-11T22:30:00",
  "alt": "Christmas Visual Schedule Printables for Kids, Holiday Bundle for Autism. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle, Pink Presents Print, Snowman Print and Bingo",
  "description": "Presents, bows and bingo: pink presents and a pink snowman frame up next to picture bingo cards. The pink Christmas bundle has 26 prints, gift tags and a bingo game. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin25",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_25_4624273985.png?v=1",
  "ts": 1797030000,
  "when": "2026-12-12T01:00:00",
  "alt": "Pink Christmas Bundle, Pink Presents Print, Snowman Print and Bingo. Printable from GraphicsCamp on Etsy, instant download."
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
  "title": "Christmas Break Printables for Kids, Calm Holiday Bundle for ADHD",
  "description": "Calm break, happy kids: a holiday chore chart, a break day board, gnome feelings cards, a sensory story and a First Then Next board for calm winter break days. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin27",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_27_4618485132.png?v=1",
  "ts": 1797087600,
  "when": "2026-12-12T17:00:00",
  "alt": "Christmas Break Printables for Kids, Calm Holiday Bundle for ADHD. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Gift Tags, Printable Reindeer and Nutcracker Tags",
  "description": "Tag every gift in pink: reindeer, a nutcracker, presents, a candy cane and ornaments on printable to/from tags. Print, cut and tie them on with ribbon. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253210?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin28",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_28_4624253210.png?v=1",
  "ts": 1797098400,
  "when": "2026-12-12T20:00:00",
  "alt": "Pink Christmas Gift Tags, Printable Reindeer and Nutcracker Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandinavian Christmas Bingo, Printable Picture Bingo for Kids",
  "description": "Cozy Scandi bingo night: 30 picture bingo cards with a fox, deer, penguin, cottage and wreath, plus calling cards and holly markers. A calm Christmas party game for families. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624549252?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin29",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_29_4624549252.png?v=1",
  "ts": 1797107400,
  "when": "2026-12-12T22:30:00",
  "alt": "Scandinavian Christmas Bingo, Printable Picture Bingo for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Decor Printable, Pink Ornaments and Pink Cottage Prints",
  "description": "A soft pink holiday corner: pink ornaments and a snowy pink cottage make simple print at home Christmas decor for a girls room or reading nook. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin30",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_30_4606588813.png?v=1",
  "ts": 1797116400,
  "when": "2026-12-13T01:00:00",
  "alt": "Pink Christmas Decor Printable, Pink Ornaments and Pink Cottage Prints. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle, Print at Home Pink Christmas Decor, Tags, Bingo",
  "description": "Decorate, wrap and play: Santa, a heart snowflake and a pink cottage on the wall, matching gift tags for presents and picture bingo for a holiday party, all in one bundle. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin32",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_32_4624273985.png?v=1",
  "ts": 1797174000,
  "when": "2026-12-13T17:00:00",
  "alt": "Pink Christmas Bundle, Print at Home Pink Christmas Decor, Tags, Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Woodland Christmas Gift Tags for Kids, Printable Animal To From Tags",
  "description": "Cheerful tags for kids' gifts: a fox, a bear, a penguin and a reindeer in bright woodland Christmas style. 30 printable to/from gift tags to print, cut and tie on. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624952547?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin33",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_33_4624952547.png?v=1",
  "ts": 1797184800,
  "when": "2026-12-13T20:00:00",
  "alt": "Woodland Christmas Gift Tags for Kids, Printable Animal To From Tags. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables for Kids, Gift Story, Feelings Cards and Chores",
  "description": "Gifts, feelings, little chores: a gift exchange story, gnome feelings cards and holiday chore cards help kids through the busy season. Part of 8 calm Christmas printables. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin34",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_34_4618485132.png?v=1",
  "ts": 1797193800,
  "when": "2026-12-13T22:30:00",
  "alt": "Christmas Printables for Kids, Gift Story, Feelings Cards and Chores. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Bingo Printable Pink, Winter Picture Bingo for Kids",
  "description": "Winter bingo, pink edition: picture cards with hearts, bows, Santa and Holly Jolly Season. 30 printable bingo cards for classroom parties and family game nights. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw50_pin35",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw50/cw50_35_4624253374.png?v=1",
  "ts": 1797202800,
  "when": "2026-12-14T01:00:00",
  "alt": "Christmas Bingo Printable Pink, Winter Picture Bingo for Kids. Printable from GraphicsCamp on Etsy, instant download."
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
  const KEY = "gc_posted_cw50";
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
