
let w = 100;
let x = 51;
let y = 51;
let x2= 51;
let y2 =383;
let z = 1.0;
let zlast = 1.0;
let keydown = false;
let ylast = y;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  xrange = 296*z;
  xhigh = 400 - ((400 - xrange)/2);
  xlow = (400 - xrange)/2;
  y2 = 382 - (100 * (1-z));
  
  if(keydown && mouseIsPressed){
    deltaY = mouseY - ylast;
    z = float(constrain(400 - (zlast + deltaY), 200, 400));
    zlast = z;
    z = float(z / 400);
    w = 100  * z;
    print(z);
    

    ylast = y;

  }
  else if(mouseIsPressed){

    x = constrain(mouseX,xlow,xhigh);
    y = constrain(mouseY,xlow,xhigh);
    x2 = constrain(mouseX,xlow,xhigh);
    
    
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

function keyPressed() {
  keydown = true;
  
}

function keyReleased(){
  keydown = false;
}

