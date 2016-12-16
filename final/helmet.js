function Helmet(spriteh,helmetx,helmety){
  this.runidx=random([0,1]);
  this.runipos=[0,50];
  this.spriteh=spriteh;
  this.helmety=helmety;
  this.helmetx=helmetx;
  this.runrate = 30;
  this.gshotx=helmetx-45
  this.gshoty=helmety+100
  this.visible=true;
}
Helmet.prototype.draw = function () {
push()
if (this.visible) {
  image(this.spriteh,this.runipos[this.runidx],0,50, 75, this.helmetx-=7, this.helmety, 50, 50 );
}
pop()
this.runTimer();

};

Helmet.prototype.runTimer = function () {
  if (frameCount % this.runrate == 0) {
    this.runidx = (this.runidx + 1) % 2;
}
};
