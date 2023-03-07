function setup() {
  createCanvas(1000, 600);

  //Code for stars and obstacles needed to be placed here for it to work
  for (let i = 0; i < 250; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();
    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
  }

  for (let i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * w + 40);
    let y = Math.floor(Math.random() * h + 40);
    obstacles.push(new obstacle(x, y, 40));
  }
}

let buttonIsClicked = false;
let state = "start";
let x = 0;
let y = 0;
let leftRight = 0;
let maxVelocity = 0.5;
let down = 1;
let up = 0.3;
let isGameActive = true;

const width = 1000;
const height = 600;

const w = 900;
const h = 400;

let starX = [];
let starY = [];
let starAlpha = [];

//Following lines of code concerning "Obstacle Collision" was added by courtesy of Oscar Nordström 02/03-23
let obstacles = [];
let playerOffsetX = 200 * 0.4;
let playerOffsetY = 195 * 0.4;

//OBSTACLES
class obstacle {
  constructor(x, y, w) {
    this.x = x + 50;
    this.y = y + 50;
    this.w = w;
    this.r = w / 2;
  }
}

//START SCREEN
function startScreen() {
  background(56, 13, 176);

  //alien: start
  push();
  translate(20, 20);
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
  //alien: end

  //title
  push();
  fill(255, 255, 255);
  scale(2);
  text("Space Adventure", 65, 50);
  text("Tutorial:", 315, 50);
  pop();

  //instructions
  text(
    "Try to land Lars the Alien safely onto the surface of the planet, Proxima Pink.",
    450,
    200
  );
  text(
    "But beware of the Reds and the strong gravitational pull of Proxima Pink trying to block his path!",
    450,
    240
  );
  text(
    "You move from side to side by using the keys A & D, and spacebar to adjust your fuel.",
    450,
    280
  );
  text("Goodluck out there!", 625, 320);

  //play button
  fill(239, 52, 239);
  noStroke();
  rect(145, 300, 150, 50);
  fill(255, 255, 255);
  text("Play Game!", 187, 330);

  if (buttonIsClicked) {
    gameScreen();
    isGameActive = true;
  }
}

function mousePressed() {
  if (mouseX > 145 && mouseX < 145 + 150 && mouseY > 300 && mouseY < 300 + 50) {
    state = "game";
  }
}

//GAME OVER SCREEN
function endScreen() {
  background(73, 17, 225);
  fill(255, 255, 255);

  push();
  scale(5);
  text("Game Over", 65, 30);
  pop();

  push();
  fill(239, 52, 239);
  noStroke();
  rect(410, 200, 150, 50);
  fill(255, 255, 255);
  scale(2);
  text("Play Again", 215, 115);
  pop();

  if (buttonIsClicked) {
    gameScreen();
    isGameActive = true;
  }
}

//WINNER SCREEN
function winScreen() {
  background(73, 17, 225);
  fill(255, 255, 255);

  push();
  scale(5);
  text("Winner, winner, chicken dinner!", 18, 30);
  pop();

  push();
  fill(239, 52, 239);
  noStroke();
  rect(410, 200, 150, 50);
  fill(255, 255, 255);
  scale(2);
  text("Play Again", 215, 115);
  pop();
}

//GAME: START
function gameScreen() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starX[index], starY[index], 3);
  }

  for (let index in obstacles) {
    fill(164, 9, 9);
    ellipse(obstacles[index].x, obstacles[index].y, obstacles[index].w);
  }

  push();
  fill(202, 57, 178);
  rect(0, 550, 2550, 200);
  pop();
}

//THE CHARACTER
function alien() {
  push();
  fill(202, 57, 178);
  rect(0, 550, 2550, 200);
  pop();

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

  //ALIEN MOVEMENT: START
  if (isGameActive) {
    y = y + up;
    up = up + 0.1;
    x = x + leftRight;
    y = y + down;
  }

  if (keyIsDown(68)) {
    leftRight = 3;
  } else if (keyIsDown(65)) {
    leftRight = -3;
  } else {
    leftRight = 0;
  }
  if (keyIsDown(32)) {
    up = up - 0.3;
  }

  if (y >= 455 && up >= maxVelocity) {
    console.log("game over");
    isGameActive = false;
    endScreen();
  }

  if (y >= 455 && up <= maxVelocity) {
    console.log("win");
    isGameActive = false;
    winScreen();
  }

  //alien cannot pass these points on the screen
  if (x > 900) x = 899;
  if (x < 0) x = +1;
  if (y < -30) y = -29;
  //ALIEN MOVEMENT: END
}

//For game to start over when "play again" is pressed
function reset() {
  isGameActive = true;
  x = 0;
  y = 0;
  speed = 0;
  maxVelocity = 3;
  down = 0.7;
  up = 0.3;
}

//Added by courtesy of Oscar Nordström
//checks if player is within obstacles radius
function checkCollisions() {
  for (let index in obstacles) {
    if (
      dist(
        x + playerOffsetX,
        y + playerOffsetY,
        obstacles[index].x,
        obstacles[index].y
      ) <
      obstacles[index].r + 25
    ) {
      state = "end";
      isGameActive = false;
    }
  }
}

function draw() {
  if (
    mouseIsPressed &&
    mouseX > 410 &&
    mouseX < 410 + 150 &&
    mouseY &&
    mouseY > 200 &&
    mouseY < 200 + 50
  ) {
    console.log("pressed");
    gameScreen();
    reset();
    state = "game";
  }

  if (state === "start") {
    startScreen();
  } else if (state === "end") {
    endScreen();
  } else if (state === "game") {
    checkCollisions();
    gameScreen();
    alien();
  } else if (state === "win") {
    winScreen();
  }
}
