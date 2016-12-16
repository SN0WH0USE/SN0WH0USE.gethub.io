function Greenman(spriteg,greenx,greeny){
  this.runidx=random([0,1,2]);
  this.runipos=[0,105,200];
  this.runipoo=[-4,0,0];
  this.spriteg=spriteg;
  this.greeny=greeny;
  this.greenx=greenx;
  this.runrate = 20;
  this.gshotx=this.greenx-45
  this.gshoty=this.greeny+100
  this.visible=true;
}
Greenman.prototype.draw = function () {
push()
image(this.spriteg,this.runipos[this.runidx],this.runipoo[this.runidx],100, 100, this.greenx-=7, this.greeny, 75, 75 );
pop()
this.runTimer();

};

Greenman.prototype.runTimer = function () {
  if (frameCount % this.runrate == 0) {
    this.runidx = (this.runidx + 1) % 3;
}
};

Greenman.prototype.gshot = function () {
if (this.runindex=0) {
  rect(this.gshotx-=14,this.gshoty,50,50);
}
};
