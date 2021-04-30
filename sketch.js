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
let osc, playing, freq, amp;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() {
  background(255);
  

  if(keydown && mouseIsPressed){
    deltaY = mouseY - ylast;
    
    
    
    z = float(constrain((z * 400) - deltaY, 200, 400))/400;
    x = constrain(x,xlow,xhigh);
    y = constrain(y,xlow,xhigh);
    x2 = constrain(x2,xlow,xhigh);
    
    if(z > 0.9){
      osc.setType('sine');
    }
    else if(z > 0.8)
    {
      osc.setType('sawtooth');
    } 
    else if (z > 0.7)
    {
      osc.setType("square"); 
    }
    else
    {
       osc.setType('triangle'); 
    }
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
  ellipse(x, y , w, w);
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);


  if (playing) {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
  }
  
  fill(0,0,0);
  text('hold a key to change z axis / timbre', 120, 380);
}

function keyPressed(){
  keydown = true;
  ylast = mouseY;

}

function keyReleased(){
  keydown = false;
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
}
