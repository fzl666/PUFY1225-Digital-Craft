function setup() {
  createCanvas(400, 400);
}
  let width=12
  let height=12
function draw(){
 
  let color="#FFA500"
  noStroke()
   fill(color)
  if ((mouseIsPressed == true)&&(width < 200)){
  let color="#FFA500"
  fill(color)
  ellipse(mouseX, mouseY, width, height);}
  else{
  let color="black"
  fill(color)
  ellipse(mouseX, mouseY, width, height)}
}
//hold mouse to change color


