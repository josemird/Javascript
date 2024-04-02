import { Language } from './classes/Language.js';

const ERROR_MESSAGE = 'Error fetch api language';

export const parseToLanguageClass = (data) => {
    return new Promise ((resolve, reject) => {
        if (data === null || data === undefined) {
            reject(ERROR_MESSAGE);
        }else{
        let languageArrayClass = data.data.languages.map(language => {
            let languageClass = new Language(language.id)
            languageClass.language_code = language.language_code
            languageClass.language = language.language
            return languageClass;
        });
        resolve(languageArrayClass);
        }
    })
}

  
export const createOptionTag = (select_tag, language) => {
    let option_language_tag = document.createElement('option');
    option_language_tag.textContent = language.language;
    option_language_tag.value = language.language_code;
    select_tag.appendChild(option_language_tag);
}