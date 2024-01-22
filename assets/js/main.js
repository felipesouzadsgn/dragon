const getSwitch = document.querySelector(".switch")

getSwitch.addEventListener("click", () => {
  const body = document.body
  body.classList.toggle("light")
})