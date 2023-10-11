/*CONSTAINTS*/
const button = document.querySelectorAll("button");


/*BUTTON PRIMARY*/
function action(){
    alert("Event Click");
};
button[0].addEventListener("click", action);


/*BUTTON SECUNDARY*/
function action1(){
    alert("Mouse Enter Event");
}
button[1].addEventListener("mouseenter", action1);


/*BUTTON SUCESS*/
function action2(){
    alert("Mouse Leave Event");
}
button[2].addEventListener("mouseleave", action2);


/*BUTTON DANGER*/
function action3a() {
    button[3].classList.remove("btn-danger"); 
    button[3].classList.add("btn-warning");
}  
function action3b(){
    button[3].classList.remove("btn-warning");
    button[3].classList.add("btn-danger");
}
button[3].addEventListener("mouseenter", action3a);
button[3].addEventListener("mouseleave", action3b);


/*BUTTON DANGER*/
function action4a() {
    button[4].classList.remove("btn-warning");
    button[4].classList.add("btn-danger");
}  
function action4b(){
    button[4].classList.remove("btn-danger"); 
    button[4].classList.add("btn-warning");
}
button[4].addEventListener("mouseenter", action4a);
button[4].addEventListener("mouseleave", action4b);


/*BUTTON INFO*/
function action5(){
    document.body.style.backgroundColor = "red";
}
button[5].addEventListener("click", action5);


/*BUTTON LIGHT*/
function action6(){
    document.body.style.backgroundColor = "white";
}
button[6].addEventListener("click", action6);


/*BUTTON DARK*/
function action7(){
    button.forEach(button => {
        button.classList.remove("btn");
        button.classList.add("btn", "btn-dark");
    });
}
button[7].addEventListener("click", action7);


/*RESET*/
function reset(){
    button[0].classList.remove("btn", "btn-dark");
    button[0].classList.add("btn", "btn-primary");
    button[1].classList.remove("btn", "btn-dark");
    button[1].classList.add("btn", "btn-secundary");
    button[2].classList.remove("btn", "btn-dark");
    button[2].classList.add("btn", "btn-sucess");
    button[3].classList.remove("btn", "btn-dark");
    button[3].classList.add("btn", "btn-danger");
    button[4].classList.remove("btn", "btn-dark");
    button[4].classList.add("btn", "btn-warning");
    button[5].classList.remove("btn", "btn-dark");
    button[5].classList.add("btn", "btn-info");
    button[6].classList.remove("btn", "btn-dark");
    button[6].classList.add("btn", "btn-light");
    button[7].classList.remove("btn", "btn-dark");
    button[7].classList.add("btn", "btn-dark");
}
document.addEventListener("dblclick", reset);