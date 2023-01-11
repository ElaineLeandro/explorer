/**
 * new
 * -left-hand-side expression
 * -criar novo objeto
 */

let date = new Date("22.11.2022")
console.log(date.__proto__)
let name = new String("babu");
name.surName ="Leandro"
let age= new Number(5)

console.log(name, age);
console.log(name.surName, age);