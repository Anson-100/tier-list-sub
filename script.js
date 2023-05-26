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
    if (container.id === draggedItem.classList[1]) {
      console.log("correct")
    } else {
      console.log("incorrect")
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
