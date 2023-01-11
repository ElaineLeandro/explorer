/** Fuction() construtor
 * 
 * expressão new
 * criar um novo objeto
 * this keyword
 * As funcções construtora boa pratica começã com lentra maiuscula
 */



let date = new Date("2022-11-21")

console.log(date);

function Person(name){
  this.name = name
  this.work = function(){
    return this.name +  " Está bebendo agua "
  }
 
}

const ella = new Person("Ella");
const work = new Person("Work")
console.log(ella.work())
console.log(work.work())
