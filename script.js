const draggables = document.querySelectorAll(".draggable")
const containers = document.querySelectorAll(".container")
const criteriaButton = document.querySelector(".criteria-button")
const criteriaList = document.querySelector(".criteria-list")

//button logic
criteriaButton.addEventListener("click", e => {
  criteriaList.classList.toggle("show")
})

//drag and drop logica
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

  container.addEventListener("drop", e => {
    e.preventDefault()
    const draggedItemType = e.dataTransfer.getData("text/plain")
    const draggedItem = document.querySelector(`.${draggedItemType}`)
    const draggableItems = Array.from(container.querySelectorAll(".draggable"))
    const rankValue = draggedItem.dataset.rank
    const rankNumber = parseInt(rankValue)

    const index = draggableItems.findIndex(item => item === draggedItem)
    const previousDraggable = draggableItems[index - 1]
    const nextDraggable = draggableItems[index + 1]

    if (container.id === draggedItem.classList[1]) {
      if (
        (previousDraggable &&
          parseInt(previousDraggable.dataset.rank) > rankNumber) ||
        (nextDraggable && parseInt(nextDraggable.dataset.rank) < rankNumber)
      ) {
        console.log("correct tier, incorrect order")
      } else {
        console.log("correct tier, correct order")
      }
    } else {
      console.log("incorrect tier")
    }
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
