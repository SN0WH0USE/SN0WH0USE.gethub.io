function Brick(xpos,ypos,girth) {
	this.xpos=xpos;
	this.ypos=ypos;
	this.girth=girth;

	this.visible=true;

}

Brick.prototype.draw = function () {
	fill(225);

	if (this.visible) {


	rect(this.xpos,this.ypos,this.girth,this.girth);
}

};
