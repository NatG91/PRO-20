var Car;

var Wall;

var Speed,Weight;


function setup() {
  createCanvas(1600,400);

  Speed=random(55,90);
Weight=random(400,1500);

  Car=createSprite(50,200,50,50)
  Wall=createSprite(1500,200,60,height/2);
Car.velocityX=Speed;
Car.shapeColor=("white");
Wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  
  if (Wall.x-Car.x<(Car.width+Wall.width)/2)
  {
    Car.velocityX=0;
    var Deformation=0.5 * Weight * Speed * Speed/22509;
    if (Deformation>180)
    {
      Car.shapeColor=color(255,0,0);
    }

  if (Deformation<180 && Deformation>100)
  {
    Car.shapeColor=color(230,230,0);
  }

  if (Deformation<100)
  {
    Car.shapeColor=color(0,255,0);
  }
  }
  drawSprites();
}
