let userCity = '';

export async function solicitudUsuario() {
    try{
    const url = "https://randomuser.me/api/"
    const respuesta = await fetch(url)
    const { results } = await respuesta.json()
    const datos = results[0]
    userCity = datos.location.city; 
    console.log(datos);
    return datos;
    }catch(error){
        console.log(error);
    }
}


export async function solicitudHora(){
    await solicitudUsuario();
    const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${userCity}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f562416c28msh8e124fc1f5978abp1a9ae2jsncc472730b6b5',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}