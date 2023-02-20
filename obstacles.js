function obstacle(x, y){
    push();
    translate(x, y);

    fill(164, 9, 9);

    push();
    translate(110, 55);
    rotate(0.6);
    triangle(20, -20, 10, 20, 30, 20);
    pop();

    push();
    translate(145, 115);
    rotate(2.3);
    triangle(20, -20, 10, 20, 30, 20);
    pop();

    push();
    translate(83, 145);
    rotate(-2.4);
    triangle(20, -20, 10, 20, 30, 20);
    pop();

    push();
    translate(55, 75);
    rotate(-0.7);
    triangle(20, -20, 10, 20, 30, 20);
    pop();

    push();
    translate(80, 55);
    triangle(20, -10, 10, 20, 30, 20);
    pop();

    push();
    translate(146, 80);
    rotate(1.6);
    triangle(20, -10, 10, 20, 30, 20);
    pop();

    push();
    translate(53, 119);
    rotate(-1.6);
    triangle(20, -10, 10, 20, 30, 20);
    pop();

    push();
    translate(120, 145);
    rotate(3.15);
    triangle(20, -10, 10, 20, 30, 20);
    pop();

    //body of meteor
    ellipse(100, 100, 60, 60);
   
}

obstacle();

// function groundObstacle(){
//     push();
//     translate(100, 100);
//     fill(195, 91, 0);
//     triangle(200, -30, 100, 200, 300, 200);
// }


let randomNumber = Math.random();
randomNumber = randomNumber * 4;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

//  function draw() {
//    let x = Math.random() * width;
//     x = Math.floor(x);

//    let y = Math.random() * height;
//     y = Math.floor(y);


//     obstacle(x, y);
//  } 

