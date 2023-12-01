import {Price} from './Classes/Price.js';
import {Product} from './Classes/Product.js';
import {Review} from './Classes/Review.js';

let price = new Price("USD", 339);
let product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.meda-amazoncom/images/l/810DvHOZ9nL—AC_UL320_.jpg"
)
let review = new Review("4.6", 73);
//Recupero el Div del HTML
const container = document.getElementById('container');

//Muestro los Elementos en Parrafos 
const priceElement = document.createElement('p');
priceElement.textContent = `Price: ${price.currency}`;

const productElement = document.createElement('p');
productElement.textContent = `Product: ${product.toString()}`;

const reviewElement = document.createElement('p');
reviewElement.textContent = `Review: ${review.toString()}`;

// Agregar los elementos al Div
container.appendChild(priceElement);
container.appendChild(productElement);
container.appendChild(reviewElement);