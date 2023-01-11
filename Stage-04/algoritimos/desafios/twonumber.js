/**
 * Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

   - [ ]  A soma dos dois números;
   - [ ]  A subtração dos dois números;
   - [ ]  A multiplicação dos dois números;
   - [ ]  A divisão dos dois números;
   - [ ]  O resto da divisão dos dois números;
  
   Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

    - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

    Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
    
 */
 
  let numberFist = prompt("Digita o primeiro número: ")
  let numberSecond = prompt("Digita o segundo número: ")

  numberFist = Number(numberFist)
  numberSecond = Number(numberSecond)

 const sum = numberFist + numberSecond
 const sub = numberFist - numberSecond
 const mult = numberFist * numberSecond
 const div = numberFist / numberSecond
 const restDiv = numberFist % numberSecond 
 const numbers = sum %2 == 0 ? "Par" : "Impar"
 const comparation = numberFist !== numberSecond  ? "Diferente" : "Iguais"
 
  alert("Soma: " + sum)
  alert("Subtração: " + sub)
  alert("Multiplicação: " + mult)
  alert("Divisão:  " + div)
  alert("Resto da divisão: " + restDiv)
  alert(`A soma de dois números ${numbers}` + sum)
  alert("Os números inseridos são diferentes: " + comparation)
  


