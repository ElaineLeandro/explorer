/*utils.js
Exemplo 01
const message ='mensagem' // essa variável fica isolada nesse arquivo, e não consigo usar ela em outro luga.

export default message */

/*
Exemplo 02 -> Um texto Qualquer

export default "Você se tornará uma diretora de TI"
 */

/**
 * Exemplo 03 -> Função
 * export default function( ) {
  return 'Inteligencia Emocional'
  }
 * 
 */

  /**
   * Exemplo 04 -> É possível ter múltiplos exports
   * const text ='Seja Forte'
    const message = 'O que é seu vai vim na sua mão'

    export const text = 'Seja Forte'
    export const message = 'O que é seu vai vim na sua mão'

    export {text,message}

    const today = Date.now()

    const double = number => number * 2
    export { double , today}
   * 
   */

  /**Misto (name e default)
   * 
   * const date = new Date()
    const greeting = name => `hello ${name}`

    export default function (argument){
      console.log(date, greeting(argument))
    }
      export {date, greeting}
   * 
   */

      /**
       * import as 
       * Exemplo
       * export function sum(a, b){
        return a + b
      }

       */

const sum = (a, b) => a + b
const multiply = (a, b) => a * b
const subtract = (a, b) => a - b
const divide = (a, b) => a / b

export {sum, multiply, subtract, divide}