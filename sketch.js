
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1;
var dustbin1,dustbin2,dustbin3;
var dustbin_img;
var paper1;

function preload()
{
  dustbin_img=loadImage("dustbin.png")

}


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new paper(50,300,30);
  dustbin1=new dustbin(850,305,15,200);
  dustbin2=new dustbin(930,390,180,15);
  dustbin3=new dustbin(1020,305,15,200);
  ground1=new ground(600,400,1200,15);

  
}


function draw() {
  
  background("white");

  Engine.update(engine);

  ground1.display();
  paper1.display();
  image(dustbin_img,850,210,180,190);

  //dustbin3.display();
  //dustbin1.display();
  //dustbin2.display();

}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:169,y:-169});
  }
}


