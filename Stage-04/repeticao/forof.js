/**
   * for...of
  O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

  Sintaxe
  for (variavel of iteravel) {
    declaração
  }
  variável
  A cada iteração, um valor de uma propriedade diferente é atribuido à variável.

  iteravel
  Objeto cujos atributos serão iterados.
 */

  let name= 'Elaine'
  let names =['Asli', 'Benicio', 'Miguel']

  // for (let char of name){
  //   console.log(char)
  // }

  for (let name of names){
    console.log(name)
  }