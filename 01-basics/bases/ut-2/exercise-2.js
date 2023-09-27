//alert()
let mensaje = "This is an alert message, click me to move on";
let mensaje2 = "Show me in an if you clicked on ok ar false"; 
let mensaje2a = "You click on true, click to move on!!!";
let mensaje2b = "You click on false, click to move on!!!";
let mensaje3 = "Show me in an alert the message typed";


//alert
alert(mensaje);
//confirm
if (confirm(mensaje2)) {
        alert(mensaje2a);
} else {
        alert(mensaje2b);
}
//prompt
let respuesta = prompt(mensaje3);
if (respuesta !== null) {
    alert("You typed Try me!!! click me to move on!!!");
  } else {
    alert(`Try again next time!!! :)`)
  }


