/**
 * **Operator precedence**

**A precedência do operador** determina como os operadores são analisados entre si. Operadores com maior precedência tornam-se operandos de operadores com menor precedência.

- grouping ()
- negação e incremento   ! ++ —
- multiplicação e divisão  *
- adição e subtração + -
- relacional  < <= > >=c
- igualdade == != === !==
- AND &&
- OR ||
- condicional  ?:
- assignment (atribuição) = += -= *= %=
 */

//Exemplo

console.log(2 + 5 * 10);

//grouping ()
console.log((2 + 5) * 10);
console.log(3 > 2 > 1);
console.log(3 > 2 &&2 > 1);