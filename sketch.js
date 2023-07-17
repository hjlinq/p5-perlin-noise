
// Global variables
var y = 0;

var cnvs;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnvs.position(x, y);
}
// Setup function
function setup() {
  cnvs = createCanvas(windowWidth-5, windowHeight-5);
  centerCanvas();
  background(255, 0, 0);
}

function windowResized() {
  resizeCanvas(windowWidth-5, windowHeight-5);
  centerCanvas();
}
// Draw function
function draw() {
  background(12);

  for(var x = y; x < y+100; x++)
  {
    var k = 500;
    var a = noise(x/k);
    var b = noise((x+1000)/k);
    var c = noise((x+2000)/k);
    stroke(a*255,b*255,c*255);
    strokeWeight(5);
    
    point(map(a,0,1,0,width),map(b,0,1,0,height));
  }

  y += 10;
}
