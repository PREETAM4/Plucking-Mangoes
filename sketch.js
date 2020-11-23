const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var ground;
var tree;
var boy;
var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(1100,700,50);
	mango1 = new Mango(1100,170,30);
	mango2 = new Mango(1150,235,30);
	mango3 = new Mango(1050,240,30);
	mango4 = new Mango(1190,300,30);
	mango5 = new Mango(1100,300,30);
  mango6 = new Mango(1000,400,30);
  mango7 = new Mango(1200,200,30);
  ground = new Ground(0,680,4000,20);
  boy = new Boy(250,600);
  boy.sclae=0.14;
	stone= new Stone(150,500,30);
	chain = new Chain(stone.body,{x:150, y:500});   

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  boy.display();
  stone.display();
  
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7)



  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:160, y:500});
  chain.attach(stone.body);
}
}
function detectCollision(lstone,lmango){
stoneBodyPosition = lstone.body.position;
mangoBodyPosition = lmango.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
  Matter.Body.setStatic(lmango.body, false);
}

}



