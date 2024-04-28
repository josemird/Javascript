import { urlApiChat, getOptions} from './api';
import './style.css'

const chatgptContainer = document.querySelector('.chatgpt-container');
const textQuestion = document.querySelector('textarea')
  textQuestion.className = 'text-question';
const buttonGenerator =  document.querySelector('button')
  buttonGenerator.disabled = true; //disable property: active by default
  buttonGenerator.className = 'button-generator'


//*RESPONSE ELEMENT CREATION
const createResponseElement = () => {
  const responseContainer = document.createElement('div');
    responseContainer.className = 'response-container';

  chatgptContainer.appendChild(responseContainer);

  const textResponse = document.createElement('textarea'); //response text
    textResponse.className = 'text-response';
    textResponse.setAttribute('placeholder','Response');
    textResponse.setAttribute('rows', 5);

  responseContainer.appendChild(textResponse);

  //*BOOTSTRAP'S ICONS
  const iconsContainer = document.createElement('div');
  iconsContainer.className = 'icons-container';
  responseContainer.appendChild(iconsContainer);

  const icon = document.createElement('i');
  icon.className = "bi bi-terminal i-clear";
  const iconPlus = document.createElement('i');
  iconPlus.className = "bi bi-terminal-plus i-add";
  const iconDash = document.createElement('i');
  iconDash.className = "bi bi-terminal-dash i-delete";

  iconsContainer.appendChild(icon);
  iconsContainer.appendChild(iconPlus);
  iconsContainer.appendChild(iconDash);
};
createResponseElement();


//*BUTTON ACTIVE EVENT
textQuestion.addEventListener('input', () => {
  (textQuestion.value === "" || textQuestion.value.trim().length === 0)
    ? (buttonGenerator.disabled = true)
    : (buttonGenerator.disabled = false);
})

//*API PROMPT DATA EVENT (BUTTON)
buttonGenerator.addEventListener('click', async() => {
  const response = await fetch(urlApiChat, getOptions(textQuestion.value));
  const data = await response.json();
  const dataResult = data.choices[0].message.content;
  //console.log(dataResult);
  const textResponse = document.querySelector('.text-response');
  textResponse.value = ''
  //textResponse.value = dataResult; // without animation typing effect
  let letters = 0; 
  const typing = setInterval(() => {
    textResponse.value += dataResult[letters];
    letters++;
    if (letters >= dataResult.length) {clearInterval(typing)}
  }, 33); //* with animation typing effect
  
});








