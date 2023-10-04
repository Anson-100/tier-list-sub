import { addRefreshButton, handleLearnableClick } from "./server.js"

const draggables = document.querySelectorAll(".draggable")
const draggableArea = document.getElementById("bank")
const containers = document.querySelectorAll(".container")
const tierLetters = document.querySelectorAll("h1")
const tooltips = document.querySelectorAll(".tooltip-text")

const criteriaButton = document.querySelector(".criteria-button")
const scoringButton = document.querySelector(".scoring-button")
const submitButton = document.querySelector(".submit-button")
const instructionsButton = document.querySelector(".instructions-button")
const cheatButton = document.querySelector(".cheat-button")
const playToggleSwitch = document.querySelector("#playToggle")

const criteriaModal = document.querySelector(".criteria-modal")
const scoringModal = document.querySelector(".scoring-modal")
const resultsModal = document.querySelector(".your-score")
const instructionsModal = document.querySelector(".instructions-modal")
const cheatModal = document.querySelector(".cheat-modal")
const gifModal = document.querySelector(".gif-modal")

const closeCriteriaModal = document.querySelector(".close-criteria")
const closeScoringModal = document.querySelector(".close-scoring")
const closeResultsModal = document.querySelector(".close-results")
const closeInstructionsModal = document.querySelector(".close-instructions")
const closeCheatModal = document.querySelector(".close-cheat")
// const closeGifModal = document.querySelector(".close-gif-modal")

const pointsPossible = draggables.length * 2

draggables.forEach(draggable => {
  draggable.addEventListener("click", handleLearnableClick)
})

//scoring logic------------------------------------------------------------
function calculateTotalScore() {
  const draggableItems = Array.from(document.querySelectorAll(".draggable"))
  let score = 0

  draggableItems.forEach(draggableItem => {
    const itemScore = parseInt(draggableItem.dataset.score)
    score += itemScore
  })

  // if (score === pointsPossible) {
  //   console.log("perfect")
  // }
  return `${score}/${pointsPossible}`
}

//button logic---------------------------------------------------------
criteriaButton.addEventListener("click", e => {
  criteriaModal.showModal()
})

scoringButton.addEventListener("click", e => {
  scoringModal.showModal()
})

instructionsButton.addEventListener("click", e => {
  instructionsModal.showModal()
})

cheatButton.addEventListener("click", e => {
  cheatModal.showModal()
})

playToggleSwitch.addEventListener("change", e => {
  const learnActive = document.querySelector(".toggle-learn")
  const playActive = document.querySelector(".toggle-play")

  learnActive.classList.toggle("active")
  playActive.classList.toggle("active")

  tooltips.forEach(tooltip => {
    tooltip.classList.toggle("learn")
  })

  draggables.forEach(draggable => {
    if (draggable.draggable) {
      draggable.draggable = false
      draggable.addEventListener("click", handleLearnableClick)
    } else {
      draggable.draggable = true
      draggable.removeEventListener("click", handleLearnableClick)
    }
  })
  playToggleSwitch.classList.toggle("play")
  tierLetters.forEach(element => {
    element.classList.toggle("learn")
  })
})

closeCriteriaModal.addEventListener("click", () => {
  criteriaModal.classList.add("hide")
  criteriaModal.addEventListener("animationend", function hideDialog() {
    criteriaModal.classList.remove("hide")
    criteriaModal.close()
    criteriaModal.removeEventListener("animationend", hideDialog)
  })
})

closeScoringModal.addEventListener("click", () => {
  scoringModal.classList.add("hide")
  scoringModal.addEventListener("animationend", function hideDialog() {
    scoringModal.classList.remove("hide")
    scoringModal.close()
    scoringModal.removeEventListener("animationend", hideDialog)
  })
})

closeInstructionsModal.addEventListener("click", () => {
  instructionsModal.classList.add("hide")
  instructionsModal.addEventListener("animationend", function hideDialog() {
    instructionsModal.classList.remove("hide")
    instructionsModal.close()
    instructionsModal.removeEventListener("animationend", hideDialog)
  })
})

closeCheatModal.addEventListener("click", () => {
  cheatModal.classList.add("hide")
  cheatModal.addEventListener("animationend", function hideDialog() {
    cheatModal.classList.remove("hide")
    cheatModal.close()
    cheatModal.removeEventListener("animationend", hideDialog)
  })
  document.querySelectorAll(".answer").forEach(answer => {
    answer.style.maxHeight = null
  })
})

