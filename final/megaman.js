function Megaman(spritem,megax,megaypos){
  this.runidx=0;
  this.runipos=[509,404,295,188,90,0];
  //this.runipos=[90,188,295,404,509,0];
  this.spritem=spritem;
  this.isjumping=false;
  this.megaypos=megaypos;
  this.megax=megax;
  this.runrate = 2;
}
Megaman.prototype.draw = function () {
push()
image(this.spritem,this.runipos[this.runidx],0,100, 100, this.megax, this.megaypos, 100, 100 );
//used to line up spriets
//image(this.spritem,90,0,100, 100, 10, 445, 100, 100 );
//image(this.spritem,509,0,100, 100, 10, 445, 100, 100 );
pop()
this.runTimer();
// this.isJumping()
};

Megaman.prototype.runTimer = function () {
  if (frameCount % this.runrate == 0) {
    this.runidx = (this.runidx + 1) % 5;
  }
  if (this.isjumping) {
    this.runidx = 5;
  }
};
Megaman.prototype.startjump = function (lemon) {
  this.isjumping=true;
  // for (var l = 0; l < lemon.length; l++) {
  //   lemon[l].draw(helmet,greenman,bullet);
  // }
};
Megaman.prototype.stopjump = function (lemon) {
this.isjumping=false;
this.runidx=0
// for (var l = 0; l < lemon.length; l++) {
//   lemon[l].draw(helmet,greenman,bullet);
// }
};
