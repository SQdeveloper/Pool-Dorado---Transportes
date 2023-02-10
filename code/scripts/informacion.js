const button = document.querySelectorAll(".politicas button");
const div    = document.querySelectorAll(".lista");
const img    = document.querySelectorAll('.politicas button img');
let value  = true;

button.forEach((but, index)=>{
    but.addEventListener("click", ()=>{
        div[index].classList.toggle("active");
        if(value) {
            img[index].src = '/rg/svg/caret-down-fill.svg';
            value = !value;
        } 
        else {
            img[index].src = '/rg/svg/caret-right-fill.svg';
            value = !value;
            console.log("enr")
        }
    });
});
