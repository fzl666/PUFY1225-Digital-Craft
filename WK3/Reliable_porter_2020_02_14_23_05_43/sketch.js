
var changeDirection = 1
  a=0
  b=400
  c=400
  d=0
function setup() {
  fill("#000066")
  createCanvas(400, 400);
}

function draw() {
  background("#000066");    
  fill("#ccff99")
  stroke("#9966ff")
  strokeWeight(4)
  beginShape();
  vertex(a,a);
  vertex(200,100);
  vertex(b,a);
  vertex(300,200);
  vertex(c,c);
  vertex(200,300);
  vertex(d,c);
  vertex(100,200);
  vertex(a,a);
  endShape();
  
  if (a >= width){
   changeDirection=0;
     }else if (a == 0){
		changeDirection = 1;
     }
  print(changeDirection);
   if (changeDirection == 1){
     a+=3;
   }
  if (changeDirection == 0){
     a-=2;
   }
  
  if (b >= width){
   changeDirection=1;
     }else if (b == 0){
		changeDirection = 0;
     }
  print(changeDirection);
  
   if (changeDirection == 1){
    b-=3;
   }
   if (changeDirection == 0){
    b+=2;
   }
  
    if (d >= width){
   changeDirection=0;
     }else if (d == 0){
		changeDirection = 1;
     }
  print(changeDirection);
   if (changeDirection == 1){
     d+=3;
   }
  if (changeDirection == 0){
     d-=2;
   }
  
  if (c >= width){
   changeDirection=1;
     }else if (c == 0){
		changeDirection = 0;
     }
  print(changeDirection);
  
   if (changeDirection == 1){
    c-=3;
   }
   if (changeDirection == 0){
    c+=2;
   }
    
    

}