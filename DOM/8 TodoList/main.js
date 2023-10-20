const input = document.querySelector("#add");
const ul = document.querySelector("#tareas");

function showContent(){
ul = input.textContent;

}
input.addEventListener("click", showContent);


