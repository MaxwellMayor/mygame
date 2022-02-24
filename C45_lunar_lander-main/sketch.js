//global variables: they are public in nature 

let ground;
let lander, lander_img,crashedlanderImg ;
var bg_img;
var asteroid, asteroid_img, asteroidGroup;
var WAIT=0;
var PLAY=1;
var END=2;
var gameState=PLAY;
var gameover, gameoverImg;
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  asteroid_img = loadImage("asteroid.png");
  gameoverImg = loadImage("gameover.png");
  crashedlanderImg = loadImage("crashedlander.png");
}

function setup()
 {
  createCanvas(1000,700);
  frameRate(80);

  //local variable: it can be used only in that function where you created it. 
 // var message="Hello Max";
  //console.log(message);

  //create the PC of the game 
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.debug = true;
  lander.setCollider("circle",0,0,20);

  //create the gameover sprite 
  gameover = createSprite(500,350);
  gameover.addImage(gameoverImg);
  gameover.visible = false;
  
  asteroidGroup = new Group();
  
  rectMode(CENTER);
  textSize(15);

  console.log("Once");
}

function draw() 
{
  background(0);
  //background image
  image(bg_img,0,0);
 if(gameState == PLAY)
  {
    spawnAsteroids();

    push();
    fill(255);
    text("Vertical Velocity: "+ round(vy),800,75);
    pop();
  
    if(keyDown(UP_ARROW))
    {
      lander.y = lander.y - 5  
      }
  
      if(keyDown(DOWN_ARROW)){
      lander.y = lander.y + 5
      }
  
      if(keyDown(LEFT_ARROW)){
      lander.x = lander.x - 5
      }
  
     if(keyDown(RIGHT_ARROW)){
      lander.x = lander.x + 5
      }
      //conditon to end the game 
      if(lander.isTouching(asteroidGroup))
      {
        gameState = END;  
      }
  }   
  else if(gameState == END)
  {
    gameover.visible = true;
    lander.velocityY=4;
    
    //asteroid.setVelocityEach(0, 0);
    
  }
  drawSprites();
}
 function spawnAsteroids()
 {
  var rem=frameCount%100;
  
  if(rem==0)
  {
  var rx=Math.round(random(100, 1000));
  
  asteroid = createSprite(rx,-10,30,40);
  asteroid.velocityX = -3;
  asteroid.velocityY = 3;
  asteroid.addImage(asteroid_img);
  asteroid.scale = 0.3;
  asteroidGroup.add(asteroid);
  }
 }

 

