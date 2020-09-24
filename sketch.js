
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5, box1, box2, box3, chain1, chain2, chain3, chain4, chain5, newton, newtonimg;
function preload()
{
	newtonimg = loadImage("newton.webp");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	
	ball1 = new Ball(440, 450, 40);
	ball2 = new Ball(520, 450, 40);
	ball3 = new Ball(600, 450, 40);
	ball4 = new Ball(680, 450, 40);
  ball5 = new Ball(760, 450, 40);

  box1 = new Box(600, 100, 500, 50);
  box2 = new Box(325, 300, 50, 500);
  box3 = new Box(875, 300, 50, 500);

  chain1 = new Chain(ball1.body, {x:440, y:125});
  chain2 = new Chain(ball2.body, {x:520, y:125});
  chain3 = new Chain(ball3.body, {x:600, y:125});
  chain4 = new Chain(ball4.body, {x:680, y:125});
  chain5 = new Chain(ball5.body, {x:760, y:125});
  

  newton = createSprite(150, 200, 30, 30);
  newton.addImage(newtonimg, 30, 30);
}


function draw() {
  background("yellow");
  Engine.update(engine);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  box1.display();
  box2.display();
  box3.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  if(keyDown("space")){
  Matter.Body.applyForce(ball1.body, ball1.body.position,{x:-1000, y: 500});
  }
  drawSprites();
  textSize(45);
  textFont("Consolas");
  fill("lightgreen");
  text("Newton's Cradle", 430, 50);
  
  textSize(30);
  textFont("Consolas");
  fill("orange");
  text("This is my invention----->", 50, 400, 50);

  textSize(30);
  textFont("Impact");
  fill(38, 255, 0);
  text("Press the 'SPACE' key on your key board to move a ball", 280, 580);
}




