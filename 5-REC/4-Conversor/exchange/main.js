import './style.css'
import currencyapi from '@everapi/currencyapi-js';
import { currenciesSupported } from './mocks/mockCurrenciesSupported';
import { converterSupported } from './mocks/mockConverterSupported';


const client = new currencyapi('cur_live_zz7lkAzJotNH9cI7Rc6bRBtCE8hrFvJf3caeytWN');

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

const currenciesSupportedResponse = Object.values(currenciesSupported.data) //obtenemos un array de los valores del objeto 'currenciesSupported' -> 'data'
const converterSupportedResponse = Object.values(converterSupported.data) 

//* CREAR CAMPOS EN LOS SELECT
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

//funcion para obtener el codigo de la moneda seleccionada en el select (por su nombre) comparando con el array de monedas soportadas
const getCurrentCodeByName = (currency) => { 
    return currenciesSupportedResponse.find((data) => 
        currency === data.name
    ).code;
};

//* CREAR BOTON Y EVENTO CLICK
const buttonTag = document.createElement('button');
    buttonTag.textContent = 'Dale';
divContainer.appendChild(buttonTag);

buttonTag.addEventListener('click', async () => {
    //console.log(selectTagUp.value);
    //console.log(selectTagDown.value);
    
    const baseCode = getCurrentCodeByName(selectTagUp.value);
    const targetCode = getCurrentCodeByName(selectTagDown.value);
    console.log(baseCode);
    console.log(targetCode);

    const currencyValue = converterSupportedResponse[0].value
    console.log(currencyValue);

    const spanTag = document.createElement("span");
    divContainer.appendChild(spanTag);
    spanTag.textContent = (`Result: 1 ${baseCode} = ${currencyValue.toFixed(2)} ${targetCode}`);



    
    // const responseConversion = await client.latest({
    //     base_currency: baseCode,
    //     currencies: targetCode
    // });
    // console.log(responseConversion);

});







