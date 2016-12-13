function Bullet(spriteb,bulletx,bullety) {
  this.spriteb=spriteb;
  this.bulletx=bulletx;
  this.bullety=bullety;
}
Bullet.prototype.draw = function () {
push()
//image(this.spriteb,this.bulletx--, this.bullety);
image(this.spritem,0,0,100, 100, this.bulletx, this.bullety, 100, 100 );
//image(img,sx=0,sy=0,swidth=img.width,sheight=img.height,dx=0,dy=0,dwidth,dheight)
pop()
};
