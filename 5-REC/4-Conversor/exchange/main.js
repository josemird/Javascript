import './style.css'
import currencyapi from '@everapi/currencyapi-js';
import { converterSupported } from './mocks/mockConverterSupported';
import { selectCreation } from './domHelper';


//*CREACION Y COMPOSICION DE ELEMENTOS 
//BODY DIV CONTAINER
const divContainer = document.querySelector('.container')
const body = document.querySelector('body')

//SELECT DIV CONTAINER
const divSelectContainer = document.createElement('div');
    divSelectContainer.className = 'select_container';

//SELECT
export const selectTagUp = document.createElement('select');
export const selectTagDown = document.createElement('select');

// BOTON
const buttonTag = document.createElement('button'); 
    buttonTag.textContent = 'Dale';

//SPAN RESULT
const spanTagResult = document.createElement("span"); 

//FLAGS DIV CONTAINER
const containerFlagsUp = document.createElement('div')
const containerFlagsDown = document.createElement('div')

//APPENCHILDS
divContainer.appendChild(divSelectContainer);
divSelectContainer.appendChild(selectTagUp);
divSelectContainer.appendChild(selectTagDown);
divContainer.appendChild(buttonTag);


//*INSTANCIA API
const client = new currencyapi('cur_live_zz7lkAzJotNH9cI7Rc6bRBtCE8hrFvJf3caeytWN'); //Instancia de la clase currencyapi con la API KEY 

//*FUNCIONALIDADES Y FUNCIONES
let currenciesSupportedArray = []
const converterSupportedResponse = Object.values(converterSupported.data)  //obtenemos un array de los valores del objeto 'converterSupported' -> 'data'

const init = async () => {
    const currenciesSupportedResponse = await client.currencies() 
    currenciesSupportedArray = Object.values(currenciesSupportedResponse.data);

    selectCreation(currenciesSupportedArray, selectTagUp);
    selectCreation(currenciesSupportedArray, selectTagDown);
}
// FUNCIONES OBTENER CODIGO MONEDA, COUNTRIES POR MONEDA SELECT Y BANDERAS
const getCurrentCodeByName = (currency) => {    // Función que recibe el nombre de la moneda y retorna el código de la moneda
    return currenciesSupportedArray.find(       // Buscamos la moneda en el array de monedas soportadas
        (data) => currency === data.name        // Comparamos el nombre de la moneda con el nombre de la moneda en el array
    ).code;                                     // Retornamos el código de la moneda
};

const getCurrentCountriesByName = (currency) => {  //TRAER DATOS 'COUNTRIES' DE DATA SEGUN LA MONEDA ELEGITA EN BASE Y TARGET
    return currenciesSupportedArray.find(       
        (data) => currency === data.name            
    ).countries;                                         
};

const getFlags = (containerFlags, countries) => {  //PROMESA BANDERAS
    return new Promise((resolve, reject) => {
        if (countries === null || countries === undefined || countries.lenght <= 0){
            reject("Error")
        } else {
            containerFlags.innerHTML = '';
            containerFlags.className = 'container_flags'
            countries.forEach(country => {
                const img = document.createElement("img");
                img.src = `https://flagsapi.com/${country}/flat/32.png`
                containerFlags.appendChild(img)
            })
            resolve(containerFlags);
        }
    })
};

//* INICIALIZACIÓN INIT
init();

//*EVENTO CLICK BOTON
buttonTag.addEventListener('click', async () => {
    //VALOR MONEDA
    const currencyValue = converterSupportedResponse[0].value //obtenemos el valor de la moneda
    console.log(currencyValue); 

    //CODIGOS MONEDAS
    const baseCode = getCurrentCodeByName(selectTagUp.value);     //Obtenemos el código de la moneda base seleccionada en el select
    const targetCode = getCurrentCodeByName(selectTagDown.value); //Obtenemos el código de la moneda target seleccionada en el select
        console.log(baseCode);
        console.log(targetCode);

    //COUNTRIES MONEDAS
    const baseCountries = getCurrentCountriesByName(selectTagUp.value)      //Obtenemos los countries de la moneda base seleccionada en el select
    const targetCountries = getCurrentCountriesByName(selectTagDown.value)  //Obtenemos los countries de la moneda base seleccionada en el select
        console.log(baseCountries);
        console.log(targetCountries);
     
    //SPAN CON RESULTADO DE CONVERSIÓN DE MONEDA
    divContainer.appendChild(spanTagResult);
    spanTagResult.textContent = (`Result: 1 ${baseCode} = ${currencyValue.toFixed(2)} ${targetCode}`); //Mostramos el resultado de la conversión con 2 decimales

    //BANDERAS
    const getFlagsBase = await getFlags(containerFlagsUp, baseCountries);
    const getFlagsTarget = await getFlags(containerFlagsDown, targetCountries);
    body.appendChild(getFlagsBase);
    body.appendChild(getFlagsTarget);
});

// const responseConversion = await client.latest({
//     base_currency: baseCode,
//     currencies: targetCode
// });
// // console.log(responseConversion);














