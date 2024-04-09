export function createDataListTag(inputTag){
    const dataListTag = document.createElement("datalist");
    dataListTag.setAttribute("id", "characters");
    inputTag.appendChild(dataListTag);
    return dataListTag;
}


export function createOptionTag(dataListTag, characters){
    const optionTag = document.createElement("option");
    optionTag.setAttribute("value", characters.name);
    dataListTag.appendChild(optionTag)
    return optionTag;
}

