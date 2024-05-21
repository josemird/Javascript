//* FUNCIONES PARA CREAR LOS CAMPOS EN LOS SELECT

export const selectCreation = (currenciesSupportedResponse, select) => { 
    currenciesSupportedResponse.forEach((currency) => { 
            //console.log(currency.name)
        const option = document.createElement('option');
        select.appendChild(option);
        option.value = currency.name;
        option.textContent = currency.name;
    });
};



