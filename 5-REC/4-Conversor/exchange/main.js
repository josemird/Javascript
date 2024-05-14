import './style.css'
import CurrencyAPI from '@everapi/currencyapi-js';
import { currenciesSupported } from './mocks/mockCurrenciesSupported';

const client = new CurrencyAPI('cur_live_zz7lkAzJotNH9cI7Rc6bRBtCE8hrFvJf3caeytWN');
//const responseCurrenciesSupported = await client.currencies();
//--------

//query selectors
const divContainer = document.querySelector('.container')
//create elements & attributes
const divSelectContainer = document.createElement('div');
    divSelectContainer.className = 'select_container';
const selectTagUp = document.createElement('select');
const selectTagDown = document.createElement('select');
//appenchilds
divContainer.appendChild(divSelectContainer);
divSelectContainer.appendChild(selectTagUp);
divSelectContainer.appendChild(selectTagDown);

//* CREAR CAMPOS EN LOS SELECT
const currenciesSupportedResponse = Object.values(currenciesSupported.data) //obtenemos un array de los valores del objeto 'currenciesSupported' -> 'data'

currenciesSupportedResponse.forEach((currency)=>{  //iteramos sobre el array de valores para obtener el nombre de cada moneda y crear un option con ese nombre, y lo añadimos al select
    //console.log(currency.name)
    const option = document.createElement('option');
    selectTagUp.appendChild(option)
    option.value = currency.name;
    option.textContent = currency.name;
});

currenciesSupportedResponse.forEach((currency)=>{  //repetimos el proceso para el segundo select
    //console.log(currency.name)
    const option = document.createElement('option');
    selectTagDown.appendChild(option)
    option.value = currency.name;
    option.textContent = currency.name;
});

//* CREAR BOTON Y EVENTO
const buttonTag = document.createElement('button');
    buttonTag.textContent = 'Dale';
divContainer.appendChild(buttonTag);

buttonTag.addEventListener('click', () => {
    console.log(selectTagUp.value);
    console.log(selectTagDown.value);
    
    //funcion para obtener el codigo de la moneda seleccionada en el select (por su nombre) comparando con el array de monedas soportadas
    const getCurrentCodeByName = (currency) => { 
    return currenciesSupportedResponse.find((data) => {
        if (currency === data.name){
            return data.code;
        }
    });
    }
    getCurrentCodeByName();
        console.log(getCurrentCodeByName(selectTagUp.value).code);
        console.log(getCurrentCodeByName(selectTagDown.value).code);
    
    //funcion que 


});







