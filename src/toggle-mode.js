const buttonToggle = document.querySelectorAll("#buttons button")

buttonToggle.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`Button clicked: ${button.id}`);

    const isRunning = document.documentElement.classList.contains('running')
    
    document.documentElement.className = isRunning ? "running" : ""
    document.documentElement.classList.add(button.id)
    stopAllSounds()
    if (sounds[button.id]) {
      sounds[button.id].play()
    }

  })
})

export const soundMap = {
  tree: "./assets/tree.wav",
  rain: "./assets/rain.wav",
  coffeeshop: "./assets/coffeeshop.wav",
  fireplace: "./assets/fireplace.wav",
}
const sounds = {};
for (const [mode, filePath] of Object.entries(soundMap)) {
  sounds[mode] = new Audio(filePath)
}

function stopAllSounds() {
  Object.values(sounds).forEach((sound) => {
    sound.pause()
    sound.currentTime = 0
  })
}