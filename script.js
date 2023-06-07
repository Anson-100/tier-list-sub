const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")
const criteriaButton = document.querySelector(".criteria-button")
const scoringButton = document.querySelector(".scoring-button")
const criteriaList = document.querySelector(".criteria-list")
const scoringSystem = document.querySelector(".scoring-system")
const scoreDisplay = document.querySelector(".score")

const pointsPossible = draggables.length * 2

//scoring logic
function calculateTotalScore() {
  const draggableItems = Array.from(document.querySelectorAll(".draggable"))
  let score = 0

  draggableItems.forEach(draggableItem => {
    const itemScore = parseInt(draggableItem.dataset.score)
    score += itemScore
  })
  return score
}

// let activityValue = 1

// function updateActivityValue() {
//   const draggableItems = Array.from(document.querySelectorAll(".draggable"))
//   draggableItems.forEach(draggableItem => {
//     if (draggableItem.classList.contains("dragging")) {
//       draggableItem.dataset.activity = activityValue.toString()
//       activityValue++
//     }
//   })
// }

// function highestActivityValue() {
//   const draggables = Array.from(document.querySelectorAll(".draggable"))
//   let maxActivityValue = 0

//   draggables.forEach(draggable => {
//     const activityValue = parseInt(draggable.dataset.activity)

//     if (activityValue > maxActivityValue) {
//       maxActivityValue = activityValue
//     }
//   })
//   console.log("Highest activity value:", maxActivityValue)
// }

//button logic
criteriaButton.addEventListener("click", e => {
  criteriaList.classList.toggle("show")
})

scoringButton.addEventListener("click", e => {
  scoringSystem.classList.toggle("show")
})

//drag and drop logic
draggables.forEach(draggable => {
  draggable.addEventListener("dragstart", e => {
    const itemId = draggable.classList[1]
    e.dataTransfer.setData("text/plain", itemId)
    draggable.classList.add("dragging")
    draggable.classList.remove("dropped")
  })

  draggable.addEventListener("dragend", e => {
    draggable.classList.remove("dragging")
    draggable.classList.add("dropped")
  })
})

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
  // sortinglogic
  function pointAssignment(container) {
    const draggableItems = Array.from(container.querySelectorAll(".draggable"))

    draggableItems.forEach((draggableItem, index) => {
      const rankValue = draggableItem.dataset.rank
      const indexValue = index.toString()

      if (
        indexValue === rankValue &&
        container.id === draggableItem.classList[1]
      ) {
        draggableItem.dataset.order = "true"
        draggableItem.dataset.tier = "true"
        draggableItem.dataset.score = 2
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
  }

  container.addEventListener("drop", e => {
    e.preventDefault()
    pointAssignment(container)
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

// container.addEventListener("dragstart", e => {
//   const draggableItems = Array.from(container.querySelectorAll(".dropped"))

//   console.log(draggableItems)
// })
