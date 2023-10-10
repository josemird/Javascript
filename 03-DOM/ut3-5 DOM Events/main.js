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
function action3(){
    /* CSSContainerRule class="btn btn-danger" */
}
button[3].addEventListener("mouseenter", action3);
