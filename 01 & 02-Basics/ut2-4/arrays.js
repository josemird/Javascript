export const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

/**
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteFirtPosition = () => {
  // TODO: implement
  
  return games.shift();

};


/**
 * Removes the last element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
export const deleteLastPosition = () => {
  // TODO: implement

  return games.pop();

};

/**
 * Inserts new element at the start of an array, and returns the new length of the array.
 * @param item Element to insert at the start of the array.
 */
export const addFirstPosition = (item) => {
  // TODO: implement

  return games.unshift("Fornite");

};

/**
 * Appends new element to the end of an array, and returns the new length of the array.
 * @param item New element to add to the array.
 */
export const addLastPosition = (item) => {
  // TODO: implement

  return games.push("Pokemon");

};

/******************************************************/
export const got = [
  "Lannister",
  "Targaryen",
  "Stark",
  "Baratheon",
  "Greyjoy",
  "Arryn",
  "Martell",
];

/**
 * Removes Baratheon and Greyjoy houses
 * @returns array with items removes
 */
export const removeBaratheonAndGreyjoy = () => {
  // TODO: implement

  return got.splice(3, 2);

};

/**
 * Removes Arryn house
 * @returns array with items removes
 */
export const removeArryn = () => {
  // TODO: implement

  return got.splice(3, 1);

};


/******************************************************/
export const narutoCharacters = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Hinata",
  "Kakashi",
  "Jiraiya",
  "Itachi",
  "Gaara",
];

/**
 * Gets the index of Naruto
 * @returns the index found.
 */
export const getNaruto = () => {
  // TODO: implement

  return narutoCharacters.indexOf("Naruto");  

};

/**
 * Gets the index of Gaara
 * @returns the index found.
 */
export const getGaara = () => {
  // TODO: implement

  return narutoCharacters.indexOf("Gaara");  

};

/**
 * Gets the index of Rock Lee
 * @returns the index found.
 */
export const getRockLee = () => {
  // TODO: implement

  return narutoCharacters.indexOf("Rock Lee");  

};

/**
 * Reverses the elements in Naruto Characters array
 * @returns the reversed given array
 */
export const reverseNarutoCharacters = () => {
  // TODO: implement

  return narutoCharacters.reverse();

};
