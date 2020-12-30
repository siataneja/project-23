var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLeft, boxRight, boxBase;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;


	

	groundSprite=createSprite(width/2, height-45, width,10);
	groundSprite.shapeColor=color(255)

	boxLeft=createSprite(270,550,20,200);
	boxLeft.shapeColor=color("red");

	
	

	
	

	boxRight=createSprite(450,550,20,200);
	boxRight.shapeColor=color("red");

	packageSprite=createSprite(width/2, 80, 5,5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	boxBase=createSprite(360,650,200,20);
	boxBase.shapeColor=color("red");

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6	
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxLeftBody = Bodies.rectangle(270, height - 50, 20, 200)
	World.add(world, boxLeftBody)
	
	boxRightBody = Bodies.rectangle(450, height - 50, 20, 200)
	World.add(world, boxRightBody)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	boxBaseBody = Bodies.rectangle(360, height - 50, 200, 20)
	World.add(world, boxBaseBody)


	

	
	
	


	

	//Create a Ground



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);
  }
}



