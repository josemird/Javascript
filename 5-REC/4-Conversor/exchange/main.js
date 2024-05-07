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
const select = document.createElement('select');
//appenchilds
divContainer.appendChild(divSelectContainer);
divSelectContainer.appendChild(select);

const currenciesSupportedResponse = Object.values(currenciesSupported.data)
const currenciesSupportedArray = currenciesSupportedResponse.forEach((currency)=>{
    console.log(currency.name)
});
console.log(currenciesSupportedArray);

//todo: crear los option y mostrarlos como select, hay que hacer 2 select, probablemente
//todo:+ haran falta 2 funciones

