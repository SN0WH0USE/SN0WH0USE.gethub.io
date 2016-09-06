function setup() {
  createCanvas(800,800);
  background(177, 222, 212)
  
}

function draw() {
  //head
  fill(235, 222, 164)
  noStroke()
  ellipse(400, 200, 100,100)
  ellipse(400, 220, 100,140)
  
  //eyes
  fill(235)
  noStroke()
  ellipse(425, 215, 45, 40)
  ellipse(375, 215, 45, 40)
  
  fill(235, 222, 164)
  rect(350, 190,100,20)
  
  //brows
  fill(0)
  rect(355, 195, 40, 5)
  rect(405, 195, 40, 5)
  
  // mof
  stroke(0)
  strokeWeight(3)
  line(400, 255, 425, 260)
  line(400, 255, 375, 260)
  

  
  //hair
  noStroke()
  fill(55,12,107)
  triangle(350,150,350,180,400,175)
  triangle(400,140,350,175,450,175)
  triangle(375,140,350,175,450,175)
  
  //arms
  stroke(235, 222, 164)
  strokeWeight(40)
  line(320,325, 250,375)
  line(250,375, 350,375)
  
   //arms 2
  stroke(235, 222, 164)
  strokeWeight(40)
  line(475,325, 550,375)
  
  
  //body
  noStroke()
  fill(250,0,0)
  triangle(300,300, 400,400, 500,300)
  rect(337.5,300, 125,200)
  fill(0,0,250)
  rect(337.5,500, 125,245)
  stroke(0)
  strokeWeight(1)
  line(400,550, 400,745)
  
  rect
  //feet
  fill(0)
  noStroke()
  ellipse(438.5, 755, 45, 40)
  ellipse(362.5, 755, 45, 40)
  
  //forearms
  stroke(235, 222, 164)
  strokeWeight(40)
  line(250,375, 350,375)
  line(450,375, 550,375)
}