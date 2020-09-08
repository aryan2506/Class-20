var fixedRect, movingRect; 

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(250, 300, 100, 50);
  movingRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if (fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 && 
    movingRect.x-fixedRect.x<movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y-movingRect.y<fixedRect.width/2 + movingRect.width/2 && 
    movingRect.y-fixedRect.y<movingRect.width/2 + fixedRect.width/2) {
    movingRect.shapeColor="white";
    fixedRect.shapeColor="white";
  }
  else {
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  } 
  drawSprites();
}