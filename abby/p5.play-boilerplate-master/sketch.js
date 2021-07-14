var bg,sleep,brush,gym,eat,drink,move,astronaut;

function preload(){
  bg = loadImage("iss.png")
  sleep = loadImage("sleep.png")
  brush = loadImage("brush.png")
  gym = loadImage("gym11.png","gym12.png")
  eat = loadImage("eat1.png","eat2.png")
 // drink = loadAnimation("drink1.png","drink2.png")
  move = loadImage("move.png","move1.png")

}


function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230)
  astronaut.aImage("sleeping",sleep)
  astronaut.scale=0.1;
  //createSprite(400, 200, 50, 50);

  
}

function draw() {
  background(255,255,255); 
  if(keyDown("UP_ARROW")){
    astronaut.addImage("brushing",brush);
    astronaut.changeImage("brushing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronut.addImage("gymming",gym);
    astronut.changeImage("gymming")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addImage("eating",eat);
    astronaut.changeImage("eating")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  } 
  if(keydown("LEFT_ARROW")){
    astronaut.addImage("bathing",bath);
    astronaut.changeImage("bathing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0; 
  }
  if(keydown("m")){
    astronut.addImage("moving");
    astronut.changeImage("moving")
    astronut.y=350;
    astronut.velocityX=0;
    astronut.velocityY=0;
  }
  drawSprites();
}
class Rope {
  constructor(body1, body2, pointA, pointB) {
    this.pointA = pointA
    this.pointB = pointB

    var options = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.pointA, y: this.pointB }
    }
    this.con = Matter.Constraint.create(
      options
    )

    World.add(world, con);

  }

  display() {
    // var pointA:this.rope1.bodyA.position;
    //var pointB:this.rope1.bodyB.position;
    line(this.con.bodyA.position.x, this.con.bodyA.position.y, this.con.bodyB.position.x, this.con.bodyB.position.y);
  }
}


