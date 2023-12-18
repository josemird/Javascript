import {solicitudHora, solicitudUsuario}  from './apiData.js';
import {Persona} from './Person.js';
import {Tiempo} from './Time.js';


//Etiquetas Recuperadas del HTML
const body = document.querySelector('body');
const containerDiv = document.querySelector('.container');

//Creación de etiquetas
const cardDiv = document.createElement('div'); // <div></div>
  cardDiv.classList.add('card'); // <div class="card"></div>
    const img = document.createElement('img'); // <img></img>
    const spanName = document.createElement('span') // <span></span>
    const spanEmail = document.createElement('span') // <span></span> 
    const spanPhone = document.createElement('span') // <span></span>
    const spanLocation = document.createElement('span') // <span></span>
    const spanCurrentTime = document.createElement('span') // <span></span>
const buttonDiv = document.createElement('div'); // <div></div>
  buttonDiv.classList.add('button'); // <div class="button"></div>
  const button = document.createElement('button'); // <button></button>

//Estructura desde JS a HTML
containerDiv.appendChild(cardDiv); // <div id="container"><div class="card"></div></div>
  cardDiv.appendChild(img); // <div id="container"><div class="card"><img></img></div></div>
    img.src = ("./img/user_nt_found.jpg")
  cardDiv.appendChild(spanName); // <div id="container"><div class="card"><img></img><span></span></div></div>
  cardDiv.appendChild(spanEmail); // <div id="container"><div class="card"><img></img><span></span><span></span></div></div>
  cardDiv.appendChild(spanPhone); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span></div></div>
  cardDiv.appendChild(spanLocation); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span><span></span></div></div>
  cardDiv.appendChild(spanCurrentTime); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span><span></span><span></span></div></div>   
  /* Esta forma es más eficiente en una sola línea, es lo mismo que los apendChild anteriores de arriba
      carDiv.append(img, spanName, spanMail, spanPhone, spanLocation, spanCurrentTime); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span><span></span><span></span></div></div>
    */
body.appendChild(buttonDiv); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span><span></span></div><button></button></div>
buttonDiv.appendChild(button); // <div id="container"><div class="card"><img></img><span></span><span></span><span></span><span></span></div><button></button></div> 


  //Texto de las etiquetas
  spanName.innerHTML = `<br>Nombre: <br>`;
  spanEmail.innerHTML = `Mail: <br>`;
  spanPhone.innerHTML = `Phone: <br>`;
  spanLocation.innerHTML = `Location: <br>`;
  spanCurrentTime.innerHTML = `Current Time: <br>`;
  button.innerHTML = `Generar Usuario <br>`;


  const person = await solicitudUsuario();
  Persona(person);
  const hora = await solicitudHora();
  console.log(Persona(person));
  console.log(Tiempo(hora));
  

  button.addEventListener('click', async function () {

    const person = await solicitudUsuario();
    const hora = await solicitudHora();
    const time = await Tiempo(hora);
    const user = await Persona(person);
    console.log(user);
    console.log(time);

    img.src = `${person.picture.medium}`
    spanName.innerHTML = `<br><strong>Nombre: </strong>${person.name.first} <br>`
    spanEmail.innerHTML = `<strong>Mail: </strong>${person.email} <br>`
    spanPhone.innerHTML = `<strong>Phone: </strong>${person.phone} <br>`
    spanLocation.innerHTML = `<strong>Location: </strong>${person.location.state} <br>`
    spanCurrentTime.innerHTML = `<strong>Current Time: </strong>${hora.hour}:${hora.minute}:${hora.second} <br>`
    button.innerHTML = `Generar Usuario <br>`;
    
});


