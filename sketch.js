var astronaut;
var sleep, brush, bath, eat, move, gym;
var background, bg;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  move = loadAnimation("images/move.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
}

function setup() {
  createCanvas(600,500);
  
  astronaut = createSprite(300, 250);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  
  textSize(14);
  fill(255);
  text("INSTRUCTION", 910, 10);
  textSize(12);
  fill(255);
  text("Up Arrow = BRUSHING,", 900, 10);
  textSize(12);
  fill(255);
  text("Down Arrow = DRINKING", 890, 10);
  textSize(12);
  fill(255);
  text("Left Arrow = BATHING", 880, 10);
  textSize(12);
  fill(255);
  text("Right Arrow = MOVING", 870, 10);
  textSize(12);
  fill(255);
  text("e Key = EATING", 860, 10);
  textSize(12);
  fill(255);
  text("g Key = GYMING", 850, 10);
  textSize(12);
  fill(255);
  text("s Key = SLEEPING", 840, 10);                         

  if(keyDown("up_arrow")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("down_arrow")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("left_arrow")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  
  if(keyDown("right_arrow")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  
  if(keyDown("G")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  
  if(keyDown("S")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  drawSprites();
}







