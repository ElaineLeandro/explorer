/**
   * for...in
  O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

  Syntax
  for (variavel in objeto) {...
  }
  variavel
  Uma propriedade diferente do objeto é atribuida em cada iteração.

  objeto
  Objeto com as propriedades enumeradas.
 */

  let person = {
    name:'André',
    age:38,
    weight: 88.6
  }

  for(let property in person){
     console.log(property)
     console.log(person.name)
     console.log(person[property])
  }