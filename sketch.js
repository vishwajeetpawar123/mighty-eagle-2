



let timer = 60;

let gameState=1

var clouds,clo;

var birds,birds1;

var birdimg;

var enmy

var tower;

var wall1,wall2,wall3,wall4;

var god,img;

var form;

var eagle;

var boom;

var c,b,b1;

let hit=0;

let score=0;



function preload(){




  enmy=loadImage("red.jpg");
  tower1=loadImage("tw.png");
  birdimg=loadImage("bird.png");
  clo=loadImage("cloud2.png");
  img=loadImage("god.png");

  eagle=loadSound("eagle.mp3");
  boom=loadSound("boom.mp3");
  

  form=new Form();



}






















function setup() {
  createCanvas(1600, 1100);









  clouds = new Group();
  birds = new Group();
  birds1 = new Group();



  






    player=createSprite(width/2,height/2,14,14);
player.shapeColor=("black");
player.addImage("bird", birdimg);
player.scale=0.1;
player.setCollider ( "circle",  20 , 20,  20 )




  tower=createSprite(1350,950,50,50);
  tower.addImage("red", tower1);
  tower.scale=0.5
  tower.setCollider ( "rectangle",  25 , 25,  50,  50 )
 
















  for (var i = 0; i < 10; i++) {
     c = createSprite(
      random(width), random(0,height/2),
      random(25, 100), random(25, 100));
    c.shapeColor = color(random(200, 255));
    c.addImage("cloud",clo);
   c.maxSpeed =0;
    c.scale=0.20
    clouds.add(c);
  }











  for (var i = 0; i < 10; i++) {
     b = createSprite(
      random(0,width), random(height-200,height),
      random(2, 20), random(5, 50));
    b.shapeColor = color(255, 0, random(255));
  
      b.addImage(enmy);
      b.scale=0.03;
    b.maxSpeed =40;
    b.rotateToDirection = true;
    b.addToGroup(birds);
  }









  for (var i = 0; i < 10; i++) {
     b1 = createSprite(
      random(width), random(0,height),
      random(2 ,20), random(5, 50));
    b1.shapeColor = color(255, 0, random(255));
   
    b1.addImage(enmy);
    b1.scale=0.03;
    b1.maxSpeed =40 ;
    b1.rotateToDirection = true;
    b1.addToGroup(birds1);
  }




  god=createSprite(0,0);
  god.visible=false;
  god.addImage(img);
 
  





  
  


  
 

}











function draw() {













  background("#ADD8E6");
















 


  if(gameState===1){
    form.display();
    //c.visible=false;
  }




  if(gameState===2){
    form.hide();

    if(hit===8){
      gameState=3;
    }
   
    if(player.isTouching(birds)){

      hit=hit+1
  
    }

    if(player.isTouching(birds1)){

      hit=hit+1
  
    }

    

    textAlign(CENTER, CENTER);
    textSize(50);
    text("HITS:"+hit,100,30);
    text("score:"+score,500,30);
    

    textSize(50);
    text("TIME FOR MIGHTY EAGLE:"+timer, 1050, 30);
  
    if (frameCount % 35 == 0 && timer > 0) { 
      timer --;
    }

    if(frameCount%50==0){
      score=score+1
    }
  
    if(frameCount%300==0){
      for (var i = 0; i < 5; i++) {
        var b1 = createSprite(
          random(width), random(0,height),
          random(2 ,20), random(5, 50));
        b1.shapeColor = color(255, 0, random(255));
       
        b1.addImage(enmy);
        b1.scale=0.03;
        b1.maxSpeed =40 ;
        b1.rotateToDirection = true;
        b1.addToGroup(birds1); 
      }
    }
    if (timer == 0) {
      
      god.attractionPoint(0.50,1350,950);
      eagle.play();
     // eagle.noLoop();
      god.visible=true;
      god.maxSpeed=100;
  
      if(god.isTouching(tower)){
       // eagle.stop();
       // god.destroy();
        tower.destroy();
        birds1.destroyEach();
        birds.destroyEach();
        clouds.destroyEach();
        boom.play();
        gameState=6
      }

    }
  
    player.x=mouseX;
    player.y=mouseY;
  
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].position.x += clouds[i].width * 0.01;
      if (clouds[i].position.x > width) {
        clouds[i].position.x = 0;
      }
    }
    for (var i = 0; i < birds.length; i++) {
      birds[i].attractionPoint(1.10, mouseX, mouseY);
    }
  
    for (var i = 0; i < birds1.length; i++) {
      birds1[i].attractionPoint(0.90, mouseX, mouseY);
    }
  
  }












  if(gameState===3){

    tower.destroy();
   
    player.destroy();
   
    textSize(60)
   
    fill("red");
   
    textAlign(CENTER,CENTER);
  
    text("GAME OVER!!!",800,60);
   
  textAlign(CENTER);
   
    fill("black");
    score=0;
   
   
    hit=0
   
    textSize(20);
    text("YOU DID NOT MAKE IT TO THE END:( THIS IS NOT THE ONLY BIRD.MANY DIE",windowWidth/2-100,windowHeight/2+50)


    text("BECOUSE OF RADIATION,FOOD,AND SOME CAN'EVEN SEE THE BEAUTIFUL WORLD",windowWidth/2-100,windowHeight/2+100)
    
    
    text("THEY DIE IN CAGE THEY DIE WITH NO HOPE IF WE WANT WE CAN PUT WATER,",windowWidth/2-100,windowHeight/2+150)
    
    
    text("FOOD FOR THEM WE CAN HELP BIRD WITH THE RADIATION WITH GIVING THEM TO THE ",windowWidth/2-100,windowHeight/2+200)
   
   
    text("WILDLIFE SANCTUARIES WHERE IT IS ENSURED THERE IS NO TELEPHONE TOWER NEARBY.",windowWidth/2-100,windowHeight/2+250)
    
    textSize(35);
    
    
    text("God loved the birds and created trees, humans loved the birds and created cages.",800,windowHeight/2+350)
  }

















  if(gameState===4){
    textAlign(CENTER,CENTER);
    birds1.destroyEach();
    birds.destroyEach();
    player.destroy();

    fill("blue");
    textSize(50);
    text("HOW TO PLAY THE GAME!!!",windowWidth/2-50,windowHeight/2-500);

    fill("white");
    textSize(30);

    text("Characters- ",windowWidth/2-50,windowHeight/2-400);

    text("1}player bird;",windowWidth/2-50,windowHeight/2-370);

    text("2}mighty eagle-the gods of birds;",windowWidth/2-50,windowHeight/2-340);

   
   
    text("1]you are a bird in the game which will be conterolled by the mouse;",windowWidth/2-50,windowHeight/2-280);

   
    text("2]there are two objectives-",windowWidth/2-50,windowHeight/2-220);

    text("1}stay alive untill the mighty eagle arrives to save you;",windowWidth/2-50,windowHeight/2-190);

    text(" 2}stay protected from the radaition ions swinging through th airto hit you try not to reach 8 hits or you won't make it to the mighty eagle.",windowWidth/2-50,windowHeight/2-160);

   
   
   
    text("3]there are radiation ions through the air try to avoid them.",windowWidth/2-50,windowHeight/2-120);

    text("4]there is a tower nearby which is realising the ions time to time.",windowWidth/2-50,windowHeight/2-80);

    
    
    
    text("6]to get knowledge and slogens about the birds win and also try losing.",windowWidth/2-50,windowHeight/2-30);




    text("7]reload the page to get to the home page.",windowWidth/2-50,windowHeight/2-0);


    clouds.destroyEach();
  }

  

 






