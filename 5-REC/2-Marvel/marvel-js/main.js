import "./style.css"; //importacion de archivo css con js
import {url_api_marvel_startNameWith} from "./api";

const inputTag = document.querySelector("input");

const dataListTag = document.createElement("datalist");
dataListTag.setAttribute("id", "characters");
inputTag.appendChild(dataListTag);

inputTag.addEventListener("keyup", async () => {
    const response = await fetch(url_api_marvel_startNameWith + inputTag.value);
    const data = await response.json();
    console.log(data);
});


