const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var bird;
var pig1,pig2;
var log1,log2,log3,log4,log5;
var bg
var slingshot;
var gameState='play';
function preload(){
bg= loadImage("bg.png")

}
function setup(){
    angleMode(RADIANS)
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
log1= new Log(width-400,height-100,320,PI/2)
log2= new Log(width-400,height-220,320,PI/2)
log3= new Log(width-300,height-300,150,-PI/4.5)
log4= new Log(width-500,height-300,150,PI/4.5)

    box1 = new Box(width-300,height-45,100,100);
    box2= new Box(width-500,height-40,100,100);
    box3 = new Box(width-300,height-160,100,100);
    box4= new Box(width-500,height-160,100,100);
    bird= new Bird(400,250)
    pig1= new Pig(width-400,height-60);
    pig2= new Pig(width-400,height-170)
    box5= new Box(width-400,height-280,100,100)
    ground= new Ground(width/2,height,width,30)
    slingshot= new Slingshot(bird.body,{x: 400, y: 250})
    ground3= new Ground(width/9,height-30,900,700)
}

function draw(){
    background(bg);
   Engine.update(engine);
    box1.show();
    box2.show();
    box3.show()
    box4.show()
   box5.show()
    ground.show();
    bird.show();
    pig1.show();
    pig2.show()
    pig1.vanish()
    pig2.vanish()
   log1.show()
   log2.show()
  log3.show()
   log4.show()
   //log5.show()
   ground3.show()
   slingshot.show()
   
}


function mouseDragged(){
    if(gameState==='play')
    Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
    gameState='over'
}