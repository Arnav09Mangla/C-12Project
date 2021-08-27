var garden,rabbit,leaf,apple;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("leaf.png")
}



function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  if (frameCount%80===0){
createApples();
createLeaf();
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=mouseX;
  drawSprites();
}
function createApples(){
  apple=createSprite(50,10,10,10);
  apple.velocityY=3;
  apple.addImage(appleImg)
  apple.scale=0.1;

apple.x=random(50,350)
}

function createLeaf(){
  leaf=createSprite(50,10,10,10);
  leaf.velocityY=3;
  leaf.addImage(leafImg)
  leaf.scale=0.1;
}