let w = 100;
let x = 51;
let y = 51;
let x2 = 51;
let y2 = 383;
let z = 1.0;
let keydown = false;
let ylast = 51;
let xlow = 51;
let xhigh = 349;
let xrange = 296;
let deltaY = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  if(keydown && mouseIsPressed){
    deltaY = mouseY - ylast;
    
    
    x = constrain(x,xlow,xhigh);
    y = constrain(y,xlow,xhigh);
    x2 = constrain(x2,xlow,xhigh);
    z = float(constrain((z * 400) - deltaY, 200, 400))/400;

    w = 100 * z;

    
    xrange = 296*z;
    xhigh = 400 - ((400 - xrange)/2);
    xlow = (400 - xrange)/2;
    y2 = 382 - (180 * (1-z));

    ylast = mouseY;


  }
  
  if(mouseIsPressed && !keydown){

    x = constrain(mouseX,xlow,xhigh);
    y = constrain(mouseY,xlow,xhigh);
    x2 = x;

    

    
  }
  
  scaledx = float((x - 52) / 296);
  scaledy = float((y - 52) / 296);
  

  
  strokeWeight(0);
  fill(125);
  w2 = w - (15 * scaledy);
  

  ellipse(x2,y2 + (3 * scaledy),w2,w2/3);

  
  fill(250,10,10);
  ellipse(x, y, w, w);
  
}

function keyPressed(){
  keydown = true;
  ylast = mouseY;

}

function keyReleased(){
  keydown = false;
}

