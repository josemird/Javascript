import "./style.css"; //importacion de archivo css con js
import {url_api_marvel_startNameWith, url_marvel_character} from "./api";
import { createDataListTag, createOptionTag, parserToCharacterClass } from "./helpers/index"; //hace lo mismo que las 2 lineas: // import { createDataListTag, createOptionTag} from "./helpers/domHelper"; import { parserToCharacterClass } from "./helpers/promiseHelper";

const inputTag = document.querySelector("input");
const buttonTag = document.querySelector("button");
let divCard = document.querySelector(".container-card-character");

const dataListTag = createDataListTag(inputTag);

inputTag.addEventListener("keyup", async () => {
    if (inputTag.value !== null && inputTag.value !== undefined && inputTag.value !==""){
        const responseCharacters = await fetch(url_api_marvel_startNameWith + inputTag.value);
        const dataCharacter = await responseCharacters.json();
        //dejamos la lista vacia
        dataListTag.innerHTML = "";
        //filtramos los elementos que vamos escribiendo con la lista de recomendaciones de resultado
        const results = dataCharacter.data.results;
        results.forEach((characters) => {
            createOptionTag(dataListTag, characters);
        });
    }
});

//coger las cards del personaje en el input al pulsar el boton de submit
buttonTag.addEventListener("click", async () => {
    //dejamos la card vacia
    divCard.innerHTML = "";
    //coger el primer personaje de la lista de recomendaciones
    const filterCharacter = dataListTag.options[0].id
    const responseCharacter = await fetch(url_marvel_character(filterCharacter));
    const dataCharacter = await responseCharacter.json(); //objeto litera devuelto en json "dataCharacter"
    const classCharacter = await parserToCharacterClass(dataCharacter.data.results[0]);
    console.log(classCharacter);

    //*CREACION DE LA CARD DEL PERSONAJE
    //IMAGEN
    const img = document.createElement("img");
        img.classList.add("container-img");
        img.src = `${classCharacter.path}.${classCharacter.extension}`;
    divCard.appendChild(img);

    //NOMBRE
    const name = document.createElement("h2");
        name.classList.add("name");
        name.textContent = `${classCharacter.name}`;
    divCard.appendChild(name);

    //DESCRIPCION
    const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = `${classCharacter.description}`;
    divCard.appendChild(description);
});





