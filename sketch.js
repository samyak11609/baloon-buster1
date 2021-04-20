
var sky, sky_running, blueB, blueBalloon, greenB, greenBalloon, pinkB,pinkBalloon, redB, redBalloon, ground, groundImage, bow, bow_b;

function preload () {
  

  groundImage=loadImage("background0.png");
  redB=loadImage("red_balloon0.png");
  pinkB=loadImage("pink_balloon0.png");
  greenB=loadImage("green_balloon0.png");
  blueB=loadImage("blue_balloon0.png");
  bow=loadImage("bow0.png");
}

function setup () {
  

  createCanvas(400, 400);
  

  sky=createSprite(0,0,600,600);
  sky.addImage('sky',groundImage);
  sky.x = sky.width /2;
  sky.velocityX = -4;
  sky.scale=2.5;
  
  for (var i = 50; i < 400; i=i+53) {
   var blueBalloon = createSprite(50,i,17,17);
   blueBalloon.addAnimation("Blue",blueB);
   blueBalloon.scale=0.1;
  }
  
  for (var b = 125; b < 300; b=b+58) {
   var redBalloon = createSprite(150,b,17,17);
   redBalloon.addAnimation("Red",redB);
   redBalloon.scale=0.09;
  }
  

  for (var p = 100; p < 350; p=p+55) {
   var pinkBalloon = createSprite(100,p,17,17);
   pinkBalloon.addAnimation("Pink",pinkB);
   pinkBalloon.scale=1.2;
  }
  
  for (var g = 180; g < 275; g=g+58) {
   var greenBalloon = createSprite(200,g,17,17);
   greenBalloon.addAnimation("Green",greenB);
   greenBalloon.scale=0.09;
  }
  

  bow_b=createSprite(380,200,30,0);
  bow_b.addAnimation('blaster_bow',bow);
  
}

function draw () {
  // to add the background
  background(220);
  

  if (sky.x < 0) {
    sky.x = sky.width / 2;
  }

  bow_b.y=mouseY;
  
  drawSprites();
}