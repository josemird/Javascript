import md5 from "md5";

let timestamp = new Date().getTime();
const public_key = "be5ab291f57370d888763690d221a69a";
const private_key = "a7dca677f1669e728a9e39f25c5c875d92f7591e";
let hash_md5 = md5(timestamp + private_key + public_key);

export const url_api_marvel_startNameWith = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${public_key}&hash=${hash_md5}&nameStartsWith=`;

export let url_marvel_character = (id) => {
    return `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timestamp}&apikey=${public_key}&hash=${hash_md5}&nameStartsWith=`;
}; 