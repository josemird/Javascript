// main.js
import { Price } from './Classes/Price.js';
import { Product } from './Classes/Product.js';
import { Review } from './Classes/Review.js';

document.addEventListener('DOMContentLoaded', function () {
  let price = new Price("USD", 339);
  let product = new Product(
    "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
    "https://www.amazon.com/dp/B087623TMW",
    "https://m.meda-amazoncom/images/l/810DvHOZ9nL—AC_UL320_.jpg"
  );
  let review = new Review("4.6", 73);

  // Recupero el Div del HTML
  const container = document.getElementById('container');

  if (container) {
    // Muestro los elementos en Párrafos
  
    const title = document.createElement('div');
    title.textContent = `nameProduct= ${product.title}\n`;
    container.appendChild(title);
  
    const url = document.createElement('div');
    url.textContent = `urlProduct= ${product.url}\n`;
    container.appendChild(url);
  
    const thumbnail = document.createElement('div');
    thumbnail.textContent = `urlImage= ${product.thumbnail}\n`;
    container.appendChild(thumbnail);
  
    const priceElement = document.createElement('div');
    priceElement.textContent = `score= ${price.current_price}\n`;
    container.appendChild(priceElement);
  
    const currency = document.createElement('div');
    currency.textContent = `Price= ${price.current_price} ${price.currency}\n`;
    container.appendChild(currency);
  
    const rating = document.createElement('div');
    rating.textContent = `rating= ${review.rating}\n`;
    container.appendChild(rating);
  
    const reviewElement = document.createElement('div');
    reviewElement.textContent = `totalReviews= ${review.total_reviews}\n`;
    container.appendChild(reviewElement);
    
  } else {
    console.error('El elemento con ID "container" no se encontró en el DOM.');
  }
});
