const buttonToggle = document.querySelectorAll("#buttons button")

buttonToggle.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`Button clicked: ${button.id}`);
    document.documentElement.className = ""
    document.documentElement.classList.add(button.id)
  })
})