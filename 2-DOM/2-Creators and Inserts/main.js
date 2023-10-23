const img = document.createElement("img");
img.src = './img/img_la.jpg';

let h1 = document.createElement("h1");
let p1 = document.createElement("p");
let p2 = document.createElement("p");


h1.append("This is a Heading");
p1.append("This is a paragraph");
p2.append("This is another paragraph");

document.body.appendChild(img);
document.body.append(h1);
document.body.append(p1);
document.body.append(p2);

/* INTENTAR ESTE METODO QUE SALGA IGUAL 
QUE EL ANTERIOR Y FUNCIONE

const body = document.querySelector("body")
const h1 = document.createElement("h1")

document.getElementById("h1").textcontent = "This is a Heading";
body.append("h1");*/ 