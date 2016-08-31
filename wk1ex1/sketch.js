function setup() {
  createCanvas(500,700);
 background(0,255,132);
}

function draw() {
  stroke(255);
  fill(0);
  rect(50, 100, 100, 70);
  
  stroke(0);
  fill(255);
  triangle (100, 10, 50, 50, 50,200)
  
  //ellipseMode(CORNER)
  noStroke()
  fill(155)
  ellipse(50, 100, 100, 100);
  
  fill(200)
  ellipse(50, 100, 50, 10)
  
  stroke(255);
  line(50, 100, 1000, 0)
  line(50, 100, 500, 700)
} 