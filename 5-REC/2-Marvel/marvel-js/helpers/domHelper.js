export const createDataListTag = (inputTag) => {
    const dataListTag = document.createElement("datalist");
    dataListTag.setAttribute("id", "characters");
    inputTag.appendChild(dataListTag);
    return dataListTag;
}

export const  createOptionTag = (dataListTag, characters) => {
    const optionTag = document.createElement("option");
    optionTag.value = characters.name; //es lo mismo que: optionTag.setAttribute("value", characters.name);
    optionTag.setAttribute("id", characters.id);
    dataListTag.appendChild(optionTag)
    return optionTag;
}

//toDo generar con js en el dom helper una funcion createCard para generarlo
/*  div -- este div ya esta creado por lo que tan solo hay que recuperarlo .container-card-character
        img
        label (name)
        p (descripcion) 
*/
export const createCard = (divCard, character) => {
    divCard.textContent = "";    
    let imgTag = document.createElement('img');
        imgTag.setAttribute(".container-img")
    let nameTag = document.createElement('label');
        imgTag.setAttribute(".name")
    let descriptionTag = document.createElement('p');
        imgTag.setAttribute(".description")
    container.appendChild(imgTag);
    container.appendChild(nameTag);
    container.appendChild(descriptionTag);
}
