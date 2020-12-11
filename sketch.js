
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var plinko1;
var ground;
var particle1;
var particles = []; 
var plinkos = []; 
var divisions =[];
var divisionHeight = 300;
var score = 0;
var gameState = "play";
var count=0;
function setup() {
  createCanvas(700,850);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300, 840, 800, 20);
  
  for (var k = 0; k<=width; k= k+99){
    divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight ));
  }
  for (var j =40; j<=width-20; j=j+65)
  {
    plinkos.push(new Plinko(j,100));
  }
  for (var j =15; j<=width-10; j=j+65)
  {
    plinkos.push(new Plinko(j,200));
  }
  for (var j =40; j<=width-20; j=j+65)
  {
    plinkos.push(new Plinko(j,300));
  }
  for (var j =15; j<=width-10; j=j+65)
  {
    plinkos.push(new Plinko(j,400));
  }
}

function draw() {
  background(0); 
  Engine.update(engine); 
  
  
  ground.display();
 for (var j =0; j<particles.length; j++){
   particles[j].display();
   particles[j].score();
   
 }
 for (var k =0; k<divisions.length; k++){
  divisions[k].display();

}
for( var i = 0; i<plinkos.length; i++){
  plinkos[i].display();
}
fill("white")
textSize(18)
text("SCORE : " +score,570, 20);
text(mouseX +","+mouseY, mouseX, mouseY);
push();
textSize(40)
//40,585
text("500", 20, 585)
//144,567
text("500", 120, 585)
text("400", 210, 585)
text("300", 310, 585)
text("200", 410, 585)
text("100", 510, 585)
text("100", 610, 585)
pop();
push()
textSize(25)
text("<----Click Here---->",220, 24)
pop()

}
function mouseClicked(){
  if(mouseY<75&&count<10){
  particles.push(new Particle(mouseX, mouseY))
  count++;
 
  }
  
}

