import './style.css'

const buttonGenerator =  document.querySelector('button')
  buttonGenerator.disabled = true; //propiedad disables activada por defecto
  buttonGenerator.className = 'button-generator'

const chatgptContainer = document.querySelector('.chatgpt-container');

const createResponseElement = () => {
  const responseContainer = document.createElement('div');
    responseContainer.className = 'response-container';

  chatgptContainer.appendChild(responseContainer);

  const textResponse = document.createElement('textarea');
    textResponse.setAttribute('placeholder','Response');
    textResponse.setAttribute('rows', 5);

  responseContainer.appendChild(textResponse);
};
createResponseElement();





