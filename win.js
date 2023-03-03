function winScreen() {
  background(73, 17, 225);
  fill(255, 255, 255);

  push();
  scale(5);
  text("Winner, winner, chicken dinner!", 30, 30);
  pop();

  push();
  fill(239, 52, 239);
  noStroke();
  rect(480, 200, 150, 50);
  fill(255, 255, 255);
  scale(2);
  text("Play Again", 250, 115);
  pop();
}

winScreen();