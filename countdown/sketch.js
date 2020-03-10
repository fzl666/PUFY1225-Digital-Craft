var x=0
var numbers = 6
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var tips = ['Lets start', 'Keep going', 'It is getting bigger', 'Almost there!','Wait a second...','Oh no!'] 
  ellipse(width/2,height/2,80/numbers*10,80/numbers*10)
  if (frameRate(1), numbers>0, x<5){
    numbers--
    x++
    textSize(30)
    text(tips[x], 80,380)
    textSize(100)
    text(numbers, 10, 390)
    }else{
        textSize(30)
        text("No more balloon!:(",80,380)}
}