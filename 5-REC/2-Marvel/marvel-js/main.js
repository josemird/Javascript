import "./style.css"; //importacion de archivo css con js
import {url_api_marvel_startNameWith, url_marvel_character} from "./api";
import { createDataListTag, createOptionTag} from "./domHelper";

const inputTag = document.querySelector("input");
const buttonTag = document.querySelector("button");
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

buttonTag.addEventListener("click", async () => {
    const responseCharacter = await fetch(url_marvel_character(1009286));
    const dataCharacter = await responseCharacter.json();
    console.log(dataCharacter);
});


