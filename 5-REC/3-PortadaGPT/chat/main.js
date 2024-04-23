import { urlApiChat, getOptions} from './api';
import './style.css'

const buttonGenerator =  document.querySelector('button')
const chatgptContainer = document.querySelector('.chatgpt-container');
const textQuestion = document.querySelector('textarea')
  buttonGenerator.disabled = true; //propiedad disables activada por defecto
  buttonGenerator.className = 'button-generator'


//RESPONSE ELEMENT CREATION
const createResponseElement = () => {
  const responseContainer = document.createElement('div');
    responseContainer.className = 'response-container';

  chatgptContainer.appendChild(responseContainer);

  const textResponse = document.createElement('textarea'); //texto respuesta
    textResponse.setAttribute('placeholder','Response');
    textResponse.setAttribute('rows', 5);

  responseContainer.appendChild(textResponse);

  //todo: añadir los botones de bootstrap aqui
  //Iconos Bootstrap
  let icon = document.createElement('i');
    //https://icons.getbootstrap.com/icons/terminal/
  let iconPlus = document.createElement('i');
    //https://icons.getbootstrap.com/icons/terminal-plus/
  let iconLess = document.createElement('i');
    //https://icons.getbootstrap.com/icons/terminal-dash/

  textResponse.appendChild(icon);
  textResponse.appendChild(iconPlus);
  textResponse.appendChild(iconLess);
};
createResponseElement();


//BUTTON ACTIVE EVENT
textQuestion.addEventListener('input', () => {
  (textQuestion.value === "" || textQuestion.value.trim().length === 0)
    ? (buttonGenerator.disabled = true)
    : (buttonGenerator.disabled = false);
})

//DATOS API PROMPT
buttonGenerator.addEventListener('click', async() => {
  const response = await fetch(urlApiChat, getOptions(textQuestion.value));
  const data = await response.json();
  const dataResult = data.choices[0].message.content;
  console.log(dataResult);
})








