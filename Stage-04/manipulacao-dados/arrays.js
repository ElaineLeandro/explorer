/**Manipulando Arrays
 * 
 * Criar Array com construtor
 */

let myArray = new Array("a", "b", "c");

console.log(myArray);

/**Manipulando Arrays
 * 
 * Contar elementos de um array
 */

console.log(["Ola", "Oie", "Hello"]);
console.log(['Elemento', 
{type: "array"},
 function(){return "Olá"}].length);

/**Manipulando Arrays
 * 
 * Transformar uma cadeia de caracteres em elementos de um array
 */

let word = "manipulação"
console.log(Array.from(word))