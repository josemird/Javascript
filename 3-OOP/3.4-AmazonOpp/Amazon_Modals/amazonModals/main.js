// main.js
import { Price } from './Classes/Price.js';
import { Product } from './Classes/Product.js';
import { Review } from './Classes/Review.js';

document.addEventListener('DOMContentLoaded', function () {
  let price = new Price("USD", 339);
  let product = new Product(
    "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
    "https://m.media-amazon.com/images/I/716Wljx-4hL._AC_SL1500_.jpg"
  );
  let review = new Review("4.6", 73);

  // Recupero el Div del HTML
  const container = document.getElementById('container');

  let modalCreated = false; 

  if (container) {
    const image = document.createElement('img');
    image.src = product.url;
    image.alt = 'Iphone SE Image';
    container.appendChild(image);

    // Agregar evento al pasar el ratón
    image.addEventListener('mouseover', function () {
      if (!modalCreated) {
        showModal();
        modalCreated = true;
      }
    });

    // Agregar evento al salir del ratón
    image.addEventListener('mouseout', function () {
      hideModal();
    });

  } else {
    console.error('El elemento con ID "container" no se encontró en el DOM.');
  }
   

  function showModal(){
    //Elementos del Modal
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.id = 'modal-content';
    modal.appendChild(modalContent);

    //Contenido del Modal
    const title = document.createElement('h3');
    title.textContent = `${product.title}\n`;
    container.appendChild(title);
  
    const currency = document.createElement('div');
    currency.textContent = `Price= ${price.current_price} ${price.currency}\n`;
    container.appendChild(currency);
  
    const rating = document.createElement('div');
    rating.textContent = `Rating= ${review.rating}\n`;
    container.appendChild(rating);
  
    const reviewElement = document.createElement('div');
    reviewElement.textContent = `Total Reviews= ${review.total_reviews}\n`;
    container.appendChild(reviewElement);
  }
  

  function hideModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');

    if (overlay && modal) {
      overlay.parentNode.removeChild(overlay);
      modal.parentNode.removeChild(modal);
      modalCreated = false;
    }
  }


});
