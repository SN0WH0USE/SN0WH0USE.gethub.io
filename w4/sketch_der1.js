var x_ref=0
var xs_ref=0
var y=0
var ys=27


function setup() {
  createCanvas(500,500);
  frameRate(15)
  r=random(255);
  g=random(255);
}


function draw() {
  background(210)
  var usable_width = width + (25 * 2);

  for(var x=-25; x<=usable_width; x=x+25){
    for(var y=0; y<=height; y=y+54){
      var xpos = (x+x_ref) % usable_width - 25;
      fill(r);
      rect(xpos,y,23,25);
    }
  }

  for(var xs=-25; xs<=usable_width; xs=xs+25){
    for(var ys=27; ys<=height; ys=ys+54){
      var xspos = (xs+xs_ref) % (usable_width - 25);
      fill(g);
      rect(xspos,ys,23,25);
    }
  }

  if (mouseIsPressed) {
    x_ref+=5;
    xs_ref-=5;
  }
}

function mouseIsPressed(){

}
