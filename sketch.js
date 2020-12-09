const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,500,50);
 
  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinkos(j,75));
 }

  for (var j = 15; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,175));
 }

  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  if (frameCount%60===0) {
    particles.push(new particles(random(width/2-10, width/2+10), 10,10));
  }
}

var particles = [j, k];
var plinkos = [j];
var division= [k, j];
var divisionHeight=300;

function draw() {
  background(0);
  ground.display();  
  
  for (var  j = 0; j ,particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < division.length; k++) {
    division[k].display();
  }

  drawSprites();
}