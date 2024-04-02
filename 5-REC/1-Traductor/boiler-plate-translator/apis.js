export const api_url_languages = 'https://apimocha.com/jjreina/languages';


export const api_url_translator = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

export const api_options_translator = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'e76c1e965dmsh65c7514abaf1d2bp14f042jsned57669d1b0e',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: '',
		target: '',
		source: 'es'
	})
};