function Life(xpos,ypos,girth) {
	this.xpos=xpos;
	this.ypos=ypos;
	this.girth=girth;

}

Life.prototype.draw = function () {
	push();
	fill(50);
	rect(10,10,20,150);
	fill(225);
for (var i = 150; i>=10; i){
	rect(this.xpos,this.ypos,this.girth*3,this.girth);
}
	pop();
};
