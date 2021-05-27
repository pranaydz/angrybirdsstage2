//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
//var ground;
var box1;
var box2;
var bgimage;
function preload() {
bgimage=loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);
  
  //creating the physics engine
  engine = Engine.create();

  //referring to the world to be part of the engine
  world = engine.world;

  ground=new Ground(600,height,1200,20)
  //bottom row
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1=new Pig(810,350);
  log1=new Log(810,260,300,PI/2);

  //middle row
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2=new Pig(810,220);
  log2=new Log(810,180,300,PI/2);

  //top row 
  box5 = new Box (810,160,70,70);
  log3=new Log(760,120,150,PI/7);
  log4 = new Log (870,120,150,-PI/7);
  bird=new Bird(100,100)
}

function draw() {
  background(bgimage);  

  Engine.update(engine);

  
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
}