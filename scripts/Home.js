const sliderMove = document.querySelector(".sliderMove");// SliderMove del home
let flag = true;//variable para altenar la transición del slider del home

// Función para mover el slider del home
function move(n) {
    sliderMove.style.transform = `translate(calc(-50*${n}%))`
}

setInterval(()=>{
    if( flag == true ){ move(1);flag = !flag; } 
    else { move(0); flag = !flag; }
}
,5000)