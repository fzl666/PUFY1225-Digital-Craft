var xPos = 1;
var yPos = 1;
var velocity = 2;
function setup() {
  createCanvas(300,300);
}

function draw() {
  //background(220);
  ellipse(xPos, yPos,50, 50);
  xPos= xPos+velocity;
  yPos= yPos+10;
  if (yPos >=200){
    yPos = 0;
  }
  ellipse(mouseX, mouseY, 10, 10);
}
  
  
  