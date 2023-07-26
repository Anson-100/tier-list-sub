import { subInfoModal, subInfoModalTitle } from "./results.js"

const subInfoLink = document.querySelector(".sub-links")

function descriptions() {
  const subDescription = document.querySelector(".sub-description")
  if (subInfoModal.open) {
    if (subInfoModalTitle.innerText === "triangle") {
      subDescription.innerText = "Description for triangle"
      subInfoLink.innerHTML = "Link for triangle"
      subInfoLink.setAttribute("href", "https://example.com/triangle")
    } else if (subInfoModalTitle.innerText === "arm triangle") {
      subDescription.innerText = "Description for arm-triangle"
      subInfoLink.innerHTML = "Link for arm-triangle"
      subInfoLink.setAttribute("href", "https://example.com/arm-triangle")
    } else if (subInfoModalTitle.innerText === "guillotine") {
      subDescription.innerText = "Description for guillotine"
      subInfoLink.innerHTML = "Link for guillotine"
      subInfoLink.setAttribute("href", "https://example.com/guillotine")
    } else if (subInfoModalTitle.innerText === "heel-hook") {
      subDescription.innerText = "Description for heel-hook"
      subInfoLink.innerHTML = "Link for heel hook"
      subInfoLink.setAttribute("href", "https://example.com/heel-hook")
    } else if (subInfoModalTitle.innerText === "armbar") {
      subDescription.innerText = "Description for armbar"
      subInfoLink.innerHTML = "Link for armbar"
      subInfoLink.setAttribute("href", "https://example.com/armbar")
    } else if (subInfoModalTitle.innerText === "rnc") {
      subDescription.innerText = "this move is fucking dope"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/shorts/rRFKZBNpCaE"
      )
    } else if (subInfoModalTitle.innerText === "d'arce") {
      subDescription.innerText = "Description for d'arce"
      subInfoLink.innerHTML = "Link for d'arce"
      subInfoLink.setAttribute("href", "https://example.com/darce")
    } else if (subInfoModalTitle.innerText === "anaconda") {
      subDescription.innerText = "Description for anaconda"
      subInfoLink.innerHTML = "Link for anaconda"
      subInfoLink.setAttribute("href", "https://example.com/anaconda")
    } else if (subInfoModalTitle.innerText === "kimura") {
      subDescription.innerText = "Description for kimura"
      subInfoLink.innerHTML = "Link for kimura"
      subInfoLink.setAttribute("href", "https://example.com/kimura")
    } else if (subInfoModalTitle.innerText === "twister") {
      subDescription.innerText = "Description for twister"
      subInfoLink.innerHTML = "Link for twister"
      subInfoLink.setAttribute("href", "https://example.com/twister")
    } else if (subInfoModalTitle.innerText === "fish hook") {
      subDescription.innerText = "Description for fish hook"
      subInfoLink.innerHTML = "Link for fish hook"
      subInfoLink.setAttribute("href", "https://example.com/fish-hook")
    } else if (subInfoModalTitle.innerText === "americana") {
      subDescription.innerText = "Description for americana"
      subInfoLink.innerHTML = "Link for americana"
      subInfoLink.setAttribute("href", "https://example.com/americana")
    } else if (subInfoModalTitle.innerText === "omoplata") {
      subDescription.innerText = "Description for omoplata"
      subInfoLink.innerHTML = "Link for omoplata"
      subInfoLink.setAttribute("href", "https://example.com/omoplata")
    }
  }
}

export { descriptions }
