/**Argumentos e parêmentros*/


/**
 * function expression
 * function anonymous
 * */
let total = 0;
//paramentros (parameters)
const sum = function(number1, number2) {
  // console.log(number1 + number2);
  let total = number1 + number2;
  return total
}
// sum(2,3) // arguments - argumentos

let number1 = 35
let number2 = 25
sum(number1, number2)


// console.log (`o número 1 é ${number1}`) 
// console.log (`o número 2 é ${number2}`) 
console.log (`a soma é  ${sum(number1, number2)}`) 
console.log (total) 
