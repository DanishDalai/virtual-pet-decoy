var database
var dog,happyDog;
var foodS, foodStockRef
var Img




function preload()
{
  happyDog = loadImage("images/happyDog.png")
    dogImg = loadImage("images/dog.png")
}

function setup() {
  createCanvas(500, 500);

  database=firebase.database();
  var databaseRef=database.ref('Food')
  databaseRef.on("value",readStock);
       
  dog=createSprite(400,420);
  dog.addImage(dogImg); 
  dog.scale=0.2

}


function draw() {  
background(46, 139, 87)
  drawSprites();

  if(foodStock!==undefined){
    if(KeyWentDown(UP_ARROW)){
      dog.addImage(happyDog);
      writeStock(foodStock);
      }
    
      if(KeyWentUp(UP_ARROW)){
        dog.addImage(dogImg);
        }
    
  }
 
}

function readStock(data){
  foodStock=data.val();
}
function writeStock(x){

  if(num<=0){
    num=0;
  }else{
    num=num-1;
  }

  database.ref('/').update({
    Food:num
  })
}

