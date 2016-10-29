function Pac(xpos,ypos,rad,mouth) {
	this.xpos=xpos;
	this.ypos=ypos;
	this.rad=rad;
	this.mouth1=0;
	this.mouth2=0;
	this.move=floor(random(4));
	this.wakawaka=.5;

	this.secTime = 0; // timer variables
	this.secTimeMax = 240; // 240 frames is four seconds
	this.timeGoal = random(this.secTimeMax + 1);
	this.dirCount = 0;

	//edgeCheck
	this.maxWidth = width;
	this.maxHeight = height;
	this.wait=false;
}
//actually getting called
Pac.prototype.draw = function () {
	if (!this.wait) {

		/*west*/if (this.move===0){
			this.xpos--;
			this.mouth1=-PI*3/4;
			this.mouth2=PI*3/4;
		}
//north
	else if (this.move===1) {
			this.ypos--;
			this.mouth1=-PI/4;
			this.mouth2=-PI*3/4;

		}
//south
		else if (this.move===2) {
			this.ypos++;
			this.mouth1=PI*3/4;
			this.mouth2=PI/4;
		}
		else if (this.move===3) {
			this.xpos++;
			this.mouth1=PI/4;
			this.mouth2=-PI/4;
		}
	}
	fill('yellow');
	arc(this.xpos,this.ypos,this.rad,this.rad,this.mouth1,this.mouth2,PIE);
	fill(0)
if (this.move === 1||   this.move===2){
	ellipse(this.xpos-10,this.ypos,this.rad/8,this.rad/8);}
else{
ellipse(this.xpos,this.ypos-10,this.rad/8,this.rad/8);}

}

Pac.prototype.move_direction = function () {
	this.move=floor(random(4));
}
Pac.prototype.timer = function () {
	if (this.secTime >= this.timeGoal) {
		this.move_direction(); // calls function when timer elapses
		this.secTime = 0; // resets timer
		this.timeGoal = random(0, this.secTimeMax + 1); // resetst random timer goal
	} else {
		this.secTime++; //increments timer
	}
};
Pac.prototype.mouthflap = function () {
	if (this.wakawaka<1){
		this.wakawaka+=.1;}
		else {
			this.wakawaka=-.1;
		}
	}
	Pac.prototype.edgeLoop = function() {
		if (this.xpos >= this.maxWidth) {
			this.xpos=0;
		} else if (this.ypos>= this.maxHeight) {
			this.ypos=0;
		} else if (this.xpos <= 0) {
			this.xpos=this.maxWidth;
		} else if (this.ypos<= 0) {
			this.ypos=this.maxHeight;
		}

	}
	Pac.prototype.collider = function (pacary,idx) {
		var xnd=0;
		var ynd=0;
		var radnd=0;
		var dis=0;
		var maxdis=0;
		this.wait=false;
		for (var c = 0; c < pacary.length; c++) {
			if (c!=idx) {
				xnd=pacary[c].xpos;
				ynd=pacary[c].ypos;
				radnd=pacary[c].rad;
				dis=dist(this.xpos,this.ypos,xnd,ynd);
				maxdis=(this.rad+2);
				if (dis<=maxdis) {
if (this.move===0 && this.xpos>xnd) {
					this.wait=true;
} else if (this.move===1 && this.ypos>ynd) {
	this.wait=true;
} else if (this.move===2 && this.ypos<ynd) {
	this.wait=true;
} else if (this.move===3 && this.xpos<xnd){
	this.wait=true;
}
				}
			}
		}
	text(this.wait,20,20);
	text(dis, 20, 30);
	text(maxdis, 20,40);
	};
