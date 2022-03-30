
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2

	}

	ball = Bodies.circle(200, 460, 15, ball_options)
	World.add(world, ball);

	

	groundObj = new Ground(width/2, 490, width, 20);
	leftSide = new Ground(1000, 420, 20, 120);
	rightSide = new Ground(1200, 420, 20, 120);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	Engine.update(engine);
	ellipseMode(RADIUS);
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x, ball.position.y, 15);

	groundObj.display();
	leftSide.display();
	rightSide.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:30, y:-60});
	}
}


