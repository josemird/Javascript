/**************************************************/
/***************Person literal object***************/
/**************************************************/
let person = {
  name: "John",
  surname: "Doe",
  country: "USA",
  age: 32,
  getAge: function () {
    return this.age;
  },
  address: {
    street: "C/ Larios",
    number: 25,
    "c.p": 29785,
  },
};

/**
 * Gets the country of person object
 * @returns the country of person object
 */
export const getCountry = () => {};

/**
 * Gets the street of person object
 * @returns the street of person object
 */
export const getStreet = () => {};

/**
 * Gets the age of person object via {@link person.getAge()} fuction
 * @returns the age of person object via {@link person.getAge()} fuction
 */
export const getAgeViaFuction = () => {};

/**
 * Gets the address number of person object
 * @returns the address number of person object
 */
export const getNumbreAddress = () => {};

/**
 * Removes the address number of person object
 */
export const removeNumbreAddressProperty = () => {};

/**
 * Adds the Spanish nacionality to person object as a new property
 */
export const addSpanishNacionalityAsNewProperty = () => {};

/**
 * Gets the nacionality of person object
 * @returns the nacionality of person object
 */
export const getNacionalty = () => {};

/**
 * Gets every person properties as array
 * @returns every person properties as array
 */
export const getPersonArray = () => {};

/**************************************************/
/***************Movie literal object***************/
/**************************************************/
let movie = {
  title: "El Señor de los Anillos: La Comunidad del Anillo",
  director: {
    name: "Peter Jackson",
    nationality: "Neozelandés",
    birth: {
      date: "31 de octubre de 1961",
      place: "Pukerua Bay, Nueva Zelanda",
    },
    notableFilmography: ["El Señor de los Anillos", "El Hobbit", "King Kong"],
  },
  year: 2001,
  genre: "Fantasía",
  duration: 178,
  rating: 9.2,
  characters: [
    {
      name: "Frodo Baggins",
      actor: "Elijah Wood",
      description:
        "El portador del Anillo Único, encargado de destruirlo en el Monte del Destino.",
    },
    {
      name: "Gandalf",
      actor: "Ian McKellen",
      description:
        "Un poderoso mago y consejero que guía a Frodo en su misión.",
    },
    {
      name: "Aragorn",
      actor: "Viggo Mortensen",
      description:
        "Un guerrero y futuro rey que se une a la Comunidad para proteger a Frodo.",
    },
  ],
  synopsis:
    "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.",
};

/**
 * Gets title of movie object
 * @returns birthday of diretor
 */
export const getTitle = () => {};

/**
 * Gets birthday of diretor
 * @returns birthday of diretor
 */
export const getBirthdayOfDirector = () => {};

/**
 * Gets the last principal film of director
 * @returns the last principal films of director
 */
export const getLastPrincipalOfDirector = () => {};

/**
 * Gets description of Gandalf
 * @returns the description of Gandalf
 */
export const getDescriptionOfGandalf = () => {};

/**
 * Gets the numbers of characters
 * @returns the numbers of characters
 */
export const getNumbersOfCharacters = () => {};

/**
 * Gets real name of Aragorn
 * @returns real name of Aragorn
 */
export const getRealOfAragorn = () => {};

/**
 * Gets all keys of movie object
 * @returns all keys of movie objec
 */
export const getMovieKeys = () => {};

/**
 * Gets the infex of Fantasia value
 * @returns the infex of Fantasia value
 */
export const getIndexOfFantasaiValue = () => {};
