const sliderMove = document.querySelector(".sliderMove");// SliderMove del home
const search     = document.querySelector(".search");
const content    = document.querySelector(".search .content");
const inputDate  = document.querySelector(".search input");
const fecha      = new Date();
let flag = true;//variable para altenar la transición del slider del home

/************** Obteniendo Fecha **************/
const year = fecha.getFullYear();
let month  = fecha.getMonth() + 1;
month      = month.toString().length === 1 ? `0${month}`: month;
let day    = fecha.getDate();
day        = day.toString().length === 1 ? `0${day}`: day;

inputDate.value = `${year}-${month}-${day}`;



// Función para mover el slider del home
function move(n) {
    sliderMove.style.transform = `translate(calc(-50*${n}%))`
}



setInterval(()=>{
    if( flag == true ){ move(1);flag = !flag; } 
    else { move(0); flag = !flag; }
}
,5000)

/************ Search *************/

document.addEventListener("scroll",()=>{
    if( window.innerWidth > 1000 ) {
        if( this.scrollY >= window.innerHeight ){
            search.classList.add("active");
            content.classList.add("active");
        }
        else {
            search.classList.remove("active");
            content.classList.remove("active");
        }
    }
});
