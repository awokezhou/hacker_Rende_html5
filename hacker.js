
// get my Canvas
var myCanvas = document.getElementById("myCanvas");

// get ctx
var ctx = myCanvas.getContext("2d");

// making the canvas full screen
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// text -> array
var font_size = 16;
var string = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
var columns = myCanvas.width/font_size; 
string = string.split("");

// init drops
var drops = [];
for(var x=0; x<columns; x++)
    drops[x] = 1; 

function draw() {

	// draw background
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	ctx.fillStyle = "#0F0"; 
	ctx.font = font_size + "px arial";

	for(var i=0; i<drops.length; i++) {

		// get char
		var char = string[Math.floor(Math.random()*string.length)];

		// draw char
		ctx.fillText(char, i*font_size, drops[i]*font_size);

		if(drops[i]*font_size > myCanvas.height || Math.random() > 0.95)
            drops[i] = 0;

        drops[i]++;
	}
}

setInterval(draw, 50);