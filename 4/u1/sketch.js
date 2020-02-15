let img;
function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/1/1c/Penicillium_notatum.jpg');
var font = "Odibee Sans"

}
 
function setup() {
  createCanvas(400, 400);
  b=10
}

function draw() {
  background(220);
  
  image(img, 140, 4, img.width/5, img.height/5)
  textFont("Odibee Sans")
  textSize(20)
  text("Penicillium notatum                             organic matters!", 50, 200, 300, 200)
  text("decomposes", 170, random(204, 196), 300, 200)  
  fungus(mouseX, mouseY,b)
}


function fungus(x, y, r) {
  push()
  translate(x, y)
  noStroke()
  ellipseMode(CENTER)
  fill("#EFEDBF")
  ellipse(0, 0, r, r)
  fill("#B2D5CB")
  ellipse(0, 0, 2*r/3, 2*r/3)
  noFill()
  stroke("#718D83")
  ellipse(0, 0, r/3, r/3)
  strokeWeight(r/10)
  point(0,0)
  pop() 
}

function mouseClicked() {
  if(b <=60){
  b+=10}else if (b>=60){
    fungus(mouseX, mouseY, b)
    b=10;}
}