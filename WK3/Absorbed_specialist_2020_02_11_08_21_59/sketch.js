;

var w

var h

var r

var g

var b

var o

var collision;

w =20
h =20

function setup() {

  createCanvas(400, 400);

  posX = 20;

  posY = 20;
  
  w =20
  h =20
  
  

}



function draw() {

  //background(220);
  
  posX = random(width);

  posY = random(height);
  
  r = random(255)
  g= random(255)
  b= random(255)
  o= random(255)
  noStroke()
  fill(r, g, b, o)
  ellipse(posX, posY, w, h);
  strokeWeight(1)
  line(200, 400, posX, posY,)
  
}