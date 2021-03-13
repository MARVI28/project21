
var fixedRect, movingRect;
var gameObject1, gameObject2;
var ball

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
   movingRect.debug = true
  fixedRect = createSprite(200, 400, 50, 50);
  fixedRect.shapeColor = "green";
   fixedRect.degug=true
  ball= createSprite(500,400,50,50);
  ball.shapeColor = "green";
  ball.debug=true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if (isTouching(movingRect,ball)){ 
    movingRect.shapeColor = "blue";
    ball.shapeColor =  "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green";

    ball.shapeColor = "green";
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




