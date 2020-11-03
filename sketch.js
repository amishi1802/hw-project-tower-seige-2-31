const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  

  ground=new Ground(400,height,900,20);
  for(var a=0; a <= width; a=a+80){
    divisions.push(new Divisions(a, height-divisionHeight/2,10, divisionHeight));
  }

  for(var b=40; b<= width; b=b+50){
    plinkos.push(new Plinko(b,75));
  }

  for(var b=15; b<= width; b=b+50){
    plinkos.push(new Plinko(b,175));
  }

  for (var b=40; b<=width; b=b+50 ){
    plinkos.push(new Plinko(b,275));
  }

  for(var b=15; b<=width; b=b+50){
    plinkos.push(new Plinko(b,375));
  }
}

function draw() {
  background(0);  


  

  if(frameCount%60 ===0){
    particles.push(new particle(random(width/2-30, width/2+30),10,10));
  }

  for(var a=0; a<divisions.length; a++){
    divisions[a].display();
  }

  for(var b=0; b<particles.length; b++){
    particles[b].display();
  }

  for(var b=0; b<plinkos.length; b++){
    plinkos[b].display();
  }

  ground.display();
  drawSprites();
}