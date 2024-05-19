import { currenciesSupportedResponse, selectTagUp, selectTagDown } from './main';

//* FUNCIONES PARA CREAR LOS CAMPOS EN LOS SELECT
export const selectUpCreation = () => {                     // Función que crea los campos en el select de monedas
    currenciesSupportedResponse.forEach((currency) => {     // Recorremos el array de monedas soportadas
            //console.log(currency.name)
        const option = document.createElement('option'); 
        selectTagUp.appendChild(option);
        option.value = currency.name;           // Asignamos el valor de la moneda
        option.textContent = currency.name;     // Asignamos el texto de la moneda
    });
}
export const selectDownCreation = () => { 
    currenciesSupportedResponse.forEach((currency) => { 
            //console.log(currency.name)
        const option = document.createElement('option');
        selectTagDown.appendChild(option);
        option.value = currency.name;
        option.textContent = currency.name;
    });
};
