function Life(xpos,ypos,girth) {
	this.xpos=xpos;
	this.ypos=ypos;
	this.girth=girth;/*2*/
  this.health=20;
}

Life.prototype.draw = function () {
	push();
	fill(50);
	rect(10,10,20,150);
	fill(225);
for (var i = 1; i <= this.health; i++) {
	i = map(i, 1, 20, 160, 10);
	rect(this.xpos,i,this.girth*5,this.girth);
}

	pop();
};
