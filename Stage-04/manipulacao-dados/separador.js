/**Manipulação String e Arrays
 * 
 * Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.Depois disso, transforme
 * o arrays em um texto e onde eram espaços, coloque _
 */


let phrase= "Eu quero voar!"
let mayArray= phrase.split(" ")
console.log(mayArray)
let phraseWithUnderscore = mayArray.join("_")
console.log(phraseWithUnderscore.toLocaleLowerCase());