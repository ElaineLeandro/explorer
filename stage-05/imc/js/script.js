
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber} from './utils.js'


/**Variáveis - variables*/

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMassager = document.querySelector('.modal .title span')
// const modalButtonClose = document.querySelector(' .modal button.close')

//Fechar a janela de error ao digitar no campo

inputWeight.oninput =() => AlertError.close()
inputHeight.oninput =() => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsANumber = notANumber(weight) || notANumber(height)
  if (weightOrHeightIsANumber) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  
  Modal.massage.innerText = message
  Modal.open()
  
}


