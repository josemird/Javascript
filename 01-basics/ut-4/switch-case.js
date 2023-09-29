const DEFAULT_DAY = "Número de día inválido";

/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekSC = (day) => {};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */
let dayOfWeek = {};

/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekObject = (day) => {};

/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operartor, num_1, num_2) => {};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */
let calculatorObject = {};

/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */
export const simpleCalculatorObject = (operartor, num_1, num_2) => {};
