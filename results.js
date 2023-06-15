import { submitButton, calculateTotalScore, draggableArea } from "./script.js"

submitButton.addEventListener("click", e => {
  const finalScore = calculateTotalScore()
  const unplacedItems = Array.from(draggableArea.querySelectorAll(".draggable"))
  const placedItems = Array.from(document.querySelectorAll(".draggable"))

  placedItems.forEach((placedItem, index) => {
    if (placedItem.dataset.score === "1") {
      placedItem.style.borderColor = "yellow"
      placedItem.style.borderWidth = "5px"
    } else if (placedItem.dataset.score === "2") {
      placedItem.style.borderColor = "lime"
      placedItem.style.borderWidth = "5px"
    } else {
      placedItem.style.borderColor = "red"
      placedItem.style.borderWidth = "5px"
    }
  })

  unplacedItems.forEach((unplacedItem, index) => {
    unplacedItem.style.backgroundColor = "aliceBlue"
    unplacedItem.style.color = "black"
    unplacedItem.style.borderColor = "black"
    unplacedItem.style.borderWidth = "2px"
  })
})
