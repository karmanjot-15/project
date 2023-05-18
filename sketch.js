
var kitten,kittenImg ;
var road,roadImage ;
var diamond,diamondImg ;
var rock,rockImage ;
var cash,cashImg ;
var sword ,swordImage;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score=0;
var jumpSound, collidedSound;

var gameOver, restart;




function preload(){

    jumpSound = loadSound("jump.wav");
  collidedSound = loadSound("collided.wav");

  rockImg = loadImage("rock.jpeg");

  sunAnimation = loadImage("sun.png");

  swordImage = loadImage("sword.png");
  
  roadImage = loadImage("road 4.5.webp");

  gameOverImg = loadImage("gameover.png");
  restartImg = loadImage("restart.png");

kittenImg = loadImage("cat.jpg");
diamondImg = loadImage("diamond.jpg");
cashImg = loadImage("cash.jpg");

}

function setup() {

    createCanvas(400,400);

    kitten = createSprite(50,height-70,20,50);
    kitten.addAnimation("kitten",kitten.Animation);
    kitten.scale = 1

    road = createSprite(width/2,height,width,2);
    road.addAnimation("road",road.Animation);
    road.scale = 1.0 ;

    
    sun = createSprite(width-50,100,10,10);
    sun.addAnimation("sun", sun.Animation);
    road.velocityX = -(6 + 3*score/100);

    invisibleroad = createSprite(width/2,height-10,width,125);  
    invisibleroad.shapeColor = "#f4cbaa";

    gameOver = createSprite(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(width/2,height/2);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.1;

  gameOver.visible = false;
  restart.visible = false;

  score = 0;




 
}

function draw() {

    background("grey");
  textSize(20);
  fill("black")
  text("Score: "+ score,30,50);

  
  
  
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    road.velocityX = -(6 + 3*score/100);
  }
    
    if(kitten.isTouching(cash)) {
      jumpSound.play( )
       touches = [];
    }

    if(rock.isTouching(kitten) || sword.isTouching(kitten)){
        collidedSound.play()
        gameState = END;
    }
  }
   if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;

    road.velocityX = 0;
    kitten.velocityY = 0;
    rock.setVelocityXEach(0);
    sword.setVelocityXEach(0);

 rock.setLifetimeEach(-1);
 sword.setLifetimeEach(-1);

 if(touches.length>0 || keyDown("SPACE")) {      
    reset();
    touches = []
  }
    
    

drawSprites();
}

function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    
    rock.destroyEach();
    sword.destroyEach()
    
    score = 0;
}
