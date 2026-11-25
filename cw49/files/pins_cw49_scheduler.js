// GraphicsCamp CW49 (30 Nov - 6 Dec 2026, Pink + Cyber Week version of 25 Nov) SCHEDULER, 35 pins: posts each pin at its time while this tab is open. Run in the browser console on pinterest.com while in the BUSINESS account.
// F12 -> Console -> paste -> Enter. Uses Pinterest's own web endpoints with your login session (unofficial).
(async () => {
  const USER = "graphicscampshop";
  const PINS = [
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset System for Kids, My Personal Room Reset Checklist Printable",
  "description": "Their room, their own reset. The personal room reset page lets kids write the few steps that make their room feel ready, so cleaning up follows their plan instead of your reminders. Made for ADHD and autistic kids. Cyber Week: 50% off in the shop until December 1. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin01",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_01_4546160710.png?v=1",
  "ts": 1796040000,
  "when": "2026-11-30T14:00:00",
  "alt": "Room Reset System for Kids, My Personal Room Reset Checklist Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Calm Christmas Advent Calendar for Kids, Printable Countdown Starts December 1",
  "description": "Advent starts tomorrow! Print this calm advent calendar tonight and give kids one kind or calming activity for each of the 24 days before Christmas, like a warm drink, a kind note or holiday music. Cyber Week: 50% off in the shop until December 1. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998302?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin02",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_02_4615998302.png?v=1",
  "ts": 1796050800,
  "when": "2026-11-30T17:00:00",
  "alt": "Calm Christmas Advent Calendar for Kids, Printable Countdown Starts December 1. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Wall Art Set, Printable Pink Christmas Gallery Wall Prints",
  "description": "A pink Christmas gallery wall you can print at home: a pink gingerbread cottage, a bow wreath, a Christmas tree with pink bows, a heart snowflake and gingham trees. Frame them for a girls room, nursery or cozy holiday corner. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin03",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_03_4606588813.png?v=1",
  "ts": 1796061600,
  "when": "2026-11-30T20:00:00",
  "alt": "Pink Christmas Wall Art Set, Printable Pink Christmas Gallery Wall Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables Bundle for Kids, Advent, Social Stories and Schedules",
  "description": "Calm holiday weeks start here: an advent calendar, gift and family visit social stories, a holiday chore chart and a Christmas break day schedule, plus more. 8 printables for ADHD and autistic kids in one bundle. Cyber Week: 50% off in the shop until December 1. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin04",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_04_4618485132.png?v=1",
  "ts": 1796070600,
  "when": "2026-11-30T22:30:00",
  "alt": "Christmas Printables Bundle for Kids, Advent, Social Stories and Schedules. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle, Printable Wall Art, Gift Tags and Picture Bingo",
  "description": "Decor, tags and a game in one pink Christmas bundle: 26 printable wall art prints, 24 matching gift tags and a picture bingo game with 30 cards. One sweet coquette look for your walls, presents and holiday party. Cyber Week: 50% off in the shop until December 1. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin05",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_05_4624273985.png?v=1",
  "ts": 1796079600,
  "when": "2026-12-01T01:00:00",
  "alt": "Pink Christmas Bundle, Printable Wall Art, Gift Tags and Picture Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, ADHD Routine Cards and Reward Charts",
  "description": "Fewer reminders, more wins. Picture routine posters, a reward chart, calm cards and a morning routine strip help ADHD and autistic kids see each step and finish it with less help. Cyber Week: 50% off in the shop until December 1. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin06",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_06_4511580807.png?v=1",
  "ts": 1796126400,
  "when": "2026-12-01T14:00:00",
  "alt": "Executive Function Toolkit for Kids, ADHD Routine Cards and Reward Charts. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandinavian Christmas Wall Art, 18 Whimsical Woodland Prints Printable",
  "description": "A Scandi Christmas gallery wall in soft neutral colors: a woodland fox, a snowy village, a little Christmas tree, a deer and a polar bear. 18 whimsical prints to frame for a nursery or kids room. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614203166?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin07",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_07_4614203166.png?v=1",
  "ts": 1796137200,
  "when": "2026-12-01T17:00:00",
  "alt": "Scandinavian Christmas Wall Art, 18 Whimsical Woodland Prints Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle for Girls Room, Coquette Christmas Decor Printables",
  "description": "Everything pink for Christmas: a rocking horse, stockings, presents with pink bows, a nutcracker and a Santa This Way sign, plus matching gift tags and picture bingo. One bundle, one sweet holiday look. Cyber Week: 50% off in the shop until December 1. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin08",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_08_4624273985.png?v=1",
  "ts": 1796148000,
  "when": "2026-12-01T20:00:00",
  "alt": "Pink Christmas Bundle for Girls Room, Coquette Christmas Decor Printables. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables Bundle for Kids, Calm Holiday Printables for ADHD",
  "description": "Calm Christmas printables for kids: gnome feelings cards, a kindness advent calendar, a gift exchange social story, a holiday chore chart and a family visit story, all in one bundle for busy December days. Cyber Week: 50% off in the shop until December 1. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin09",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_09_4618485132.png?v=1",
  "ts": 1796157000,
  "when": "2026-12-01T22:30:00",
  "alt": "Christmas Printables Bundle for Kids, Calm Holiday Printables for ADHD. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Coquette Christmas Wall Art, Pink Christmas Decor Printable Posters",
  "description": "Coquette Christmas walls in soft pink: a nutcracker, a heart snowflake, presents with bows, a polar bear in a pink scarf and a candy cane. Print at home and frame for an easy pink holiday room. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin10",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_10_4606588813.png?v=1",
  "ts": 1796166000,
  "when": "2026-12-02T01:00:00",
  "alt": "Coquette Christmas Wall Art, Pink Christmas Decor Printable Posters. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Morning Routine Chart",
  "title": "Morning and Bedtime Routine Bundle, Picture Routine Posters for Kids",
  "description": "Same steps, every single day. Brush teeth, put on shoes and take three slow breaths: picture posters for mornings and evenings help kids follow routines on their own. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4473346501?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin11",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_11_4473346501.png?v=1",
  "ts": 1796212800,
  "when": "2026-12-02T14:00:00",
  "alt": "Morning and Bedtime Routine Bundle, Picture Routine Posters for Kids. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Break Visual Schedule for Kids, Snow Day Activity Cards",
  "description": "Snow day tomorrow? Plan it! Kids choose cards like build a snowman, make snow angels and a pajama day, then stick them on their day board so the whole day feels calm and clear. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614268621?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin12",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_12_4614268621.png?v=1",
  "ts": 1796223600,
  "when": "2026-12-02T17:00:00",
  "alt": "Christmas Break Visual Schedule for Kids, Snow Day Activity Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Posters Printable, Ho Ho Ho and Holly Jolly Season Prints",
  "description": "Ho ho ho in pink! Big pink bow, Ho Ho Ho and Holly Jolly Season typography prints make quick, budget-friendly Christmas decor. Print at home, hang and enjoy the season. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin13",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_13_4606588813.png?v=1",
  "ts": 1796234400,
  "when": "2026-12-02T20:00:00",
  "alt": "Pink Christmas Posters Printable, Ho Ho Ho and Holly Jolly Season Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Christmas Printables for Kids Bundle, Advent, Feelings Cards and Schedules",
  "description": "Busy December? Print these: a calm advent calendar, a sensory social story, gnome feelings cards, holiday chore cards and a First Then Next board. 8 Christmas printables for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin14",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_14_4618485132.png?v=1",
  "ts": 1796243400,
  "when": "2026-12-02T22:30:00",
  "alt": "Christmas Printables for Kids Bundle, Advent, Feelings Cards and Schedules. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Gift Tags Printable, Coquette To From Tags for Presents",
  "description": "Gift tags in pretty pink: 24 printable to/from tags with a Christmas tree, bows, Santa, a fox, a polar bear and a snowman. Print, cut, punch a hole and add ribbon for sweet holiday presents. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253210?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin15",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_15_4624253210.png?v=1",
  "ts": 1796252400,
  "when": "2026-12-03T01:00:00",
  "alt": "Pink Christmas Gift Tags Printable, Coquette To From Tags for Presents. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset System for Boys, Before I Begin Reset Starter Printable",
  "description": "Tiny or full? He chooses. The Before I Begin page lets boys pick a tiny, quick or full room reset and the support they want, so clean up starts with a choice, not a fight. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4539272201?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin16",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_16_4539272201.png?v=1",
  "ts": 1796299200,
  "when": "2026-12-03T14:00:00",
  "alt": "Room Reset System for Boys, Before I Begin Reset Starter Printable. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Woodland Christmas Wall Art for Kids Room, Printable Holiday Animal Posters",
  "description": "Woodland friends for the holidays: a hedgehog with a candy cane, Joy Peace Love and a penguin with a gift. Printable Christmas posters for a cozy kids room or playroom. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4604914759?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin17",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_17_4604914759.png?v=1",
  "ts": 1796310000,
  "when": "2026-12-03T17:00:00",
  "alt": "Woodland Christmas Wall Art for Kids Room, Printable Holiday Animal Posters. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle Printable, Wall Art, Gift Tags and Bingo Cards",
  "description": "Pink decor, tags and bingo: a reindeer with a pink bow, a pink snowman, plus printable gift tags and a picture bingo game. The full pink Christmas collection in one bundle. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin18",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_18_4624273985.png?v=1",
  "ts": 1796320800,
  "when": "2026-12-03T20:00:00",
  "alt": "Pink Christmas Bundle Printable, Wall Art, Gift Tags and Bingo Cards. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Christmas Activity Bundle for ADHD and Autistic Kids, 8 Calm Printables",
  "description": "8 calm Christmas printables in one bundle: feelings cards with cozy gnomes, a kindness advent calendar, a holiday chore chart, social stories and visual schedules for busy holiday weeks. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin19",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_19_4618485132.png?v=1",
  "ts": 1796329800,
  "when": "2026-12-03T22:30:00",
  "alt": "Christmas Activity Bundle for ADHD and Autistic Kids, 8 Calm Printables. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Printable Pink Christmas Decor, Christmas Wall Art to Print at Home",
  "description": "Print at home pink Christmas decor: a rocking horse, bow ornaments, a fox in a pink scarf, a reindeer and Fa La La La typography. Instant digital prints for an easy holiday makeover. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin20",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_20_4606588813.png?v=1",
  "ts": 1796338800,
  "when": "2026-12-04T01:00:00",
  "alt": "Printable Pink Christmas Decor, Christmas Wall Art to Print at Home. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Chore Chart and Room Reset Bundle for Kids, Picture Chores and Room Homes",
  "description": "Helping hands, happy home. Picture chore cards for personal responsibility plus a room homes page show kids what to do and where everything goes, so tidy habits stick. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546844402?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin21",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_21_4546844402.png?v=1",
  "ts": 1796385600,
  "when": "2026-12-04T14:00:00",
  "alt": "Chore Chart and Room Reset Bundle for Kids, Picture Chores and Room Homes. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Gift Exchange Social Story for Kids, Choosing a Christmas Present",
  "description": "Picking a gift for someone special: this Christmas social story shows kids how to think about what a person likes, needs or enjoys, and how good it feels to give. Includes a caregiver guide. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4615998436?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin22",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_22_4615998436.png?v=1",
  "ts": 1796396400,
  "when": "2026-12-04T17:00:00",
  "alt": "Gift Exchange Social Story for Kids, Choosing a Christmas Present. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Picture Bingo for Kids, Printable Christmas Bingo Game",
  "description": "Pink Christmas bingo night: 30 picture bingo cards with trees, bows, Santa and snowmen, plus calling cards and bow markers. A cute holiday party game for kids, families and classrooms. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin23",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_23_4624253374.png?v=1",
  "ts": 1796407200,
  "when": "2026-12-04T20:00:00",
  "alt": "Pink Christmas Picture Bingo for Kids, Printable Christmas Bingo Game. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Activities for ADHD Kids, Calm Holiday Printables Bundle",
  "description": "Calm kids, calm December: a kindness advent calendar and gnome feelings cards are part of a bundle of 8 Christmas printables that help kids through busy holiday weeks. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin24",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_24_4618485132.png?v=1",
  "ts": 1796416200,
  "when": "2026-12-04T22:30:00",
  "alt": "Christmas Activities for ADHD Kids, Calm Holiday Printables Bundle. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Bundle, Coquette Bow and Fox Prints for Girls Room",
  "description": "A pink Christmas corner: a fox in a pink scarf and a big coquette bow on stripes are two of 26 prints in the Pink Christmas Bundle, together with matching gift tags and picture bingo. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin25",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_25_4624273985.png?v=1",
  "ts": 1796425200,
  "when": "2026-12-05T01:00:00",
  "alt": "Pink Christmas Bundle, Coquette Bow and Fox Prints for Girls Room. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Chore Chart for Kids",
  "title": "Room Reset Choice Board for Kids, Tiny, Quick or Full Clean Up",
  "description": "Tiny, quick or full reset? The reset choice board lets kids pick how big today's clean up will be, so tidying fits their energy. Part of the Room Reset system for ADHD and autistic kids. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4546160710?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin26",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_26_4546160710.png?v=1",
  "ts": 1796472000,
  "when": "2026-12-05T14:00:00",
  "alt": "Room Reset Choice Board for Kids, Tiny, Quick or Full Clean Up. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Neutral Christmas Decor Printable, Scandinavian Woodland Christmas Prints",
  "description": "Neutral Christmas decor to print: a winter bunny, ornaments, It's the most wonderful time of the year, a snowy cottage and a wreath. 18 whimsical Scandi prints for a calm holiday nursery. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614203166?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin27",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_27_4614203166.png?v=1",
  "ts": 1796482800,
  "when": "2026-12-05T17:00:00",
  "alt": "Neutral Christmas Decor Printable, Scandinavian Woodland Christmas Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Tree Wall Art Printable, Christmas Tree Pink Bows Poster",
  "description": "One pink tree, big holiday mood: a Christmas tree with pink bows makes a simple framed poster for a girls room or nursery. Part of a printable pink Christmas wall art set. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin28",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_28_4606588813.png?v=1",
  "ts": 1796493600,
  "when": "2026-12-05T20:00:00",
  "alt": "Pink Christmas Tree Wall Art Printable, Christmas Tree Pink Bows Poster. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Printables Bundle for Busy Parents, Holiday Chores and Social Stories",
  "description": "Holiday helpers for busy parents: a holiday chore chart, a visiting family social story and a gift exchange story are part of 8 calm Christmas printables for kids in one bundle. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin29",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_29_4618485132.png?v=1",
  "ts": 1796502600,
  "when": "2026-12-05T22:30:00",
  "alt": "Christmas Printables Bundle for Busy Parents, Holiday Chores and Social Stories. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Gift Tags Printable Pink, To From Santa Tags with Bows",
  "description": "To: you, from: Santa. Pink printable gift tags with a rocking horse, a snowflake, Ho Ho Ho and Let It Snow make presents look sweet. Print as many as you need. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253210?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin30",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_30_4624253210.png?v=1",
  "ts": 1796511600,
  "when": "2026-12-06T01:00:00",
  "alt": "Christmas Gift Tags Printable Pink, To From Santa Tags with Bows. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "ADHD Printables for Kids",
  "title": "Executive Function Toolkit for Kids, Calm Down and Reward Chart Printables",
  "description": "Calm, focus, celebrate. A hug a pillow calm poster and a daisy reward chart with tokens help ADHD and autistic kids reset their body and celebrate each small win. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4511580807?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin31",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_31_4511580807.png?v=1",
  "ts": 1796558400,
  "when": "2026-12-06T14:00:00",
  "alt": "Executive Function Toolkit for Kids, Calm Down and Reward Chart Printables. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Visiting Family for Christmas Social Story, More People and More Noise",
  "description": "More people, more noise? A holiday visit social story prepares kids for busy family gatherings and reminds them they can use calming tools and take a quiet break when it feels like a lot. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4616030263?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin32",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_32_4616030263.png?v=1",
  "ts": 1796569200,
  "when": "2026-12-06T17:00:00",
  "alt": "Visiting Family for Christmas Social Story, More People and More Noise. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "The Pink Christmas Bundle: 26 Wall Art Prints, Gift Tags and Bingo",
  "description": "The pink Christmas bundle: Ho Ho Ho and Holly Jolly prints, a pink cottage, printable gift tags and picture bingo cards. Decorate, wrap and play with one matching pink set. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin33",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_33_4624273985.png?v=1",
  "ts": 1796580000,
  "when": "2026-12-06T20:00:00",
  "alt": "The Pink Christmas Bundle: 26 Wall Art Prints, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Holiday Printables Bundle for Kids, Calm Christmas Toolkit for ADHD and Autism",
  "description": "The calm Christmas bundle: First Then Next board, break day schedule, advent calendar, gnome feelings cards and social stories. Visual supports for every busy December day. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4618485132?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin34",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_34_4618485132.png?v=1",
  "ts": 1796589000,
  "when": "2026-12-06T22:30:00",
  "alt": "Holiday Printables Bundle for Kids, Calm Christmas Toolkit for ADHD and Autism. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Bingo Calling Cards, Pink Christmas Picture Bingo Printable",
  "description": "Call it, cover it, bingo! Picture calling cards with a cottage, presents, stockings, a tree and more go with 30 pink Christmas bingo cards and bow markers. Fun for class parties and family nights. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin35",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49b_35_4624253374.png?v=1",
  "ts": 1796598000,
  "when": "2026-12-07T01:00:00",
  "alt": "Christmas Bingo Calling Cards, Pink Christmas Picture Bingo Printable. Printable from GraphicsCamp on Etsy, instant download."
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
