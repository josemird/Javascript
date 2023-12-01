import * as Car from "./Car.js";
import * as mock from "./mockData.js";

let carsArray = await Car.carToClass(mock.cars);
let carsArray2010 = await Car.carFilter(carsArray);

console.log(carsArray2010)

let divContainer = document.getElementsByClassName("container")[0];

carsArray2010.forEach(car => {
    let div = document.createElement("div");
    divContainer.appendChild(div);
    let modelMake = document.createElement("p");
    let typeYear = document.createElement("p");
    div.appendChild(modelMake);
    div.appendChild(typeYear);
    modelMake.textContent = "Model: " + car.model + ", Make: " + car.make;
    typeYear.textContent = "Type: " + car.type + ", Year: " + car.year;
});