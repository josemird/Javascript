import './style.css'
import currencyapi from '@everapi/currencyapi-js';
import { currenciesSupported } from './mocks/mockCurrenciesSupported';
import { converterSupported } from './mocks/mockConverterSupported';
import { selectUpCreation, selectDownCreation } from './domHelper';
import { getCurrentCodeByName } from './domHelper';

//
const client = new currencyapi('cur_live_zz7lkAzJotNH9cI7Rc6bRBtCE8hrFvJf3caeytWN'); //Instancia de la clase currencyapi con la API KEY 

//*BODY DIV CONTAINER
const divContainer = document.querySelector('.container')

//*SELECT DIV CONTAINER
const divSelectContainer = document.createElement('div');
    divSelectContainer.className = 'select_container';

//*SELECT
export const selectTagUp = document.createElement('select');
export const selectTagDown = document.createElement('select');

//*APPENCHILDS
divContainer.appendChild(divSelectContainer);
divSelectContainer.appendChild(selectTagUp);
divSelectContainer.appendChild(selectTagDown);

//*ARRAYS DE MONEDAS SOPORTADAS
export const currenciesSupportedResponse = Object.values(currenciesSupported.data)  //obtenemos un array de los valores del objeto 'currenciesSupported' -> 'data'
const converterSupportedResponse = Object.values(converterSupported.data)           //obtenemos un array de los valores del objeto 'converterSupported' -> 'data'

//* CREAR CAMPOS EN LOS SELECT
selectUpCreation();
selectDownCreation();

//* OBTENER CODIGO MONEDA SELECCIONADA
getCurrentCodeByName();

//* CREAR BOTON
const buttonTag = document.createElement('button'); 
    buttonTag.textContent = 'Dale';
divContainer.appendChild(buttonTag);               

//* EVENTO CLICK BOTON
buttonTag.addEventListener('click', async () => {
    const baseCode = getCurrentCodeByName(selectTagUp.value); //Obtenemos el código de la moneda base seleccionada en el select
    const targetCode = getCurrentCodeByName(selectTagDown.value); //Obtenemos el código de la moneda target seleccionada en el select
        console.log(baseCode);
        console.log(targetCode);
        
    const currencyValue = converterSupportedResponse[0].value //obtenemos el valor de la moneda
        console.log(currencyValue); 

    //CREAR SPAN CON RESULTADO DE CONVERSIÓN DE MONEDA
    const spanTag = document.createElement("span"); 
    divContainer.appendChild(spanTag);
    spanTag.textContent = (`Result: 1 ${baseCode} = ${currencyValue.toFixed(2)} ${targetCode}`); //Mostramos el resultado de la conversión con 2 decimales
});

    // const responseConversion = await client.latest({
    //     base_currency: baseCode,
    //     currencies: targetCode
    // });
    // console.log(responseConversion);








