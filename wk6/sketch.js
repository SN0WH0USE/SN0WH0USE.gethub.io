var wlx=(0);
var wly=(0);
var lemx=(0);
var lemy=(0);

var bricks=[];

function setup() {
	createCanvas(1000, 1000);
	frameRate(15);
	// colors
	r = random(255);
	g = random(255);
	b = random(255);

	//wall
	for (var y= 0;  y< height; y+=27) {
		for (var x = 500; x < width; x+=27) {
			bricks.push( new Brick(x,y,25));
		}
	}
}

function draw() {

	//location
	x=(mouseX);
	y=(mouseY);

	background(200);

	//lemon
	fill(225, 225, 0);
	if (mouseIsPressed) {
		ellipse(lemx, lemy, 25, 15);
		lemx+=20;
	} else {
		ellipse(x+25, y+100, 25, 15);
	}
	println(mouseIsPressed);

	//armor;
	noStroke();
	fill(r, g, b);
	ellipse(x, y, 150, 150);
	ellipse(x+40, y+100, 100, 50);

	//suit
	noStroke();
	fill(r, g, b, 155);
	ellipse(x, y, 150, 150);
	rect(x-50, y+50, 100, 150);

	//face
	noStroke();
	fill(250, 236, 195);
	/*face*/ellipse(x+20, y+25, 100, 110);
	fill(255);
	/*eye*/ ellipse(x+45, y+27, 33, 50);
	fill(0);
	/*pupil*/ellipse(x+50, y+27, 10, 20);


	for (var i = 0; i < bricks.length; i++) {
		if (lemx >= bricks[i].xpos && lemx<=bricks[i].xpos+bricks[i].girth && mouseIsPressed && lemy >= bricks[i].ypos && lemy<=bricks[i].ypos+bricks[i].girth){
			bricks[i].visible=false;

		}
		bricks[i].draw();
	}

}

function mousePressed(){
	lemx=mouseX+65;
	lemy=mouseY+100;
}
