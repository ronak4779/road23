var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var school;
var cars;
var carAnimation1,carAnimation2,playerAnimation,logAnimation;


function preload(){

carAnimation1 = loadAnimation("car1.png");
carAnimation2 = loadAnimation("car2.png");
playerAnimation = loadAnimation("Player-03.png");
logAnimation = loadAnimation("log2.png");

}


function setup() {
  createCanvas(1366,700);
 
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
      var road =createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "grey";

    for(i=1;i<logGroup1.length;i++){
      if(logGroup1[i].x<0)
      {
        logGroup1[i].x=width;
      }
    }
  
    for(var i = 0; i < 40; i ++ ){
      Cars = new Car(2);
      carGroup1.add(Cars.spt)
    } 

  }

  

  
  player = new Player(width/2,height-25);
 }

 function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0 ,-2);
  }else if(keyCode == DOWN_ARROW){
   player.move(0 ,2);
  }else if(keyCode == LEFT_ARROW){
   player.move(-2 , 0);
  }else if(keyCode == RIGHT_ARROW){
   player.move(2 , 0);
  }
 }
  
  
function draw() {
  background("skyblue");
 
  translate(0 ,-player.spt.y+height-150);
 
  

  drawSprites();
}

