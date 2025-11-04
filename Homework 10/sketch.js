var headX = 200;
var headY = 200;
var headDirectionX;
var headDirectionY;

var mouthX = 200;
var mouthY = 240;
var mouthDirectionX, mouthDirectionY;

var earLX =120;
var earLY =200;
var earRX =280;
var earRY =200;
var earDirectionX, earDirectionY;

var size = 32;
var count = 0;
var sizeDirection = 1;

function setup() {
    createCanvas(400, 400);
        headDirectionX = random(-4, 4);
        headDirectionY = random(-4, 4);
        mouthDirectionX = random(-1.5, 1.5);
        mouthDirectionY = random(-1.5, 1.5);
        earDirectionX = random(-1, 1);
        earDirectionY = random(-1, 1);
}

//Portrait
 function draw() {
    //Draw ears
    fill(222, 174, 91);
    ellipse(earLX, earLX, 30, 50);
    ellipse(earRX, earRY, 30, 50);
    earLX += earDirectionX;
    earLY += earDirectionY;
    earRX += earDirectionX;
    earRY += earDirectionY;
    if(earLX <= 0 || earLX >= 200) earDirectionX *= -1;
    if(earLY <= 0 || earLY >= height) earDirectionY *= -1;
    if(earRX <= 0 || earRX >= width) earDirectionX *= -1;
    if(earRY <= 0 || earRY >= 200) earDirectionY *= -1;
    

    // Draw face
     fill(222, 174, 91);
    ellipse(headX, headY, 150, 200);
    headX += headDirectionX;
    headY += headDirectionY;
    if(headX <= 0 || headX >= width) headDirectionX *= -1;
    if(headY <= 0 || headY >= height) headDirectionY *= -1;
    
    //Draw Moles
    fill(0);
    strokeWeight(2);
    point (180, 195);
    point (180, 205);
    point (220, 260);

    //Draw eyebrows
    stroke(0);
    strokeWeight(4);
    line (150, 160, 190, 150);
    line (210, 150, 250, 160);
    strokeWeight(1);
   
    //Draw hair
    stroke(0);
    fill(58, 33, 0)
    triangle (250, 100, 230, 120, 310, 180);
    triangle (150, 100, 170, 120, 90, 180);

    // Draw eyes
    fill(0);
    ellipse(170, 180, 20, 10);
    ellipse(230, 180, 20, 10);

    //Draw glasses
    noFill();
    rect (150, 170, 40, 20);
    rect (210, 170, 40, 20);
    line (190, 180, 210, 180);
    
    // Draw mouth
    noFill();
    stroke(0);
    arc(mouthX, mouthY, 50, 20, 0, PI);
    mouthX += mouthDirectionX;
    if(mouthX <= 0 || mouthX >= width) mouthDirectionX *= -1;
    

    // Draw hat
    fill(33, 88, 201);
    arc(200, 130, 160, 160, PI, TWO_PI);
    arc(200, 131, 200, 50, PI, TWO_PI);
    
    //Draw title
    fill(0);
    textSize(size);
    size += sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text('Portrait of Jasmyn', 100, 30);

    //Signtaure
    textSize(14);
    
    text('Jasmyn Johnston', 200, 390);   
    
    
            }