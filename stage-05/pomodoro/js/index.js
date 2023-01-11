/* Dom document object Model
  refatoração: mudar um código para deixá-lo mais entendível deixar o código mais performático
  SEM ALTERAR suas funcionalidades
*/
import Controls from "./controls.js"
import Timer  from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./element.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}
)
const sound = Sound()

Events({controls,  timer, sound})




