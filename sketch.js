//Memoria
var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);

  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200, 200, 50, 80);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  //movingRect.debug = true;
  //fixedRect.debug = true;


}

function draw() {
  background(0);

console.log(movingRect.x - fixedRect.x);
  
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

  drawSprites();
}