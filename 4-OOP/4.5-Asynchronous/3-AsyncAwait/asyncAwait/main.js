import * as mockdata from "./mockData.js";
import *  as Car from "./Car.js";

let carArray = await Car.mapToClassesPromise(mockdata.cars);
console.log(carArray);
let array2010 = await Car.Filtercar(carArray)
console.log(array2010);


const Titulo=document.createElement('h1');
Titulo.textContent="Marca de coches desde el 2010";

const containerdiv = document.createElement('div');
containerdiv.classList.add('container');
console.log(containerdiv);

const body=document.querySelector('body');

array2010.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.innerHTML = `
    <p>Make: ${car.getmake}<br> Model: ${car.getmodel}</p>
    <p>Year: ${car.getyear}<br> Type:${car.getype}</p>`;
    containerdiv.appendChild(carDiv);
});

body.appendChild(Titulo)
body.appendChild(containerdiv);
console.log(containerdiv);