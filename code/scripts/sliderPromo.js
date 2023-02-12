const sliderMoveA = document.querySelector(".sliderMoveA");
const arrowLeft   = document.querySelector(".button-arrow-left");
const arrowRight  = document.querySelector(".button-arrow-right");
let number = 0, value = 50, limitInf = 0, limitSup = 1;

function activeStyle(arrow) {
    arrow.style.opacity= 1;
    arrow.style.zIndex = 1;
}

function inactiveStyle(arrow) {
    arrow.style.opacity= 0;
    arrow.style.zIndex = -1;
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth <= 600) {
        value = 25;
        limitSup = 3;
    }
    else {
        limitSup = 1;
        value = 50;
    }
});

function right() {
    number++;
    if(number === limitSup){
        inactiveStyle(arrowRight);
        activeStyle(arrowLeft);
    }
    sliderMoveA.style.transform = `translate(calc(-${value*number}%))`;
}

function left() {
    number--;
    if(number === limitInf){
        activeStyle(arrowRight);
        inactiveStyle(arrowLeft);
    }
    sliderMoveA.style.transform = `translate(calc(-${value*number}%))`
}

arrowLeft.addEventListener("click", ()=>{
    left();
});

arrowRight.addEventListener("click", ()=>{
    right();
});