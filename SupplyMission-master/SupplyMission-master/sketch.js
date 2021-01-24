var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,base,baseSprite,side1,side2;
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

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	baseSprite=createSprite(400,650,100,20);
	baseSprite.shapeColor=color(255,0,0);

	side1=createSprite(350,610,20,100);
	side1.shapeColor=color(255,0,0);

	side2=createSprite(450,610,20,100);
	side2.shapeColor=color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //to create the base
	 base = Bodies.rectangle(400,650,100,20,{isStatic:true});
	 World.add(world,base);
	 side1=Bodies.rectangle(350,610,20,100,{isStatic:true});
	 World.add(world,side1);
	 side2=Bodies.rectangle(450,610,20,100,{isStatis:true});
	 World.add(world,side2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  fill("orange")
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false) 
Matter.Body.setRestitution(packageBody,package_options)  
  }
}