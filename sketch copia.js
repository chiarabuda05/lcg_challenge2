let xMax = 1200;
let barcaX = 0;
let direzione = 1;

let tempoSole = 0; // per pulsazione raggi
let nuvoleX = 0;   // per movimento nuvole


function setup () {
  createCanvas(800, 800);
}

function draw() {
  background("#A8E8FF"); // azzurro pastello
  // --- SABBIA 
  fill("#F8E7A1");
  ellipse(400, 620, 600, 200);
  
  // --- MARE (prima della sabbia)
  fill("#5BA3D9");
  rect(0, 600, 800, 200);


// --- PALMA
// tronco (storto per effetto palma)
fill("#8B5A2B");
quad(290, 430, 310, 430, 330, 550, 270, 550);

// foglie
fill("#2b6a46ff");
for (let i = 0; i < 9; i++) {
  let angle = PI * 2 * (i / 7);
  let x = 100 + cos(angle) * 60;
  let y = 180 + sin(angle) * 60;
  push();
  translate(300, 380);
  rotate(angle);
  ellipse(1, 1, 190, 30);
  pop();
}
// foglie
fill("#2E8B57");
for (let i = 0; i < 6; i++) {
  let angle = PI * 2 * (i / 6);
  let x = 120 + cos(angle) * 60;
  let y = 380 + sin(angle) * 60;
  push();
  translate(300, 380);
  rotate(angle);
  ellipse(0, 0, 120, 30);
  pop();
}

// foglie
fill("#38ab6aff");
for (let i = 0; i < 4; i++) {
  let angle = PI * 2 * (i / 9);
  let x = 120 + cos(angle) * 60;
  let y = 380 + sin(angle) * 60;
  push();
  translate(300, 380);
  rotate(angle);
  ellipse(0, 0, 40, 10);
  pop();
}
 

noStroke();


// SOLE
fill("#FFF79A");
ellipse(700, 100, 150, 150);

push();
// raggi con pulsazione
stroke("#FFF79A");
strokeWeight(6);
let pulsazione = sin(tempoSole) * 20; // intensità della pulsazione
for (let i = 0; i < 12; i++) {
  let angle = PI * 2 * (i / 12);
  let x1 = 700 + cos(angle) * (90 + pulsazione);
  let y1 = 100 + sin(angle) * (90 + pulsazione);
  let x2 = 700 + cos(angle) * (120 + pulsazione);
  let y2 = 100 + sin(angle) * (120 + pulsazione);
  line(x1, y1, x2, y2);
}
pop();

tempoSole += 0.02; // velocità pulsazione
 

 
  // nuvole che si muovono
fill("#f5f3f3f5");
nuvoleX += 0.5; // velocità nuvole
if (nuvoleX > width + 200) { // reset quando escono
  nuvoleX = -200;
}
  {
ellipse(60 + nuvoleX, 80, 150, 70);
ellipse(160 + nuvoleX, 110, 150, 100);
ellipse(200 + nuvoleX, 150, 160, 90); 
ellipse(300 + nuvoleX, 110, 100, 60);
ellipse(350 + nuvoleX, 130, 150, 80);
fill("#f7f7f7af");
ellipse(250 + nuvoleX, 150, 150, 100);
ellipse(110 + nuvoleX, 150, 170, 80); 
ellipse(80 + nuvoleX, 100, 100, 80);
ellipse(80 + nuvoleX, 80, 100, 60);

  }
   
  push()

  // scafo
  fill("#A0522D");
  rect(barcaX, 620, 200, 50);

  // vela
  fill(255);
  triangle(barcaX + 100, 600, barcaX + 100, 400, barcaX + 200, 500);

  //albero della barca
  fill("#A0522D");
  rect(barcaX + 100, 400, 15, 250);
  noStroke();


  pop()


  barcaX= (barcaX-2);
  let soglia= -200;
  if (barcaX < soglia) {
    barcaX= xMax;}


  } 