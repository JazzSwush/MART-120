var playerX = 50;
var playerY = 50;
var playerR = 25;

var mouseX;
var mouseY;
var mouseShapeX = null;
var mouseShapeY = null;

var obstacles = [];
var shapes = [];
var numShapes = 5;



var w = 87; 
var s = 83;
var a = 65;
var d = 68;

function setup() {
  createCanvas(800, 800);
  createPlayer();

  //Random shape generator
  for (var i = 0; i < numShapes; i++) {
          shapes.push({
            x: random(50, width - 50),
            y: random(50, height - 50),
            vx: random(1,4),
            vy: random(1,4),
            size: random(10, 40),
            col: color(random(255), random(255), random(255))
          });
        }
}

function draw() {
  background(120, 45, 78);
  generateBorder();
  generateExit();

  drawPlayer();
  movePlayer();

  drawShapes();

  drawMouseObstacle();

  checkWin();
}

  function generateExit() {
  //Exit area
  noStroke();
  fill(34, 197, 94, 180);
  rect(width - 100, height - 100, 100, 100);
  fill(0);
  textSize(32);
  text("EXIT", width - 90, height - 60);
  }

  function displayWinMessage() {
    fill(255);
    textSize(48);
    text("YOU WIN!", width / 2 - 100, height / 2);
    noLoop();
  }

  function checkWin() {
  if (playerX - playerR > width && playerY >=  height - 100 && playerY  <= height) 
    {
      displayWinMessage();
    }
  }
  function generateBorder() {
  //Border
  fill(0);
  rect(0, 0, width, 10);
  rect(0, 0, 10, height);
  rect(0, height - 10, 700, 10);
  rect(width - 10, 0, 10, 700);
  }

function createPlayer () {
  playerX = 50;
  playerY = 50;
  playerR = 25;
}
  //Player
  function drawPlayer() {
    fill(255, 204, 0);
    ellipse(playerX, playerY, 50, 50);
  }
  function movePlayer() {
    //WASD and ARROW movements
    if (keyIsDown(w) || keyIsDown(UP_ARROW)) 
    {
      playerY -= 5;
    } else if (keyIsDown(s) || keyIsDown(DOWN_ARROW))
    {
      playerY += 5;
    } else if (keyIsDown(a) || keyIsDown(LEFT_ARROW))
    {
      playerX -= 5;
    } else if (keyIsDown(d) || keyIsDown(RIGHT_ARROW))
    {
      playerX += 5;
    }
     //Keep player inside borders but allow exit area
    if (playerX < 10) {
      playerX = 10;
    } else if (playerX > width - 10 && playerY < height - 100) {
      playerX = width - 10;
    }
    if (playerY < 10) {
      playerY = 10;
    } else if (playerY > height - 10 && playerX < width - 100) {
      playerY = height - 10;
    }
  }


  
    //Shape obstacles
    function drawShapes() {
    for (var shape of shapes) {
    shape.x += shape.vx;
    shape.y += shape.vy;

    //Wrap around screen shape obstacles
    if (shape.x > width) 
        {
        shape.x = 0;
        }
    if (shape.x < 0) 
        {
        shape.x = width;
        }
    if (shape.y > height) 
        {
         shape.y = 0;   
        }
    if (shape.y < 0) 
        {
        shape.y = height;
        }

    fill(shape.col);
    circle(shape.x, shape.y, shape.size);

    }
  }
function drawMouseObstacle() {
    //Mouse obstacles
    if (mouseShapeX !== null && mouseShapeY !== null) {
    fill(255 ,130,255);
    circle(mouseShapeX, mouseShapeY, 25);
  }
}
  //MouseClicked function to create shapes at mouse position
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

