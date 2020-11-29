const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground,player
var platform1,platform2
var slingShot,polygon


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,390,800,10)
  polygon = Bodies.circle(50,150,20);
  World.add(world,polygon);
  slingshot = new Launcher(this.polygon,{x:100,y:150})
  platform1 = new Ground(385,260,170,10)
  platform2 = new Ground(600,165,170,10)
  block1 = new Block(330,235,30,40)
  block2 = new Block(360,235,30,40)
  block3 = new Block(390,235,30,40)
  block4 = new Block(420,235,30,40)
  block5 = new Block(450,235,30,40)
  block6 = new Block(360,195,30,40)
  block7 = new Block(390,195,30,40)
  block8 = new Block(420,195,30,40)
  block9 = new Block(390,155,30,40)
  block10 = new Block(600,155,30,40)
  block11 = new Block(630,155,30,40)
  block12 = new Block(660,155,30,40)
  block13 = new Block(570,155,30,40)
  block14 = new Block(540,155,30,40)
  block15 = new Block(600,115,30,40)
  block16 = new Block(630,115,30,40)
  block17 = new Block(570,115,30,40)
  block18 = new Block(600,75,30,40)
  Engine.run(engine)
}

function draw() {
  background("green");
  ground.display();
  ellipse(RADIUS);
  ellipse(this.polygon.position.x,this.polygon.position.y,20,20) 
  console.log(polygon);
  slingshot.display();
  platform1.display();
  platform2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}