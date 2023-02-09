const sliderMoveA = document.querySelector(".sliderMoveA");
const arrowLeft   = document.querySelector(".button-arrow-left");
const arrowRight  = document.querySelector(".button-arrow-right");
let number = 0;

function activeStyle(arrow) {
    arrow.style.opacity= 1;
    arrow.style.zIndex = 1;
}

function inactiveStyle(arrow) {
    arrow.style.opacity= 0;
    arrow.style.zIndex = -1;
}

function right() {
    number = 1;
    inactiveStyle(arrowRight);
    activeStyle(arrowLeft);
    sliderMoveA.style.transform = `translate(calc(-50*${number}%))`;
}

function left() {
    number = 0;
    activeStyle(arrowRight);
    inactiveStyle(arrowLeft);
    sliderMoveA.style.transform = `translate(calc(-50*${number}%))`
}

arrowLeft.addEventListener("click", ()=>{
    left();
});

arrowRight.addEventListener("click", ()=>{
    right();
});