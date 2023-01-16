/*
 Cada card que se encontra do lado direito, quando selecionado, vai mudar de cor e emitir um som diferente. Os sons você pode encontrar, respectivamente, nos links abaixo:
 */
const tree = document.querySelector('.tree')
const cloud = document.querySelector('.cloud')
const popcorn = document.querySelector('.popcorn')
const fire = document.querySelector('.fire')
const coffee = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Cafeteria.wav?raw=true")
const rain = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Chuva.wav?raw=true")
const forest = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Floresta.wav?raw=true")
const fireplace = new Audio("https://github.com/ElaineLeandro/explorer/blob/master/focusTimer/audios/Lareira.wav?raw=true")


tree.addEventListener('click', () => {
  tree.classList.toggle('color')
  if (tree.classList.contains('color')) {
    forest.play()
  } else {
    forest.pause()
  }
})

cloud.addEventListener('click', () => {
  cloud.classList.toggle('color')
  if (cloud.classList.contains('color')) {
    coffee.play()
  } else {
    coffee.pause()
  }
})

popcorn.addEventListener("click", () => {
  popcorn.classList.toggle('color')
  if (popcorn.classList.contains('color')) {
    rain.play()
  } else {
    rain.pause()
  }
})

fire.addEventListener("click", () =>{
  fire.classList.toggle('color')
  if(fire.classList.contains('color')){
    fireplace.play()
  }else{
    fireplace.pause()
  }
})

/* Funcionalidades esperadas dos botões:

- Play   : aciona o timer;
- Stop   : para o timer;
- +    : aumenta em mais 5 minutos o tempo do timer;
- -    : diminui em 5 minutos o tempo do timer.
*/

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonSum = document.querySelector('.sum')
const buttonSub = document.querySelector('.sub')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let timerTimerOut;

function counter() {
  setTimeout( function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if( seconds <= 0) {
        seconds = 59
      
      minutesDisplay.textContent =String(minutes - 1).padStart(2,'0') 
    }

    secondsDisplay.textContent = String(seconds - 1 ).padStart(2, '0')

    if(minutes <= 0){
      
      return
    }

    counter()
  }, 1000)
}


function hold (){
  clearTimeout(timerTimerOut)
}

buttonPlay.addEventListener('click', () => {
  counter()
  

})

buttonStop.addEventListener('click', () => {
 
})




