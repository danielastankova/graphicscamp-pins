// GraphicsCamp CW49 (30 Nov - 6 Dec 2026, decor week, version of 27 Nov) SCHEDULER, 35 pins: posts each pin at its time while this tab is open. Run in the browser console on pinterest.com while in the BUSINESS account.
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Wall Art Set, 26 Coquette Bow Christmas Prints to Print at Home",
  "description": "Pink Christmas wall art for a cozy holiday gallery wall: a Christmas tree with pink bows, a striped coquette bow, Santa with a present, a reindeer and a pink heart snowflake. Pick your favorites from 26 prints, print them at home and frame them for a girls room, nursery or living room. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin02",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_02_4606588813.png?v=1",
  "ts": 1796050800,
  "when": "2026-11-30T17:00:00",
  "alt": "Pink Christmas Wall Art Set, 26 Coquette Bow Christmas Prints to Print at Home. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Whimsical Christmas Decor, Scandinavian Woodland Wall Art Prints",
  "description": "Whimsical Christmas decor in soft neutral colors: a woodland fox, a deer with a little bird, a snowy Christmas tree, a winter bunny and a penguin. 18 Scandinavian style prints for a calm, cozy holiday wall in a nursery, kids room or living room. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614203166?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin03",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_03_4614203166.png?v=1",
  "ts": 1796061600,
  "when": "2026-11-30T20:00:00",
  "alt": "Whimsical Christmas Decor, Scandinavian Woodland Wall Art Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Tree Ideas, Pink Christmas Tree Wall Art Prints",
  "description": "Pink Christmas tree ideas for your walls: a tree with pink bows, three gingham trees, presents, pink ornaments and a bow wreath. A set of 6 printable posters that turns any corner into a soft pink Christmas display. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273661?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin04",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_04_4624273661.png?v=1",
  "ts": 1796070600,
  "when": "2026-11-30T22:30:00",
  "alt": "Pink Christmas Tree Ideas, Pink Christmas Tree Wall Art Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Printable Christmas Cards, 74 Christmas Cards to Print at Home",
  "description": "Printable Christmas cards in many styles: a fox in a pink scarf, a gingerbread house, a holly wreath, Santa and more. 74 designs in A6 and 4x6 inch, so you can print as many cards as you need tonight for family, friends and teachers. Cyber Week: 50% off in the shop until December 1. Printable PDF cards in A6 + 4x6 in, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626436809?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin05",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_05_4626436809.png?v=1",
  "ts": 1796079600,
  "when": "2026-12-01T01:00:00",
  "alt": "Printable Christmas Cards, 74 Christmas Cards to Print at Home. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Coquette Christmas Decor, Pink Bow Christmas Wall Art Set",
  "description": "Coquette Christmas decor with big pink bows: a classic pink bow, a bow on pink stripes and Holly Jolly Season typography. A set of 6 printable posters for a girly, soft pink holiday room. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273773?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin07",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_07_4624273773.png?v=1",
  "ts": 1796137200,
  "when": "2026-12-01T17:00:00",
  "alt": "Coquette Christmas Decor, Pink Bow Christmas Wall Art Set. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Wall Art for Kids Room, 30 Woodland Christmas Prints",
  "description": "Christmas wall art for a kids room: a fox carrying a tree, a bear and bunny reading a story, a penguin with a wreath, a mouse with presents and a deer with a bird. Choose from 30 colorful woodland prints to print and frame at home. Cyber Week: 50% off in the shop until December 1. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4604914759?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin08",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_08_4604914759.png?v=1",
  "ts": 1796148000,
  "when": "2026-12-01T20:00:00",
  "alt": "Christmas Wall Art for Kids Room, 30 Woodland Christmas Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Room Decor Bundle, Wall Art, Gift Tags and Bingo",
  "description": "Pink Christmas room decor in one bundle: a pink rocking horse print, pink picture bingo cards and matching gift tags. 26 wall art prints, 24 gift tags and 30 bingo cards, all printable, for a soft pink holiday at home. Cyber Week: 50% off in the shop until December 1. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin09",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_09_4624273985.png?v=1",
  "ts": 1796157000,
  "when": "2026-12-01T22:30:00",
  "alt": "Pink Christmas Room Decor Bundle, Wall Art, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Neutral Christmas Decor, Merry Christmas and Wreath Wall Art Prints",
  "description": "Neutral Christmas decor in warm cream tones: Merry Christmas, It's the most wonderful time of the year and a red bow wreath. A set of 6 simple printable posters for a calm, minimal holiday home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624545215?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin10",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_10_4624545215.png?v=1",
  "ts": 1796166000,
  "when": "2026-12-02T01:00:00",
  "alt": "Neutral Christmas Decor, Merry Christmas and Wreath Wall Art Prints. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Nursery Decor, Fox, Polar Bear and Snowman Prints",
  "description": "Pink Christmas nursery decor: a fox and a polar bear in pink scarves, a reindeer, a snowman with a pink hat and a pink rocking horse. A set of 6 printable posters for a sweet baby or toddler room at Christmas. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624280188?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin12",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_12_4624280188.png?v=1",
  "ts": 1796223600,
  "when": "2026-12-02T17:00:00",
  "alt": "Pink Christmas Nursery Decor, Fox, Polar Bear and Snowman Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Woodland Christmas Decor, Fox, Penguin and Bunny Wall Art Set",
  "description": "Woodland Christmas decor in a soft Scandinavian style: a little fox, a penguin in a knit hat and a winter bunny. A set of 6 printable animal posters for a nursery, playroom or kids room. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624544949?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin13",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_13_4624544949.png?v=1",
  "ts": 1796234400,
  "when": "2026-12-02T20:00:00",
  "alt": "Woodland Christmas Decor, Fox, Penguin and Bunny Wall Art Set. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Festive Animal Christmas Prints, Colorful Kids Room Wall Art Set",
  "description": "Festive animal Christmas prints in bright colors: a fox carrying a tree, a bunny decorating the tree and a raccoon with a gift. A set of 6 printable posters for a happy kids room or playroom. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624952959?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin14",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_14_4624952959.png?v=1",
  "ts": 1796243400,
  "when": "2026-12-02T22:30:00",
  "alt": "Festive Animal Christmas Prints, Colorful Kids Room Wall Art Set. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Gift Tags Printable Bundle, 72 Tags in 3 Styles",
  "description": "Christmas gift tags printable in three styles: Scandinavian woodland, bright kids woodland and soft pink. 72 to/from tags to print, cut and tie onto every present under the tree. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626016332?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin15",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_15_4626016332.png?v=1",
  "ts": 1796252400,
  "when": "2026-12-03T01:00:00",
  "alt": "Christmas Gift Tags Printable Bundle, 72 Tags in 3 Styles. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Room Ideas, Holly Jolly and Pink Reindeer Prints",
  "description": "Pink Christmas room ideas for a girls room: Holly Jolly Season typography and a reindeer with a pink bow above a cozy reading corner. 2 of 26 coquette bow Christmas prints you can print at home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin17",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_17_4606588813.png?v=1",
  "ts": 1796310000,
  "when": "2026-12-03T17:00:00",
  "alt": "Pink Christmas Room Ideas, Holly Jolly and Pink Reindeer Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandinavian Christmas Decor Bundle, Prints, Gift Tags and Bingo",
  "description": "Scandinavian Christmas decor in one bundle: a deer with a robin, neutral picture bingo cards and matching gift tags. 18 wall art prints, 18 gift tags and a bingo game, all printable at home. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624545333?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin18",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_18_4624545333.png?v=1",
  "ts": 1796320800,
  "when": "2026-12-03T20:00:00",
  "alt": "Scandinavian Christmas Decor Bundle, Prints, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Winter Animal Wall Art, Skiing Bear, Skating Bunny and Snowboard Hedgehog",
  "description": "Winter animal wall art full of fun: a bear skiing, a bunny ice skating and a hedgehog snowboarding through the pines. A set of 6 printable winter posters for a kids room or playroom. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624953127?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin19",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_19_4624953127.png?v=1",
  "ts": 1796329800,
  "when": "2026-12-03T22:30:00",
  "alt": "Winter Animal Wall Art, Skiing Bear, Skating Bunny and Snowboard Hedgehog. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Letter to Santa Printable, Dear Santa Letter Template for Kids",
  "description": "A letter to Santa printable for kids: a sweet pink Dear Santa page with lines for their Christmas wishes, signed with love. Print it at home tonight and mail it to the North Pole or leave it out with the cookies. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626960853?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin20",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49s_1_4626960853.png?v=1",
  "ts": 1796338800,
  "when": "2026-12-04T01:00:00",
  "alt": "Letter to Santa Printable, Dear Santa Letter Template for Kids. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Pink Christmas Decor Ideas, Pink Christmas Bundle Printables",
  "description": "Pink Christmas decor ideas for your walls: Santa with a present, a polar bear in a pink scarf, pink ornaments, plus gift tags and bingo cards from the same set. 26 prints, 24 tags and 30 bingo cards in one pink bundle. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273985?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin22",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_22_4624273985.png?v=1",
  "ts": 1796396400,
  "when": "2026-12-04T17:00:00",
  "alt": "Pink Christmas Decor Ideas, Pink Christmas Bundle Printables. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Snowy Christmas Village Print, Scandinavian Winter Landscape Wall Art",
  "description": "A snowy Christmas village print: little houses, pine trees and soft snow in calm Scandinavian colors. Part of a set of 6 printable winter landscape posters for a cozy holiday home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624549584?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin23",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_23_4624549584.png?v=1",
  "ts": 1796407200,
  "when": "2026-12-04T20:00:00",
  "alt": "Snowy Christmas Village Print, Scandinavian Winter Landscape Wall Art. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Kids Christmas Decor Bundle, Woodland Prints, Gift Tags and Bingo",
  "description": "Kids Christmas decor in one bright bundle: a fox decorating the tree, colorful picture bingo cards and woodland gift tags. 30 wall art prints, 30 gift tags and a bingo game, all printable at home. Printable PDFs: posters in A2 + 2:3 ratio, gift tags and bingo in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624953451?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin24",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_24_4624953451.png?v=1",
  "ts": 1796416200,
  "when": "2026-12-04T22:30:00",
  "alt": "Kids Christmas Decor Bundle, Woodland Prints, Gift Tags and Bingo. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Pink Ornament Christmas Print, Pink Christmas Tree Wall Art",
  "description": "A pink ornament Christmas print: three bow ornaments hanging from a holly branch in soft pink and red. Part of a set of 6 pink Christmas tree posters you print and frame at home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624273661?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin25",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_25_4624273661.png?v=1",
  "ts": 1796425200,
  "when": "2026-12-05T01:00:00",
  "alt": "Pink Ornament Christmas Print, Pink Christmas Tree Wall Art. Printable from GraphicsCamp on Etsy, instant download."
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
  "title": "Christmas Quote Prints, Be Kind Be Merry and Joy Peace Love Wall Art",
  "description": "Christmas quote prints in happy colors: Be Kind Be Merry on a Christmas tree and Joy Peace Love in bright letters. A set of 6 printable quote posters for a kids room or classroom. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624953293?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin27",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_27_4624953293.png?v=1",
  "ts": 1796482800,
  "when": "2026-12-05T17:00:00",
  "alt": "Christmas Quote Prints, Be Kind Be Merry and Joy Peace Love Wall Art. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Girls Room Christmas Decor, Pink Fox and Polar Bear Prints",
  "description": "Girls room Christmas decor in soft pink: a fox and a polar bear wrapped in cozy pink scarves. Part of a set of 6 pink nursery Christmas prints to print and frame at home. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624280188?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin28",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_28_4624280188.png?v=1",
  "ts": 1796493600,
  "when": "2026-12-05T20:00:00",
  "alt": "Girls Room Christmas Decor, Pink Fox and Polar Bear Prints. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Wish List for Kids, Printable Wish List and Santa Letter",
  "description": "A Christmas wish list for kids in pink and woodland styles: a numbered wish list, a draw my Christmas wishes page and a fill in letter to Santa. Easy pages for little ones to share their wishes. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626960853?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin29",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49s_2_4626960853.png?v=1",
  "ts": 1796502600,
  "when": "2026-12-05T22:30:00",
  "alt": "Christmas Wish List for Kids, Printable Wish List and Santa Letter. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Christmas Cards to Print at Home, 74 Printable Holiday Cards",
  "description": "Christmas cards to print at home: a pink gingerbread cottage and pink presents are 2 of 74 card designs in A6 and 4x6 inch. Print, fold or cut and write your message, no waiting for the mail. Printable PDF cards in A6 + 4x6 in, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4626436809?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin30",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_30_4626436809.png?v=1",
  "ts": 1796511600,
  "when": "2026-12-06T01:00:00",
  "alt": "Christmas Cards to Print at Home, 74 Printable Holiday Cards. Printable from GraphicsCamp on Etsy, instant download."
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
  "board": "Pink Christmas Decor",
  "title": "Coquette Christmas Prints, Pink Bow, Fox, Candy Cane and Reindeer",
  "description": "Coquette Christmas prints in soft pink: a big pink bow, a fox in a pink scarf, a candy cane with a bow and a reindeer. 4 of 26 printable Christmas posters for a girls room or nursery. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4606588813?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin32",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_32_4606588813.png?v=1",
  "ts": 1796569200,
  "when": "2026-12-06T17:00:00",
  "alt": "Coquette Christmas Prints, Pink Bow, Fox, Candy Cane and Reindeer. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Kids Christmas Wall Art, Holly Jolly Hedgehog and Gingerbread House",
  "description": "Kids Christmas wall art in bright colors: a holly jolly hedgehog, a polar bear with cocoa, a gingerbread house at night, a penguin with gifts and a pink reindeer. Choose from 30 woodland prints. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4604914759?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin33",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_33_4604914759.png?v=1",
  "ts": 1796580000,
  "when": "2026-12-06T20:00:00",
  "alt": "Kids Christmas Wall Art, Holly Jolly Hedgehog and Gingerbread House. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Christmas Printables for Kids",
  "title": "Scandi Christmas Decor, Snowy Cottage, Merry Christmas and Snowman",
  "description": "Scandi Christmas decor in soft neutrals: a snowy cottage, Merry Christmas typography and a snowman. 3 of 18 whimsical woodland prints to print at home for a calm holiday wall. Printable poster PDFs in A2 + 2:3 ratio (16x24 in), instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4614203166?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin34",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_34_4614203166.png?v=1",
  "ts": 1796589000,
  "when": "2026-12-06T22:30:00",
  "alt": "Scandi Christmas Decor, Snowy Cottage, Merry Christmas and Snowman. Printable from GraphicsCamp on Etsy, instant download."
 },
 {
  "board": "Pink Christmas Decor",
  "title": "Christmas Bingo for Kids, Pink Picture Bingo Game",
  "description": "Christmas bingo for kids: 30 pink picture bingo cards with Santa, bows, presents and Holly Jolly Season, plus calling cards. An easy printable game for class parties and family game night. Printable PDF in A4 + US Letter, instant download from GraphicsCamp on Etsy.",
  "link": "https://www.etsy.com/listing/4624253374?utm_source=pinterest&utm_medium=social&utm_campaign=cw49_pin35",
  "image_url": "https://raw.githubusercontent.com/danielastankova/graphicscamp-pins/main/cw49/cw49c_35_4624253374.png?v=1",
  "ts": 1796598000,
  "when": "2026-12-07T01:00:00",
  "alt": "Christmas Bingo for Kids, Pink Picture Bingo Game. Printable from GraphicsCamp on Etsy, instant download."
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
  const KEY = "gc_posted_cw49c";
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
