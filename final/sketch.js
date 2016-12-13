// background/forground
var bkrnd;
var bx1=920;
var bx2=0;
var timerx=0;
//megaman specific variables
var megax=10;
var megay=445;
//var lemx=megax+50;
//var lemy=megay+25;
//class vars
//var life=[];
var platform=[];
var mm;
//var lemon=[];
var bullet=[];
//jump
var ground= 445;
var jump=false;
var landed=true;
var w_down = false;
var shot= false;

function preload() {
  bkrnd = loadImage("vis/background.jpg");
  megamanvis = loadImage("vis/megamansheet.gif");
  bulletvis= loadImage('vis/bullet.gif')
}
function setup() {
  frameRate(25);
  createCanvas(920,600);
  //timer
  noFill()
  noStroke()
  ellipse(timerx+=.25,0,2,2);
  //health
  //life.push( new Life(10,10,7));
  //platforms
  for (var platx = 500; platx <= 5000; platx+=random(300,500)) {
    var platy=random([150,250,350]);
    platform.push( new Platform(platx,platy,25));
  }
  for (var bx = 500; bx <= 5000; bx+=random(300,500)) {
    var by=random(150,350);
    bullet.push( new Bullet(bulletvis,bx,by));
  }
  //megaman
  mm=new Megaman(megamanvis,10,445);
}

function draw() {

  //background
  image(bkrnd, bx1-=2, 0);
  if (bx1<=-1840){
    bx1=920;
  }
  image(bkrnd, bx2-=2, 0);
  if (bx2<=-1840){
    bx2=920;
  }
  //  life[1].draw();
  for (var i = 0; i < platform.length; i++) {
    platform[i].draw();
  }

  for (var b = 0; b < bullet.length; b++) {
    bullet[b].draw();
  }
  //ground
  fill(125);
  rect(-1,475,921,601);
  mm.draw();
  //jump
  //startjump
  if (w_down & landed) {
    landed=false;
    jump=true;
    mm.jump=true
  }
  if (w_down & jump & mm.megaypos>=ground-200) {
    mm.megaypos-=25;
  } else {
    jump= false;
    if(mm.megaypos<ground){
      mm.megaypos+=25;
    } else if(!w_down) {
      landed=true;
    }
  }
}

//fast type  key s
//jump
function keyTyped() {
  if (key==='a') {
    w_down = true;
  }
}

function keyReleased() {
  w_down = false;
}
