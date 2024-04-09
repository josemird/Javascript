import "./style.css"; //importacion de archivo css con js
import {url_api_marvel_startNameWith} from "./api";

const inputTag = document.querySelector("input");

const dataListTag = document.createElement("datalist");
dataListTag.setAttribute("id", "characters");
inputTag.appendChild(dataListTag);

inputTag.addEventListener("keyup", async () => {
    const response = await fetch(url_api_marvel_startNameWith + inputTag.value);
    const data = await response.json();
    
    const result = data.data.results;
    result.forEach((characters) => {
        const optionTag = document.createElement("option");
        optionTag.setAttribute("value", characters.name);
        dataListTag.appendChild(optionTag);
    });
});


