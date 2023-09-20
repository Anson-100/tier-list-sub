const refreshButtonLocation = document.querySelector(".submit-area")

function addRefreshButton() {
  const refreshButton = document.createElement("button")
  refreshButton.innerText = "reset"
  refreshButton.classList.add("refresh-button")
  refreshButton.addEventListener("click", e => {
    window.location.reload()
  })
  refreshButtonLocation.appendChild(refreshButton)
}

export { addRefreshButton }
