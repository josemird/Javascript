import './style.css'
import { api_url_languages, api_url_translator, api_options_translator } from './apis'
import { parseToLanguageClass, createOptionTag } from './helpers'

const select_tag = document.querySelector('#select-langaje')
const button_tag = document.querySelector('button')
const textarea_source_tag = document.querySelector('.container-source')
const textarea_target_tag = document.querySelector('.container-target')


const setLanguages = async () => {
  try {
    const response = await fetch(api_url_languages)
    const data = await response.json()
    const languageArrayClass= await parseToLanguageClass(data);
    languageArrayClass.forEach(language => {
      createOptionTag(select_tag, language);
    });
  }
  catch (error) {
    console.error(new Error (error));
  }
} 

button_tag.addEventListener('click', async () => {
  try {
    // console.log(select_tag.value); //cuando clicko el boton me muestra el valor del select
    // console.log(textarea_source_tag.value); //cuando clicko el boton me muestra el valor del textarea
    api_options_translator.body.set('q', textarea_source_tag.value)
    api_options_translator.body.set('target', select_tag.value)
    if (select_tag.value === "es") {
      textarea_target_tag.value = textarea_source_tag.value;
    } else {
      // console.log(api_optionks_translator);  
      const response = await fetch(api_url_translator, api_options_translator)
      const data = await response.json();
      // console.log(data); //vemos la estructura de la respuesta para saber como acceder a la traduccion
      // console.log(data.data.translations[0].translatedText); //accedemos a la traduccion por consola
      textarea_target_tag.value = data.data.translations[0].translatedText; //si usamos .textcontent no se refrescaria en tiempo real, por ello usamos .value
    }
  } catch (error) {
    console.error(new Error (error));
  } 
});

setLanguages();



