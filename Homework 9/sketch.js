function setup() {
    createCanvas(400, 400);
                ;
            }

 function draw() {
    //Draw ears
    fill(222, 174, 91);
    ellipse(120, 200, 30, 50);
    ellipse(280, 200, 30, 50);

    // Draw face
     fill(222, 174, 91);
    ellipse(200, 200, 150, 200);
    
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
    arc(200, 240, 50, 20, 0, PI);

    // Draw hat
    fill(33, 88, 201);
    arc(200, 130, 160, 160, PI, TWO_PI);
    arc(200, 131, 200, 50, PI, TWO_PI);
    
    //Draw title
    fill(0);
    textSize(32);
    text('Portrait of Jasmyn', 100, 30);

    
    
    
    
            }