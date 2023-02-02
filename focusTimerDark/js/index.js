import Sounds from './sounds.js'
import Timer from './timer.js'
import Events from './events.js'
import {
  buttonTree,
  buttonCloud,
  buttonPopcorn,
  buttonFire,
  buttonPlay,
  buttonStop,
  buttonSum,
  buttonSub,
  minutesDisplay,
  secondsDisplay,
  inputVolume,
} from './elements.js'

const sounds = Sounds ()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
 })

Events({sounds,timer})