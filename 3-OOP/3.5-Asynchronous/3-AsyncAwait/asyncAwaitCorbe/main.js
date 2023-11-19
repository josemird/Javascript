import {carArr, sortCars} from './Car.js';
import {cars} from './mockData.js';

let coches = await carArr(cars);
coches = await sortCars(coches);
console.log(coches);

