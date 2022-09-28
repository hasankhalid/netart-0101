let panda_container;
let face; 
let leftEye;
let rightEye;
let leftEyeBall;
let rightEyeBall;
let nose; 
let leftEar;
let rightEar;
let shadow;

let backgroundArray = ['#FFEE58', '#4FC3F7', '#9FA8DA', '#FFA726', '#F06292', '#80CBC4', '#E0E0E0', '#BCAAA4', '#FF7043'];
let currentBackground = '#FFEE58';

let animating = false;

function panda() {
    console.log("lets make a panda");
    panda_container = document.getElementById('panda');
    face = appendElement(panda_container, 'div', ['panda_face'], "panda_face");
    leftEye = appendElement(face, 'div', ['panda_eye', 'left_eye'], "left_eye");
    rightEye = appendElement(face, 'div', ['panda_eye', 'right_eye'], "right_eye");
    leftEyeBall = appendElement(leftEye, 'div', ['eye_ball', 'left_eye_ball'], "left_eye_ball");
    rightEyeBall = appendElement(rightEye, 'div', ['eye_ball', 'right_eye_ball'], "right_eye_ball");
    nose = appendElement(face, 'div', ['panda_nose']);
    leftEar = appendElement(panda_container, 'div', ['panda_ear', 'left_ear'], "left_ear");
    rightEar = appendElement(panda_container, 'div', ['panda_ear', 'right_ear'], "right_ear");
    shadow = appendElement(panda_container, 'div', ['shadow'], "shadow");

    panda_container.addEventListener("animationend", function() {
        panda_container.classList.remove('panda_animate');
    });
}

function appendElement(parent_element, element_type, classList, ID) {
    let append = document.createElement(element_type);
    let returnMe = parent_element.appendChild(append);
    if (classList && classList.length > 0) {
        classList.forEach((el_class) => {
            returnMe.classList.add(el_class);
        });
    }
    if (ID) {
        returnMe.setAttribute("id", ID);
    }
    return returnMe;
}

function activateJumps() {
    document.getElementById('jump').addEventListener("click", pandaJump);
}

function pandaJump() {
    if (!animating) {
        console.log('animating');
        panda_container.classList.add('panda_animate');
        let circle = document.getElementById('circle');
        let background = pickBackground();
        animating = true;
        circle.style.background = background;
        circle.classList.add('animate_circle');
        circle.addEventListener('animationend', function() {
            document.getElementById('main_container').style.background = background;
            circle.classList.remove('animate_circle');
            animating = false;
        });
    }
}

function pickBackground() {
    let index = randomInt(0, backgroundArray.length - 1);
    console.log(index);
    let curr_bg = backgroundArray[index];
    if (currentBackground === curr_bg) {
        pickBackground();
    }
    else {
        return curr_bg;
    } 
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

