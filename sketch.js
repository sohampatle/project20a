var car ,wall;
var speed,wight;

function setup() {
  createCanvas(400,400);
  speed = random(55,90);
  wight = random(400,1500);

  car = createSprite(30, 200, 20, 20);
  car.velocityX = speed;
  car.shapColour = "white";

  wall = createSprite(400, 200, 20, height/2);
  wall.shapeColour = "white";
  
}

function draw() {
  background(0);  

if(wall.x- car.x <(car.width + wall.width)/2){
car.velocityX = 0;
var def = 0.5*width*speed*speed/22500;
if(def>180){
  car.shapeColor = color(255,0,0);
}
if(def<180 && def<100){
  car.shapeColor = color(230,230,0);

}
if(def<100){
  car.shapeColor = color(0,255,0);
}

}


  drawSprites();
}