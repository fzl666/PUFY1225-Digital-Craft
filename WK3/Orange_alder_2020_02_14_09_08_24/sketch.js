var deg = 180
var changeDirection
var i
var collision


function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  translate(200,400)       
  rotate (radians (deg))
  stroke("purple")
  line (-200,0,0,0)
  stroke("white")
  fill("blue")
  ellipse(-220,0,70,70)
  
  if (deg >= 180){
   changeDirection=1;
     }else if (deg == 0){
		changeDirection = 0;
     }
  print(changeDirection);
   if (changeDirection == 1){
     deg-=1;
     for(var i=0; i<=100; i+=3){
       fill("black")
       rect(i-400,3*i,i,i)}
        }else{
      deg+=1;
     for(var i=0; i<=100; i+=3){
       fill("pink")
       rect(i-300,3*i,i,i)}
         }
  
}


