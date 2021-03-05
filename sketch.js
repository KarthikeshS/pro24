
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var background;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,1100,1200,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);
 
  drawSprites();

 
}



