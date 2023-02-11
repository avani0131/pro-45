var bg, bgImg
var bottomGround
var topGround
var runner,runnerImg
var score

function preload(){
bgImg = loadImage("assets/Cloud.jpeg")
trackImg = loadImage("assets/Track.jpeg")
runnerImg = loadImage("assets/Runner.png")
mudImg = loadImage("assets/Mud.png")
waterImg = loadImage("assets/Water Bottle.png")
hurdleImg = loadImage("assets/Hudle.png")
twoXImg = loadImage("assets/2x.png")
restartImg = loadImage("assets/Restart.png")


}

function setup(){
createCanvas(1200,600)

//background image
bg = createSprite(600,300,1,1);
bg.addImage(bgImg);
bg.scale = 2

//track image
track = createSprite(300,450,12,1);
track.addImage(trackImg);
track.scale = 1;

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;

//create runner
runner = createSprite(170,460,10,10);
runner.addImage(runnerImg);
runner.scale = 0.3;

boosterGroup = createGroup();
obstaclesGroup = createGroup();


}

function draw() {
background("blue");
score = score + Math.round(frameCount/60);       
spawnObstacle();
spawnBooster();
drawSprites();      
}

function spawnObstacle(){
  if (frameCount % 240 === 0){
    var obstacle = createSprite(600,200,10,40);
    obstacle.y = Math.round(random(350,560))
    obstacle.velocityX = -1;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(mudImg);
               obstacle.scale = 0.3;
               break;
       case 2: obstacle.addImage(hurdleImg);
               obstacle.scale = 0.4;
               break;
       default: break;
     }
    
     //assign lifetime to the obstacle           
     obstacle.lifetime = 500;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }

 function spawnBooster(){
  if (frameCount % 140 === 0){
    var booster = createSprite(600,200,10,40);
    booster.y = Math.round(random(350,560))
    booster.velocityX = -1;
    
     //generate random boosters
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: booster.addImage(twoXImg);
               booster.scale = 0.1;
               break;
       case 2: booster.addImage(waterImg);
               booster.scale = 0.04
               break;
       default: break;
     }
    
     //assign lifetime to the obstacle           
     booster.lifetime = 500;
    
    //add each booster to the group
     boosterGroup.add(booster);
  }}