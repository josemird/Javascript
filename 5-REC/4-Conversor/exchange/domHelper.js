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


//* FUNCION OBTENER CODIGO MONEDA ESCOGIDA EN EL SELECT (POR NOMBRE) COMPARANDO UN ARRAY DE MONEDAS SOPORTADAS
export const getCurrentCodeByName = (currency) => { // Función que recibe el nombre de la moneda y retorna el código de la moneda
    return currenciesSupportedResponse.find(        // Buscamos la moneda en el array de monedas soportadas
        (data) => currency === data.name            // Comparamos el nombre de la moneda con el nombre de la moneda en el array
    ).code;                                         // Retornamos el código de la moneda
};

