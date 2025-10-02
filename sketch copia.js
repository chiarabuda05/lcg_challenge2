let xMax = 400;
let yMax = 600;

let xRocket= xMax/2;
let yRocket= yMax*4;

function setup() {
  createCanvas(400, 1000);
}

function draw() {
  background("#19344eff");
  //mostrare un testo bianco che dice 
  //le coordinate del mouse sul foglio da disegno
  fill (255); //bianco
  textSize(20);
  //la stringa, x, y
  text("mouseX: " + mouseX + ", \
     mouseY: " + mouseY,20,20);
  

  
  //stelle 
  push();
  //3 cicli 
  //ciclo 1 stella a,40
  for(let i=0; i < 120; i++){
    let starX = (i*37) %width +(i%3) * 5;
    let starY = (i*73) %height +(i%7);
    if(i % 2 == 0) {
    //stella tipo a
      fill("#ffff9fff");
    ellipse (starX,starY,6);}
    else if (i % 3 == 0 ) {
      //stella tipo b
      fill("#ffff9fff");
    ellipse (starX,starY,5);}
    else {
      //stella tipo c
      fill(255,255,100);
    ellipse (starX,starY,5);
    }


  }
  //ciclo 2 stella b,40
  //ciclo 3 stella c,40
  
  pop();
//contesto disegno, si isola quel disegno ensomma
  push();
  fill(220);
  stroke(40);
  rectMode(CENTER)
  rect(xRocket, yRocket+30, 80, 180, 15);

  //triangolo
  fill (200,50,50);
  triangle(xRocket-40,yRocket-50, 
    xRocket+40, yRocket-50, 
    xRocket,yRocket-120);

  //triangolino dx
  fill (200,50,50);
  triangle(xRocket+70,yRocket+140, 
    xRocket+40, yRocket+90, 
    xRocket+0,yRocket+120);
  
  //triangolino sx
  fill (200,50,50);
  triangle(xRocket-70,yRocket+140, 
    xRocket-40, yRocket+90, 
    xRocket+0,yRocket+120);

  //cerchio 
  fill(40,150,220);
  stroke(255);
  strokeWeight(3);
  ellipse(xRocket,yRocket+30,48,48);
  //finire il contesto

  pop();

 
  yRocket= (yRocket-20);
  let soglia= -200;
  if (yRocket < soglia) {
    yRocket= yMax*4;}
 
  } 