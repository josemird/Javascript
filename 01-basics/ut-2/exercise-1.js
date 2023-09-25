//mensajes
const text1 = "Welcome to the application!";
const text2 = "This is an informational message";
const text3 = "This is a warning. Be cautious";
const text4 = "Error! Something went wrong";

//tabla
function Header (index, name, age, city){
    this.index = (index);
    this.name = name;
    this.age = age;
    this.city = city;
}

const colum1 = new Header (0, 'John', 30, 'New York');
const colum2 = new Header (1, 'Jane', 25, 'San Francisco');
const colum3 = new Header (2, 'Bob', 40, ' Chicago ');


//tamaños de las fuentes
const fontSize1 = 18;
const fontSize2 = 16;


//salidas en la consola
console.log(`%c${text1}`, `font-size: ${fontSize1}px; font-weight: bold; color: blue`);
console.log(`%c${text2}`, `font-size: ${fontSize2}px; color: green`);
console.warn(`%c${text3}`, `font-size: ${fontSize2}px`);
console.error(`%c${text4}`, `font-size: ${fontSize2}px`);

console.table([colum1, colum2, colum3]);