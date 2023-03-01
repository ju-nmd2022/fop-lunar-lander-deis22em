function setup() {
  createCanvas(1000, 600);
}

function alien(x, y) {
  push();
  translate(x, y);

  scale(0.4);
  stroke(130, 38, 222);
  strokeWeight(1.5);

  //spaceship body
  fill(160, 160, 160);
  ellipse(160, 240, 20, 20);
  ellipse(240, 240, 20, 20);
  ellipse(200, 220, 130, 50);
  ellipse(200, 200, 250, 50);

  //spaceship capsule
  fill(132, 220, 242);
  ellipse(200, 190, 130, 30);
  beginShape();
  vertex(135, 190);
  bezierVertex(135, 100, 250, 100, 265, 190);
  endShape();
  noStroke();
  fill(255, 255, 255);
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
  stroke(0, 0, 0);
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
  fill(255, 255, 255);
  ellipse(187, 173, 3, 3);
  ellipse(201, 173, 3, 3);
  ellipse(180, 168, 6, 3);
  ellipse(210, 168, 6, 3);
  pop();
}

function ground() {
  fill(202, 57, 178);
  rect(0, 550, 2550, 200);
}

let x = 10;
let y = 10;
let speed = 0;
let down = 0.5;
let up = 0.3;

const width = 1000;
const height = 600;

const w = 900;
const h = 400;

let obstacleX = [];
let obstacleY = [];

for (let i = 0; i < 6; i++) {
  let x = Math.floor(Math.random() * w + 40);
  let y = Math.floor(Math.random() * h + 40);
  obstacleX.push(x);
  obstacleY.push(y);
}

//background: start
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 250; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();
  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starX[index], starY[index], 3);
  }

  for (let index in obstacleX) {
    fill(164, 9, 9);

    //body of meteor
    ellipse(obstacleX[index], obstacleY[index], 40);
  }

  ground();
  //background: end

  //alien movement: start
  alien(x, y);
  y = y - up;
  x = x + speed;
  y = y + down;
  down = down + 0.1;

  if (keyIsDown(68)) {
    speed = 3;
  } else if (keyIsDown(65)) {
    speed = -3;
  } else {
    speed = 0;
  }

  if (keyIsDown(32)) {
    up = up + 0.3;
  }

  if (x > 900) x = 899;
  if (x < 0) x = +1;
  if (y < -30) y = -29;
  if (y > 499) y = 498;
  //alien movement: end
}