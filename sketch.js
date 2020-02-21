var fixedRect, movingRect, gameObject1, gameObject2, gameObject3, gameObject4;


function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(400, 100, 50, 50);
 movingRect = createSprite(400,800,80,30); 
 
 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "green";

 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor = "green";

 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor = "green";

 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor = "green";

 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";

 movingRect.velocityY = -5;
 fixedRect.velocityY = 5;

}

function draw() {
  background(0,0,0);  

  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
if(isTouching(movingRect,gameObject1)){
  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  
if(isTouching(movingRect,gameObject2)){
  gameObject2.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  gameObject2.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if(isTouching(movingRect,gameObject3)){
  gameObject3.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  gameObject3.shapeColor = "green";
  movingRect.shapeColor = "green";
}

if(isTouching(movingRect,gameObject4)){
  gameObject4.shapeColor = "red";
  movingRect.shapeColor = "red";
}
else{
  gameObject4.shapeColor = "green";
  movingRect.shapeColor = "green";
}
  bounceOff(movingRect, fixedRect);
  drawSprites();
}


