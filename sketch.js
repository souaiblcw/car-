var fixedb, moveingb;



function setup() {
  createCanvas(800,400);
  fixedb=createSprite(200, 200, 50, 50);
  fixedb.shapeColor="green";

  moveingb=createSprite(400, 200, 50, 50);
  moveingb.shapeColor="green";
}

function draw() {
  background(0); 
  
  moveingb.x=World.mouseX;
  moveingb.y=World.mouseY;

  if (moveingb.x-fixedb.x<fixedb.width/2+moveingb.width/2&&
      fixedb.x-moveingb.x<fixedb.width/2+moveingb.width/2&&
      moveingb.y-fixedb.y<fixedb.width/2+moveingb.width/2&&
      fixedb.y-moveingb.y<fixedb.width/2+moveingb.width/2){
 moveingb.shapeColor="red";
 fixedb.shapeColor="red";
  }else {
    moveingb.shapeColor="green";
    fixedb.shapeColor="green";
  }

  drawSprites();
}