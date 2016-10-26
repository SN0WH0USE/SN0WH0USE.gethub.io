var pac=[];


function setup() {
  createCanvas(750,500);
  frameRate(60);

  for (var y= 50;  y< height; y+=100) {
    for (var x = 50; x < width; x+=200) {
      temppac = new Pac(x, y, 50,.5);
      }
      pac.push( temppac);
    }
  }

function draw() {

  background(0);
  for (var i = 0; i < pac.length; i++) {
    pac[i].draw();
    pac[i].timer();
    pac[i].mouthflap();
    pac[i].edgeLoop();
    //pac[i].collider();

  }

}
