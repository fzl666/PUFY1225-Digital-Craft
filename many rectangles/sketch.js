function setup() {
  createCanvas(400, 400);
}

function draw(){
  let H = random(400,12);
  let W = random(400,12)
  let X = random(400,0)
  let Y = random(400,0)
  let colors=['red', 'green', 'blue', 'yellow', 'black']
  noStroke()
  fill(random(colors))
  rect(X, Y, H, W)
}
function mouseClicked(){
  noLoop()
}
function doubleClicked(){
  loop()
}
//Click to stop, double clicke to continue.