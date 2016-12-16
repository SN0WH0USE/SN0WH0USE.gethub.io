function Platform(xpos,ypos,girth){
this.xpos = xpos;
this.ypos = ypos;
this.girth = girth;
}

Platform.prototype.draw = function () {
fill('#5f416d');
strokeWeight(2)
stroke('#433856')
rect(this.xpos-=7,this.ypos,this.girth*10,this.girth);
};
