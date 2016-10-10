var x=250
var y=250
var z=250
var w=250
var r=0

function setup() {
  createCanvas(500,500);
  frameRate(15);
  background('blue');
}

function draw() {

  if(mouseIsPressed){
    fill(r++)
    ellipse(250,y,50,50);
    ellipse(x,250,50,50);
    ellipse(250,z,50,50);
    ellipse(w,250,50,50);
    ellipse(x,y,50,50);
    ellipse(x,z,50,50);
    ellipse(w,z,50,50);
    ellipse(w,y,50,50);
    y+=2;
    x+=2;
    z-=2;
    w-=2;}

  else {
    y-=2
    x-=2
    z+=2
    w+=2
}
}
