function Pac(xpos,ypos,rad,mouth) {
	this.xpos=xpos;
	this.ypos=ypos;
	this.rad=rad;
	this.mouth=mouth;
	this.move=floor(random(4));
	this.wakawaka=.5;

	this.secTime = 0; // timer variables
	this.secTimeMax = 240; // 240 frames is four seconds
	this.timeGoal = random(this.secTimeMax + 1);
	this.dirCount = 0;

	//edgeCheck
	this.maxWidth = width;
	this.maxHeight = height;
}
//actually getting called
Pac.prototype.draw = function () {
	fill('yellow');
	//<
	if (this.move===0){
		arc(this.xpos--,this.ypos,this.rad,this.rad,this.mouth+135,-this.mouth+135,PIE);
		fill(0)
		ellipse(this.xpos,this.ypos-10,this.rad/8,this.rad/8);}
		//^
		else if (this.move===1){
			arc(this.xpos,this.ypos--,this.rad,this.rad,this.mouth+67.5,-this.mouth+67.5,PIE);
			fill(0)
			ellipse(this.xpos+10,this.ypos,this.rad/8,this.rad/8);}
			//down
			else if (this.move===2){
				arc(this.xpos,this.ypos++,this.rad,this.rad,this.mouth-67.5,-this.mouth-67.5,PIE);
				fill(0)
				ellipse(this.xpos+10,this.ypos,this.rad/8,this.rad/8);}
				//>
				else if (this.move===3){
					arc(this.xpos++,this.ypos,this.rad,this.rad,this.mouth,-this.mouth,PIE);
					fill(0)
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

//	}
// Pac.prototype.collider = function () {
// 	if (this.xpos<=this.rad*.5) {
// 		this.move=floor(random(4));
// 	}
// // else {
// //
// // }
};
						/*
						TODO
						wakawaka

						collider
						if pac within pac radius
						redirect
						refer to modulo
						*/
