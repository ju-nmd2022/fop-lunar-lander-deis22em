const w = 800;
const h = 400;

let obstacleX = [];
let obstacleY = [];

for (let i = 0; i < 6; i++) {
  let x = Math.floor(Math.random() * w + 40);
  let y = Math.floor(Math.random() * h + 40);
  obstacleX.push(x);
  obstacleY.push(y);
}

function draw() {
  for (let index in obstacleX) {
    fill(164, 9, 9);

    //body of meteor
    ellipse(obstacleX[index], obstacleY[index], 40);
  }
}
