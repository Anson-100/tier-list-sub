import { gifModal } from "./script.js"

const refreshButtonLocation = document.querySelector(".submit-area")
const closeGifModal = document.querySelector(".close-gif-modal")
const gifModalGif = document.querySelector(".gif-modal-gif")

const whyFirst = document.querySelector(".first")
const whySecond = document.querySelector(".second")
const whyThird = document.querySelector(".third")

function addRefreshButton() {
  const refreshButton = document.createElement("button")
  refreshButton.innerText = "reset"
  refreshButton.classList.add("refresh-button")
  refreshButton.addEventListener("click", e => {
    window.location.reload()
  })
  refreshButtonLocation.appendChild(refreshButton)
}

function handleLearnableClick(e) {
  let targetElement = e.target.closest(".draggable")
  let itemText = targetElement.querySelector(".name").innerText
  let itemGif = document.querySelector(".gif-modal-gif")
  console.log(itemText)
  if (itemText === "triangle") {
    itemGif.src = "assets/triangle-gif.gif"
  } else if (itemText === "arm triangle") {
    itemGif.src = "assets/arm-triangle-gif.gif"
  } else if (itemText === "guillotine") {
    itemGif.src = "assets/guillotine-gif.gif"
  } else if (itemText === "heel hook") {
    itemGif.src = "assets/heel-hook-gif.gif"
  } else if (itemText === "armbar") {
    itemGif.src = "assets/armbar-gif.gif"
  } else if (itemText === "rnc") {
    itemGif.src = "assets/rnc-gif.gif"
  } else if (itemText === "d'arce") {
    itemGif.src = "assets/d'arce-gif.gif"
  } else if (itemText === "anaconda") {
    itemGif.src = "assets/anaconda-gif.gif"
  } else if (itemText === "kimura") {
    itemGif.src = "assets/kimura-gif.gif"
  } else if (itemText === "twister") {
    itemGif.src = "assets/twister-gif.gif"
  } else if (itemText === "fish hook") {
    itemGif.src = "assets/fish-hook-gif.gif"
  } else if (itemText === "americana") {
    itemGif.src = "assets/americana-gif.gif"
  } else if (itemText === "omoplata") {
    itemGif.src = "assets/omoplata-gif.gif"
  }

  gifModal.showModal()
}

closeGifModal.addEventListener("click", () => {
  gifModal.classList.add("hide")
  gifModal.addEventListener("animationend", function hideDialog() {
    gifModal.classList.remove("hide")
    gifModal.close()
    gifModal.removeEventListener("animationend", hideDialog)
  })
  gifModalGif.src = ""
})

whyFirst.addEventListener("click", e => {
  const answerFirst = document.querySelector(".best")
  toggleHeight(answerFirst)
})

whySecond.addEventListener("click", e => {
  const answerSecond = document.querySelector(".better")
  toggleHeight(answerSecond)
})

whyThird.addEventListener("click", e => {
  const answerThird = document.querySelector(".good")
  toggleHeight(answerThird)
})

function toggleHeight(element) {
  if (element.style.maxHeight) {
    element.style.maxHeight = null
  } else {
    element.style.maxHeight = element.scrollHeight + "px"
  }
}

export { addRefreshButton, handleLearnableClick }
