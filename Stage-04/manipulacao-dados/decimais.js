/**Manipulação String e Números
 * 
 * Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
 */ 

let number = 435312345.33452345
console.log(number.toFixed(2).replace(".", ","))
console.log(Number(number.toFixed(2).replace(".", ",")))