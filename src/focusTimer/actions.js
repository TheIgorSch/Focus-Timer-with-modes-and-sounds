import { minutes } from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning () {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset () {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

}
export function add () {
    let currentMinutes = parseInt(minutes.textContent, 10) || 0

    currentMinutes +=1
    minutes.textContent = String(currentMinutes).padStart(2,0)
    


  
}
export function subtract () {
  let currentMinutes = parseInt(minutes.textContent, 10) || 0

  if (currentMinutes > 0) {
    currentMinutes -= 1;
    minutes.textContent = String(currentMinutes).padStart(2, "0")
  }
}