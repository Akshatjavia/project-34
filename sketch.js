const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 575, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(750,550,50,50);
  box2 = new Box(750,500,50,50);
  box3 = new Box(750,450,50,50);
  box4 = new Box(750,400,50,50);
  box5 = new Box(750,350,50,50);
  box6 = new Box(750,300,50,50);
  box7 = new Box(750,250,50,50);
  box8 = new Box(750,200,50,50);
  box9 = new Box(750,150,50,50);
  box10 = new Box(750,100,50,50);
  box11 = new Box(800,550,50,50);
  box12 = new Box(800,500,50,50);
  box13 = new Box(800,450,50,50);
  box14 = new Box(800,400,50,50);
  box15 = new Box(800,350,50,50);
  box16 = new Box(800,300,50,50);
  box17 = new Box(800,250,50,50);
  box18 = new Box(800,200,50,50);
  box19 = new Box(800,150,50,50);
  box20 = new Box(800,100,50,50);
  box21 = new Box(850,550,50,50);
  box22 = new Box(850,500,50,50);
  box23 = new Box(850,450,50,50);
  box24 = new Box(850,400,50,50);
  box25 = new Box(850,350,50,50);
  box26 = new Box(850,300,50,50);
  box27 = new Box(850,250,50,50);
  box28 = new Box(850,200,50,50);
  box29 = new Box(850,150,50,50);
  box30 = new Box(850,100,50,50);
  box31 = new Box(900,550,50,50);
  box32 = new Box(900,500,50,50);
  box33 = new Box(900,450,50,50);
  box34 = new Box(900,400,50,50);
  box35 = new Box(900,350,50,50);
  box36 = new Box(900,300,50,50);
  box37 = new Box(900,250,50,50);
  box38 = new Box(900,200,50,50);
  box39 = new Box(900,150,50,50);
  box40 = new Box(900,100,50,50);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  


  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x: mouseX,y: mouseY });
}