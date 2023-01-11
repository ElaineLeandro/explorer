/**
 * switch
  A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.
 */
  
  let expression = 'a'
  switch(expression){
    case 'a' :
      //codigo
      console.log('a')
      break;
    case 'b':
      //codigo para expression b
      console.log('b');
    default:
      console.log('default')
      break
  }

  //Exeplo de uma calculadora

  function calculate(number1, operator, number2){
    let result = 0
    switch (operator) {
      case '+': 
       result = number1 + number2
        break;
      case '-': 
       result = number1 - number2
        break;
      case '*':
       result= number1 * number2
        break;
      case '/':
       result = number1 / number2
        break;
      default:
        console.log('Não implementado');
        break;
    }
    return result
  }

  console.log(calculate(4, '+', 8))