closeResultsModal.addEventListener("click", () => {
  resultsModal.classList.add("hide")
  resultsModal.addEventListener("animationend", function hideDialog() {
    resultsModal.classList.remove("hide")
    resultsModal.close()
    resultsModal.removeEventListener("animationend", hideDialog)
  })
  addRefreshButton()
})

function submitButtonGraphics() {
  const unplacedItems = draggableArea.querySelectorAll(".draggable")
  if (unplacedItems.length < draggables.length) {
    submitButton.hidden = false
    submitButton.disabled = false
  } else if (unplacedItems.length === 0) {
    submitButton.classList.add("animate")
  } else {
    submitButton.classList.remove("animate")
  }

  console.log(unplacedItems.length)
}

//drag and drop logic -------------------------------------------------------------
draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", e => {
    const itemId = draggable.classList[1]
    // e.dataTransfer.setData("text/plain", itemId)
    draggable.classList.add("dragging")
  })

  draggable.addEventListener("dragend", e => {
    draggable.classList.remove("dragging")
  })
})

// mobile touch logic----------------------------------------------------------------
// if ("ontouchstart" in window) {
// }

function handleTouchStart(e) {
  e.stopPropagation()
  draggables.forEach(item => {
    if (item !== e.currentTarget && item.classList.contains("dragging")) {
      item.classList.remove("dragging")
    }
  })
  e.currentTarget.classList.toggle("dragging")
}

draggables.forEach(draggable => {
  draggable.addEventListener("touchstart", handleTouchStart)
})

// mobile sorting logic--------------------------------------------------------------------------------

function handleContainerTouchStart(container, e) {
  const afterElement = sortDraggableElements(container, e.clientX)
  const draggable = document.querySelector(".dragging")

  if (container.id != "bank") {
    if (afterElement == null) {
      container.appendChild(draggable)
      draggable.classList.remove("dragging")
    } else {
      container.insertBefore(draggable, afterElement)
      draggable.classList.remove("dragging")
    }
  } else if (container.id == "bank") {
    container.appendChild(draggable)
    draggable.classList.remove("dragging")
  }

  const draggableItems = Array.from(container.querySelectorAll(".draggable"))

  draggableItems.forEach((draggableItem, index) => {
    const rankValue = draggableItem.dataset.rank
    const indexValue = index.toString()

    if (container.id != "bank") {
      draggableItem.classList.remove("unplaced")
      draggableItem.classList.add("placed")
    } else {
      draggableItem.classList.remove("placed")
      draggableItem.classList.add("unplaced")
    }

    if (
      indexValue === rankValue &&
      container.id === draggableItem.classList[1]
    ) {
      if (
        index > 0 &&
        draggableItems[index - 1].dataset.order !== "true" &&
        draggableItem.dataset.order === "true"
      ) {
        draggableItem.dataset.order = ""
        draggableItem.dataset.tier = "true"
        draggableItem.dataset.score = 1
      } else {
        draggableItem.dataset.order = "true"
        draggableItem.dataset.tier = "true"
        draggableItem.dataset.score = 2
      }
    } else if (
      indexValue != rankValue &&
      container.id === draggableItem.classList[1]
    ) {
      draggableItem.dataset.order = ""
      draggableItem.dataset.tier = "true"
      draggableItem.dataset.score = 1
    } else {
      draggableItem.dataset.order = ""
      draggableItem.dataset.tier = ""
      draggableItem.dataset.score = 0
    }
  })
  containers.forEach(container => {
    const draggableItems = Array.from(container.querySelectorAll(".draggable"))

    draggableItems.forEach((draggableItem, index) => {
      const rankValue = draggableItem.dataset.rank
      const indexValue = index.toString()

      if (
        indexValue === rankValue &&
        container.id === draggableItem.classList[1]
      ) {
        if (
          index > 0 &&
          draggableItems[index - 1].dataset.order !== "true" &&
          draggableItem.dataset.order === "true"
        ) {
          draggableItem.dataset.order = ""
          draggableItem.dataset.tier = "true"
          draggableItem.dataset.score = 1
        } else {
          draggableItem.dataset.order = "true"
          draggableItem.dataset.tier = "true"
          draggableItem.dataset.score = 2
        }
      } else if (
        indexValue != rankValue &&
        container.id === draggableItem.classList[1]
      ) {
        draggableItem.dataset.order = ""
        draggableItem.dataset.tier = "true"
        draggableItem.dataset.score = 1
      } else {
        draggableItem.dataset.order = ""
        draggableItem.dataset.tier = ""
        draggableItem.dataset.score = 0
      }
    })
  })
  submitButtonGraphics()

  //call scoring function
  const runningTotal = calculateTotalScore()
  console.log("total score: ", runningTotal)
}

