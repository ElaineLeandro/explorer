/**
 * Encontre a solução ao problema:
 * 
 * Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.
 * 
 * A média positiva deverá ser maior que 6
 * 
 * Se o aluno passou no bimestre, dar os parabéns.
 * 
 * se o aluno não passou no bimentre, motivar o aluno a dar seu melhor na prova de recuperação.
 * 
 * Em ambos os casos, mostre uma menagem com nome do aluno e a nota.
 *
 */

let student = prompt("Qual o nome do(a) aluno? ")
let notaOne = prompt("Qual a nota da primeira prova")
let notaTwo = prompt("Qual a nota da segunda prova")
let notaThree = prompt("Qual a nota da terceira prova")

let average = (Number(notaOne) + Number(notaTwo) + Number(notaThree))/3

let result = average > 7
average = average.toFixed(2)

if(result){
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
}else if(average < 4){
  alert("Reprovado!")
}else{
  alert( student + " estude para sua prova de recuperação! sua média foi de: " + average)
}

