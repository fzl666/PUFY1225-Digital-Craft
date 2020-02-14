var posX = 0;

var posY = 0;

var collision;

var r

var g

var b


xRad=20;

yRad=20;



function setup() {

  createCanvas(400, 400);

  posX = 100;

  posY = 100;

}



function draw() {
  r = 255 - posX/2
  g = 255 -posX/2 +25
  b = 255 - posX/2 +50

  background(r,g,b);
  fill("green")
  ellipse(posX, posY, 10, 10);

  if (posX >= width){

    collision = 1;

      }else if (posX == 0){

        collision = 0;

      }
  print(collision);

  if (collision == 1){

    posX-=2;

  } else {

    posX+=2;
    
    
    

  }
  if (posY >= height){

    collision = 1;

      }else if (posY == 0){

        collision = 0;

      } 

  print(collision);
  

  if (collision == 1){

    posY-=2;

  } else {

    posY+=2;}

  for(var x=xRad/2; x < width; x+=xRad){
      for(var y=yRad/2; y < height; y+=yRad){
        fill("pink")
        stroke("green")
          ellipse(x, y, (posX-x)/20, (posY-y)/20);}
  }
}