// background/forground
var bkrnd;
var bx1=920;
var bx2=0;

//megaman specific variables
var megax=10;
var megay=445;
var lifetop=12;
var lifebottom=146;
//class vars
var platform=[];
var mm;
var helmet=[]
//greenman and his bullet
var greenman=[];
var gshotx=greenman.greenx-20
var gshoty=greenman.greeny-50
var gss= 15
//end
var lemon=[];
var bullet=[];
//jump
var ground= 445;
var jump=false;
var landed=true;
var a_down = false;
var d_down=false;
var shot= false;
var shotout= [1,2,3];
var falling=false;

function preload() {
  bkrnd = loadImage("vis/background.jpg");
  megamanvis = loadImage("vis/megamansheet.gif");
  bulletvis= loadImage('vis/bullet.gif')
  greenmanvis= loadImage('vis/greenman.gif')
  helmetvis= loadImage('vis/helmet.gif')
}
function setup() {
  frameRate(25);
  createCanvas(920,600);
  //health
  //platforms
  for (var platx = 500; platx <= 5000; platx+=random([100,150])) {
    var platy=random([150,250,350]);
    platform.push( new Platform(platx,platy,25));
  }
  for (var bx = 500; bx <= 5000; bx+=random(300,500)) {
    var by=random(150,399);
    bullet.push( new Bullet(bulletvis,bx,by));
  }
  for (var gx = 500; gx <=5000 ; gx+=random([500,750])) {
    var gy=random([75,175,275]);
    greenman.push( new Greenman(greenmanvis,gx,gy));
  }
  for (var hx = 500; hx <=5000 ; hx+=random(50,450)) {
    helmet.push( new Helmet(helmetvis,hx,490));
  }
  //megaman
  mm=new Megaman(megamanvis,10,445);
  for (var lx = /*mm.megax+*/83; lx <=85 ; lx++) {
    lemon.push( new Lemon(lx,/*mm.megypos*/495,5));
  }
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

  //ground
  fill(125);
  rect(-1,475,921,601);




  for (var l = 0; l < lemon.length; l++) {
    lemon[l].draw(helmet,greenman,bullet);
  }
  for (var h = 0; h < helmet.length; h++) {
    helmet[h].draw();
  }

  for (var i = 0; i < platform.length; i++) {
    platform[i].draw();
  }

  for (var b = 0; b < bullet.length; b++) {
    bullet[b].draw();
  }

  for (var g = 0; g < greenman.length; g++) {
    greenman[g].draw();
  }
  //greenman.gshot();
  // if (greenman.runidx=2) {
  // rect(gshotx-=5,gshoty,70,70);
  // }else{
  // rect(gshotx-=5,gshoty,70,70);
  // }
  mm.draw();
  //jump
  //startjump
  if (a_down & landed) {
    landed=false;
    mm.startjump();
    jump=true;
  }
  if (a_down & jump & mm.megaypos>=ground-200) {
    mm.megaypos-=25;
    //lemon[l].lemy-=25;
  } else {
    jump= false;
    if(mm.megaypos<ground){
    //  lemon[l].lemy+=25;
      mm.megaypos+=25;
    } else if(!a_down) {
      if (!landed) {
        landed=true;
        mm.stopjump();
      }
    }
  }
  if (shot) {
//lemon[l].lemx+=20
  }
//enemy hits mm

// if (mm.megax >= helmet[h].helmetx-50 && mm.megax<=helmet[h].helmetx && mm.megaypos >= helmet[h].helmety && mm.megaypos<=helmet[h].helmety+50){
// ellipse(100,100,100,100)
// }
  fill(0)
  noStroke()
  rect(10,10,20,150)
  fill('yellow')
  noStroke()
  rect(12,lifetop,16,lifebottom)
  if (d_down) {
    lifetop+=2
    lifebottom-=2
  }if (lifetop>=160){
fill(0)
rect(0,0,1000,1000);
}
}



//lemon hitboxes

//}
//fast type keys
//jump
function keyTyped() {
  if (key==='a') {
    a_down = true;
  }
  if (key==='d') {
    d_down = true;
  }
}

function keyReleased() {
  a_down = false;
  d_down = false;
}

//shot (s)
function keyPressed(){
  if (keyCode===83) {
    shot = true;
  }
}
