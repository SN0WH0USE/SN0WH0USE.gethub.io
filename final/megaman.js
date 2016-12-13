function Megaman(spritem,megax,megaypos){
  this.runidx=0;
  this.runipos=[509,404,295,188,90,0]
  //this.runipos=[90,188,295,404,509,0];
  this.spritem=spritem;
  this.jump=false;
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
};

Megaman.prototype.runTimer = function () {
  if (frameCount % this.runrate == 0) {
    this.runidx = (this.runidx + 1) % 5;
  }
};
Megaman.prototype.jump = function () {
 if (this.jump=true){
 this.runrate=6
 image(this.spritem,0,0,100, 100, 10, this.megaypos, 100, 100 );

}
};
