

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
                    circle(x, y, 15, 15);
                }
            }
        pop();
    pop();

}

class CustomCircle {
    constructor(w, h, x, y) {
        this.x = x; 
        this.y = y; 
        this.w = w; 
        this.h = h;
    }
}