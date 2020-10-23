var dog; 
var happydog; 
var foodS, foodstock; 
var database;

function preload()
{
  dog = loadImage("sprites/dogImg.png"); 
  
  happy = loadImage("sprites/dogImg1/png"); 
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(330,200,30,40); 
  dog.addImage(dog);

  foodstock = database.ref('Food'); 

  foodstock.on("value",readStock); 
}


function draw() {  
  background(46, 139, 87); 

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS); 
    dog.addImage(happy); 
  }
  drawSprites();

  database.text (Press the UP_ARROW key to feed the dragon milk); 
  fill("brown"); 
  stroke(10); 
  textSize(22); 
}

function readStock(data) {
  foodS = data.val(0); 
}

function writeStock(x) {
  if (x<=0) {
    x = 0; 
  }else {
    x = x-1; 
  }
  database.ref('/').update({
    Food:x
  })
}