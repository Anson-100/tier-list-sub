const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")
const criteriaButton = document.querySelector(".criteria-button")
const scoringButton = document.querySelector(".scoring-button")
const criteriaList = document.querySelector(".criteria-list")
const scoringSystem = document.querySelector(".scoring-system")
const scoreDisplay = document.querySelector(".score")

let score = 0
const pointsPossible = draggables.length * 2

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
  })

  draggable.addEventListener("dragend", e => {
    draggable.classList.remove("dragging")
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
  // sorting and scoring logic
  container.addEventListener("drop", e => {
    e.preventDefault()
    const draggedItemType = e.dataTransfer.getData("text/plain")
    const draggedItem = document.querySelector(`.${draggedItemType}`)
    const draggableItems = Array.from(container.querySelectorAll(".draggable"))
    // const rankValue = draggedItem.dataset.rank
    // const rankNumber = parseInt(rankValue)

    const index = draggableItems.findIndex(item => item === draggedItem)
    const previousDraggable = draggableItems[index - 1]
    const nextDraggable = draggableItems[index + 1]

    if (container.id === draggedItem.classList[1]) {
      console.log("correct tier")
      draggedItem.dataset.tier = "true"
    } else {
      draggedItem.dataset.tier = ""
    }

    draggableItems.forEach((draggableItem, index) => {
      const rankValue = draggableItem.dataset.rank
      const indexValue = index.toString()

      console.log(rankValue, indexValue)

      if (
        rankValue === indexValue &&
        container.id === draggedItem.classList[1]
      ) {
        draggableItem.dataset.order = "true"
      } else {
        draggableItem.dataset.order = ""
      }
    })
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
//   if (
//     (previousDraggable &&
//       parseInt(previousDraggable.dataset.rank) > rankNumber) ||
//     (nextDraggable && parseInt(nextDraggable.dataset.rank) < rankNumber)
//   ) {
//     console.log("correct tier, incorrect order")
//     if (!draggedItem.dataset.scored) {
//       score += 1
//       draggedItem.dataset.scored = "1"
//     } else if (draggedItem.dataset.scored === "2") {
//       score -= 2
//       draggedItem.dataset.scored = "1"
//     }
//   } else {
//     console.log("correct tier, correct order")
//     if (!draggedItem.dataset.scored) {
//       score += 2
//       draggedItem.dataset.scored = "2"
//     } else if (draggedItem.dataset.scored === "1") {
//       score += 1
//       draggedItem.dataset.scored = "2"
//     }
//   }
// } else {
//   console.log("incorrect tier")
//   if (draggedItem.dataset.scored) {
//     if (draggedItem.dataset.scored === "1") {
//       score -= 1
//     } else if (draggedItem.dataset.scored === "2") {
//       score -= 2
//     }
//     draggedItem.dataset.scored = ""
//   }
// }
