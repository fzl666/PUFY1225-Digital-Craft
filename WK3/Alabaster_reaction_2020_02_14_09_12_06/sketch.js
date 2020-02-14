var odds;
let j=0
function setup() {
  b=random(0,400)
  createCanvas(400, 400);
  posX=0;
  posY=0
}



function draw() {

  background("black");

   for(var i= 1; i < width; i+=3){

    odds = i%10

    if (odds == 0){
      stroke("green")
      strokeWeight(2);

    }else{
      
      stroke(220)
      strokeWeight(1);

    }
    line(0+i, 0, i, 80);
    line(i , 80, posX, j);
    
     }
 if (posX >= width){

    collision = 1;
   line(i , 80, posX, j)

      }else if (posX == 0){

        collision = 0;

      }
  

  print(collision);
  
  if (collision == 1){
    
    posX-=2;
    
  } else {
    
    posX+=2;
    
 if (posX >= width){

    collision = 1;
   
   line(i , 80, posX, j)

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

  if (collision == 1, j < 400){
    j=b++;

  } else{
    j=b;
  
    
    

  }
  }
}