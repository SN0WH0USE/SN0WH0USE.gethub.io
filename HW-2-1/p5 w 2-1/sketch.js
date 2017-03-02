



var x=500;
var y =500;



function setup() {
  createCanvis(1000,1000);
framerate(24);
}



function draw() {
  fill('blue');
  ellipse(x,y,25,25);
  if (x>mouseX) {
    x--;
  }
  if (x<mouseX) {
    x++;
  }
  if (y>mouseY) {
    y--;
  }
  if(y<mouseY){
    y++;
  }
};
