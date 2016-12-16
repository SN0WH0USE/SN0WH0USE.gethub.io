function Bullet(spriteb,bulletx,bullety) {
  this.spriteb=spriteb;
  this.bulletx=bulletx;
  this.bullety=bullety;
  this.bulletspeed=random(7,15);
  this.visible=true;
}
Bullet.prototype.draw = function () {
push()
if (this.visible=true){
image(this.spriteb,0,0,100, 100, this.bulletx-=this.bulletspeed, this.bullety, 50, 50 );
}
pop()
};
