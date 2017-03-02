function setup() {
  createCanvas(1000, 1000);
  frameRate(15)
  // colors
  r = random(255);
  g = random(255);
  b = random(255);
  
  
  
  //x=(500)
  //y=(500)
}

function draw() {
  
  //location
  x=(mouseX);
  y=(mouseY);
  
  
  // random on open
  background(200);
  
  
  //lemon 
   fill(225, 225, 0);
  if (mouseIsPressed)
    ellipse(x+240, y+100, 25, 15);
  else
    ellipse(x+40, y+100, 25, 15);

  println(mouseIsPressed);
 
  
  
  //armor;
  noStroke();
  fill(r, g, b);
  ellipse(x, y, 150, 150);
  ellipse(x+40, y+100, 100, 50); 
  
  //suit
  noStroke();
  fill(r, g, b, 155);
  ellipse(x, y, 150, 150);
  rect(x-50, y+50, 100, 150)
  
  
  //face
  noStroke()
  fill(250, 236, 195)
  /*face*/ellipse(x+20, y+25, 100, 110);
  fill(255);
  /*eye*/ ellipse(x+45, y+27, 33, 50);
    fill(0);
  /*pupil*/ellipse(x+50, y+27, 10, 20);
  

  
}
