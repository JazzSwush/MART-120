var playerX;
var items = [];
var score = 0;
var lives = 3;

var a = 65;
var d = 68;

var tryAgainButton = null;

function setup() {
    createCanvas(700, 500);
    playerX = width / 2;
}

function draw() {
    background(50);
    if (lives > 0) {
    drawPlayer();
    movePlayer();
    itemActions();
    scoring();
    } 
        else {
            gameOver();  
    }
}

function drawPlayer() {
//Player
fill(230, 180, 60);
rect(playerX - 40, height - 30, 80, 20);
}

function gameOver() {
//Game Over
if (lives <= 0) {
    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 24);

    fill(255);
    textSize(24);
    text("Final Score: " + score, width / 2, height / 2 + 24);
    
    if (tryAgainButton === null) {
        tryAgainButton = createButton('Try Again');
        tryAgainButton.position(width / 2 - tryAgainButton.width / 2, height / 2 + 60);
        tryAgainButton.mousePressed(resetGame);
    }
}
}

function resetGame() {
    score = 0;
    lives = 3;
    items = [];
    playerX = width / 2;
    frameCount = 0;

    if (tryAgainButton) {
    tryAgainButton.remove();
    tryAgainButton = null;
}
    loop();
}
function movePlayer() {
//Move Player
if (keyIsDown(a) || keyIsDown(LEFT_ARROW)) {
    playerX -= 8;
  }
else if (keyIsDown(d) || keyIsDown(RIGHT_ARROW)) {
    playerX += 8;
}
playerX = constrain(playerX, 40, width - 40);
}

function itemActions() {
//Spawn Rate
if (frameCount % 80 == 0) {
    items.push(makeItem());
  }
  for (var i = items.length - 1; i >= 0; i--) {
    var it = items[i];
    it.y += it.speed;

//Draw Items
fill(it.color);
drawShape(it);

//Catching Items
if (it.y > height - 30 && it.x > playerX - 40 && it.x < playerX +40) {
    score++;
    items.splice(i, 1);
    continue;
}
//Missed Items
if (it.y >height + it.size) {
        lives--;
        items.splice(i, 1);
        continue;
}
//Remove Off-Screen Items
    if (it.y > height + it.size) {
    items.splice(i, 1);

}
  }
}
function scoring() {
//Scoring
fill(255);
textSize(24);
textAlign(LEFT, TOP);
text("Score: " + score, 10, 30);
text("Lives: " + lives, 10, 60);
}

function makeItem() {
    return {
      x: random(20, width - 20),
      y: -20,
      size: random(20, 40),
      speed: random(2, 5),
      color: color(random(255), random(255), random(255)),
      shapeType: random(['circle', 'square', 'triangle'])
    };
}
function drawShape(it) {
    if (it.shapeType === 'circle') {
      ellipse(it.x, it.y, it.size);
    } else if (it.shapeType === 'square') {
      rect(it.x - it.size / 2, it.y - it.size / 2, it.size, it.size);
    } else if (it.shapeType === 'triangle') {
      triangle(
        it.x, it.y - it.size / 2,
        it.x - it.size / 2, it.y + it.size / 2,
        it.x + it.size / 2, it.y + it.size / 2
      );
    }
}