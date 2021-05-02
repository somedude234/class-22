const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground;
var boxOptions

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;



  ground = Bodies.rectangle(200,390,400,20,{isStatic : true});
  World.add(world,ground);
  boxOptions = {
restitution : 2

  }
 box = Bodies.rectangle(200,50,60,60,boxOptions);
 World.add(world,box);
 ball = Bodies.circle(100,100,20,{

restitution : 1.4
 })

World.add(world,ball);

  console.log(ground);
}


function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  rect(box.position.x,box.position.y,60,60);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}