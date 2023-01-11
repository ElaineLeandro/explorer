/** Manupulação Arrays */

let techs = ["html", "css", "js"]

//adicionar um item no fim

console.log(techs.push("node.js"));

//adicionar no começo

console.log(techs.unshift("SQLServer"));

//remover do fim
// techs.pop();

//remover do começo
// techs.shift()

//pegar somente alguns elementos do array

// console.log(techs.slice(1,3))

//remover 1 ou mais items em qualquer posição do array

// console.log(techs.splice(1,3))

// console.log(techs)

//encontrar a posição de um elemento no array

let index = techs.indexOf("css")
techs.splice(index,1)
console.log(techs)