function Platform(xpos,ypos,girth){
this.xpos = xpos;
this.ypos = ypos;
this.girth = girth;
}

Platform.prototype.draw = function () {
fill('#00001a');
stroke('black')
rect(this.xpos-=2,this.ypos,this.girth*10,this.girth);
};
