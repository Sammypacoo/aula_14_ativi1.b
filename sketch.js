var ball = {
  x:20,
  y:30,
  r:30,
  xspeed:0,
  yspeed:0,
  color:["green","red","orange","blue","pink"]

};

function setup() {
  
  createCanvas(400, 400);
  


}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  if (frameCount%30===0){
    rand=Math.round(random(0,4))
    fill(ball.color[rand])
  }
 


}
