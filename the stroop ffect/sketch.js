function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200)
  let colorNames = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'white'];
  let colors = ['red', 'green', 'blue', 'yellow', 'black', '#aa00ff', 'white']
  let instruction = "What is the color of the word?"
  let words = random(colorNames)
  let stroke= random(colors)
  textSize(100)
  fill(stroke)
  textAlign(CENTER)
  text(words, 200, 200); // draw the word
  noLoop();
  textSize(15)
  fill("black")
  textAlign(CENTER)
  text(instruction,200,350)
}
function mouseClicked(){
  loop()
}