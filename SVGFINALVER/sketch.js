/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
see -https://github.com/zenozeng/p5.js-svg
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(600, 600, SVG); // Create SVG Canvas
  ; // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}
function draw() {
for(var i=0; i<=118; i+=3){
      strokeWeight(1)
      ellipse(300,300,i*3.6,i*3.6)
      strokeWeight(2)
      line(600,i*12,i*12,1)
      line(i*12,600,i/12,i*12)
}

  save("eye.svg"); // give file name
  print("saved svg")
  noLoop(); // we just want to export once
}