if(gameState===6){
  score=0;
  hit=0
  
  textAlign(CENTER,CENTER)
  fill("black");
  textSize(20);
    text("YOU MADE IT TO THE END TODAY BECAUSE OF THE MIGHTY EAGLE",windowWidth/2,windowHeight/2+50);
    text("BUT WHAT IF THERE IS NO MIGHTY EAGLE YES! MANY DIE BECAUSE OF",windowWidth/2,windowHeight/2+70);
    text("RADIATION WITH NO HOPE:( IN THIS GAME THERE IS MIGHTY EAGLE",windowWidth/2,windowHeight/2+90);
    text("BUT IN REAL LIFE THERE IS NO SAVER OF THE BIRDS!",windowWidth/2,windowHeight/2+110);
    text("WE SHOULD FEED TH BIRDS HELP THEM WITH MOVING THEM TO WILDLIFE",windowWidth/2,windowHeight/2+130);
    text("WE CAN DO ANY THING TO SAVE THOSE LITTLE FELLAS:).",windowWidth/2,windowHeight/2+150);
    textSize(40);
    text("Birds are God's natural drones.",windowWidth/2,windowHeight/2+180);
}

















  if(gameState===5){

    textAlign(CENTER, CENTER);
    textSize(50);
   // text("TIME REMAINING FOR MIGHTY EAGLE:"+timer, 1050, 30);
  
   
  
    if(frameCount%400==0){
      for (var i = 0; i < 5; i++) {
        var b1 = createSprite(
          random(width), random(0,height),
          random(2 ,20), random(5, 50));
        b1.shapeColor = color(255, 0, random(255));
       
        b1.addImage(enmy);
        b1.scale=0.03;
        b1.maxSpeed =40 ;
        b1.rotateToDirection = true;
        birds1.add(b1);

        
      }
    }
  
    textAlign(CENTER, CENTER);
    textSize(50);
    text("HITS:"+hit,100,30);
    text("score:"+score,500,30);

    if(player.isTouching(birds)){

      hit=hit+1
  
    }

    if(player.isTouching(birds1)){

      hit=hit+1
  
    }
    if(frameCount%50==0){
      score=score+1
    }

    
  
    player.x=mouseX;
    player.y=mouseY;
  
  
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].position.x += clouds[i].width * 0.01;
      if (clouds[i].position.x > width) {
        clouds[i].position.x = 0;
      }
    }
    for (var i = 0; i < birds.length; i++) {
      birds[i].attractionPoint(1.10, mouseX, mouseY);
    }
  
    for (var i = 0; i < birds1.length; i++) {
      birds1[i].attractionPoint(0.90, mouseX, mouseY);
    }
  

  
  if(gameState===3){
    textAlign(CENTER);

    textSize(50);
    text("GMAE OVER",windowWidth/2-100,windowHeight/2-500)
  }
  
  }




  



  drawSprites();






}