function alien() {
    stroke(130, 38, 222);
    strokeWeight(1.5);

    //spaceship body
    fill(160, 160, 160);
    ellipse(160, 240, 20, 20);
    ellipse(240, 240, 20, 20);
    ellipse(200, 220, 130, 50);
    ellipse (200, 200, 250, 50);

    //spaceship capsule 
    fill(132, 220, 242);
    ellipse(200, 190, 130, 30);
    beginShape();
    vertex(135, 190);
    bezierVertex(135, 100, 250, 100, 265, 190);
    endShape();
    noStroke();
    fill(255,255,255);
    ellipse(235, 180, 3, 10);
    arc(225, 170, 20, 60, 300, 25, PI);

    //ship details
    stroke(130, 38, 222);
    fill(255, 255, 51);
    ellipse(110, 200, 20, 10);
    ellipse(170, 215, 20, 10);
    ellipse(230, 215, 20, 10);
    ellipse(290, 200, 20, 10);

    //alien face
    stroke(0,0,0);
    strokeWeight(0.2);
    fill(60, 208, 112);
    ellipse(195, 170, 50, 60);

    //eyes
    fill(0, 0, 0);
    push();
    translate(252, 155);
    rotate(-1);
    ellipse(-50, -50, 10, 20);
    pop();
    push();
    translate(231, 104);
    rotate(-2);
    ellipse(-50, -50, 10, 20);
    pop();
    fill(255,255,255);
    ellipse(187,173, 3, 3);
    ellipse(201, 173, 3, 3);
    ellipse(180, 168, 6, 3);
    ellipse(210, 168, 6, 3);
}

alien();