containers.forEach(container => {
  container.addEventListener("touchstart", e =>
    handleContainerTouchStart(container, e)
  )
})

// sortinglogic-------------------------------------------------------------------
containers.forEach(container => {
  container.addEventListener("dragover", e => {
    e.preventDefault()
    const afterElement = sortDraggableElements(container, e.clientX)
    const draggable = document.querySelector(".dragging")

    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })

  container.addEventListener("drop", e => {
    e.preventDefault()

    const draggableItems = Array.from(container.querySelectorAll(".draggable"))

    draggableItems.forEach((draggableItem, index) => {
      const rankValue = draggableItem.dataset.rank
      const indexValue = index.toString()

      if (container.id != "bank") {
        draggableItem.classList.remove("unplaced")
        draggableItem.classList.add("placed")
      } else {
        draggableItem.classList.remove("placed")
        draggableItem.classList.add("unplaced")
      }

      if (
        indexValue === rankValue &&
        container.id === draggableItem.classList[1]
      ) {
        if (
          index > 0 &&
          draggableItems[index - 1].dataset.order !== "true" &&
          draggableItem.dataset.order === "true"
        ) {
          draggableItem.dataset.order = ""
          draggableItem.dataset.tier = "true"
          draggableItem.dataset.score = 1
        } else {
          draggableItem.dataset.order = "true"
          draggableItem.dataset.tier = "true"
          draggableItem.dataset.score = 2
        }
      } else if (
        indexValue != rankValue &&
        container.id === draggableItem.classList[1]
      ) {
        draggableItem.dataset.order = ""
        draggableItem.dataset.tier = "true"
        draggableItem.dataset.score = 1
      } else {
        draggableItem.dataset.order = ""
        draggableItem.dataset.tier = ""
        draggableItem.dataset.score = 0
      }
    })

    containers.forEach(container => {
      const draggableItems = Array.from(
        container.querySelectorAll(".draggable")
      )

      draggableItems.forEach((draggableItem, index) => {
        const rankValue = draggableItem.dataset.rank
        const indexValue = index.toString()

        if (
          indexValue === rankValue &&
          container.id === draggableItem.classList[1]
        ) {
          if (
            index > 0 &&
            draggableItems[index - 1].dataset.order !== "true" &&
            draggableItem.dataset.order === "true"
          ) {
            draggableItem.dataset.order = ""
            draggableItem.dataset.tier = "true"
            draggableItem.dataset.score = 1
          } else {
            draggableItem.dataset.order = "true"
            draggableItem.dataset.tier = "true"
            draggableItem.dataset.score = 2
          }
        } else if (
          indexValue != rankValue &&
          container.id === draggableItem.classList[1]
        ) {
          draggableItem.dataset.order = ""
          draggableItem.dataset.tier = "true"
          draggableItem.dataset.score = 1
        } else {
          draggableItem.dataset.order = ""
          draggableItem.dataset.tier = ""
          draggableItem.dataset.score = 0
        }
      })
    })
    submitButtonGraphics()

    //call scoring function
    const runningTotal = calculateTotalScore()
    console.log("total score: ", runningTotal)
  })
})

function sortDraggableElements(container, x) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ]

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = x - box.right - box.width / 2

      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}

// mobile sorting logic--------------------------------------------------------------------------------

export {
  draggables,
  containers,
  submitButton,
  submitButtonGraphics,
  calculateTotalScore,
  draggableArea,
  pointsPossible,
  resultsModal,
  handleContainerTouchStart,
  handleTouchStart,
  tooltips,
  tierLetters,
  gifModal,
  // closeGifModal,
}
