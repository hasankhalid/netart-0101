

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() {
    let startY = window.innerHeight/10;
    let startX = window.innerWidth/1.5;
    resizeCanvas(window.innerWidth, window.innerHeight);

    push();
        rotate(8);
        push();
            for (let x = startX; x < width; x+=20) {
                for (let y = startY; y < height; y+=20) {
                    let mappingVar = x + y;
                    let op = map(mappingVar, startX + startY, width + height, 0, 200);
                    noStroke();
                    fill(255, 255, 255, op);
                    circle(x, y, 15, 15);
                }
            }
        pop();
    pop();

}