const submissions = document.querySelectorAll(".submissions > div")
const dragAreas = document.querySelectorAll(".drag-area")

submissions.forEach(submission => {
  submission.addEventListener("dragstart", e => {
    submission.classList.add("dragging")
  })
})
