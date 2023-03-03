let buttonIsClicked2 = false;
endScreen();

function endScreen() {
  background(73, 17, 225);
  fill(255, 255, 255);

  push();
  scale(5);
  text("Game Over", 80, 30);
  pop();

  push();
  fill(239, 52, 239);
  noStroke();
  rect(480, 200, 150, 50);
  fill(255, 255, 255);
  scale(2);
  text("Play Again", 250, 115);
  pop();

  if (buttonIsClicked2){
    state="start";
  }
}


function draw() {
  if (
    mouseIsPressed &&
    mouseX > 480 &&
    mouseX < 480 + 150 &&
    mouseY &&
    mouseY > 200 &&
    mouseY < 200 + 50
  ) {
    console.log("pressed");
  }
}

function mousePressed2() {
    if (mouseX > 480 &&
    mouseX < 480 + 150 &&
    mouseY &&
    mouseY > 200 &&
    mouseY < 200 + 50) {
    buttonIsClicked2 = true;
    console.log("pressed");
    }
}

