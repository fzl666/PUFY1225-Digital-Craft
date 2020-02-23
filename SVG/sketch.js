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
  stroke("black")
  line (-200,0,0,0)
  strokeWeight(3)
  stroke("white")
  fill("black")
  strokeWeight(1)
  ellipse(-234,0,70,70)
if (deg >= 100){
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
       for(var i=0; i<=100; i+=3){
       fill("black")
       rect(i-300,3*i,i,i)}
        }else{
         noLoop()
            save("mySVG.svg");
  print("saved svg");
  noLoop();
         }
}


