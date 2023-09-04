import { subInfoModal, subInfoModalTitle } from "./results.js"

const subInfoLink = document.querySelector(".sub-links")
const subType = document.querySelector(".sub-type")
const subVariation = document.querySelector(".sub-variation")
const subPic = document.querySelector(".sub-pic")

function descriptions() {
  const subDescription = document.querySelector(".sub-description")
  if (subInfoModal.open) {
    if (subInfoModalTitle.innerText === "triangle") {
      subDescription.innerText =
        "What makes the triangle awesome? This strangle pits the strength of a persons legs against an opponent's upper body which makes it very secure indeed when fully locked. Even larger opponents will find it extremely difficult and miserable to escape a properly applied triangle before being rendered unconscious. What keeps this technique out of S-tier is the fact it is a head and arm style strangle and also the potential risk of being slammed."
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subPic.src = "assets/triangle-choke.jpg"
      subInfoLink.innerHTML = "triangle video"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=WsOvsDR_104"
      )
    } else if (subInfoModalTitle.innerText === "arm triangle") {
      subDescription.innerText = "arm triangle video"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subInfoLink.innerHTML = "Link for arm-triangle"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=Tnj3UNVnMU0&t=96s"
      )
    } else if (subInfoModalTitle.innerText === "guillotine") {
      subDescription.innerText = "Description for guillotine"
      subType.innerText = "strangle"
      subVariation.innerText = "head only"
      subInfoLink.innerHTML = "guillotine video"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=0FO10dH_3RU"
      )
    } else if (subInfoModalTitle.innerText === "heel hook") {
      subDescription.innerText = "Description for heel hook"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subInfoLink.innerHTML = "heel hook video"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=haBJPddcCvo"
      )
    } else if (subInfoModalTitle.innerText === "armbar") {
      subDescription.innerText = "Description for armbar"
      subType.innerText = "joint lock"
      subVariation.innerText = "straight"
      subPic.src = "assets/armbar.jpg"
      subInfoLink.innerHTML = "armbar video"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=GshEzcqlUbY&t=34s"
      )
    } else if (subInfoModalTitle.innerText === "rnc") {
      subDescription.innerText =
        "The rear-naked-choke is the undisputed king of all submissions. Being in the position to apply it indicates you are behind your opponent where you have have the greatest positional advantage."
      subType.innerText = "strangle"
      subVariation.innerText = "head only"
      subPic.src = "assets/rnc.jpg"
      subInfoLink.innerHTML = "rnc video"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/shorts/rRFKZBNpCaE"
      )
    } else if (subInfoModalTitle.innerText === "d'arce") {
      subDescription.innerText = "Description for d'arce"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subInfoLink.innerHTML = "Link for d'arce"
      subInfoLink.setAttribute("href", "https://example.com/darce")
    } else if (subInfoModalTitle.innerText === "anaconda") {
      subDescription.innerText = "Description for anaconda"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subInfoLink.innerHTML = "Link for anaconda"
      subInfoLink.setAttribute("href", "https://example.com/anaconda")
    } else if (subInfoModalTitle.innerText === "kimura") {
      subDescription.innerText = "Description for kimura"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subInfoLink.innerHTML = "Link for kimura"
      subInfoLink.setAttribute("href", "https://example.com/kimura")
    } else if (subInfoModalTitle.innerText === "twister") {
      subDescription.innerText = "Description for twister"
      subType.innerText = "joint-lock"
      subVariation.innerText = "twisting/rotational"
      subInfoLink.innerHTML = "Link for twister"
      subInfoLink.setAttribute("href", "https://example.com/twister")
    } else if (subInfoModalTitle.innerText === "fish hook") {
      subDescription.innerText = "Description for fish hook"
      subType.innerText = "foul"
      subVariation.innerText = "soft-tissue leverage"
      subInfoLink.innerHTML = "Link for fish hook"
      subInfoLink.setAttribute("href", "https://example.com/fish-hook")
    } else if (subInfoModalTitle.innerText === "americana") {
      subDescription.innerText = "Description for americana"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subInfoLink.innerHTML = "Link for americana"
      subInfoLink.setAttribute("href", "https://example.com/americana")
    } else if (subInfoModalTitle.innerText === "omoplata") {
      subDescription.innerText = "Description for omoplata"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subInfoLink.innerHTML = "Link for omoplata"
      subInfoLink.setAttribute("href", "https://example.com/omoplata")
    }
  }
}

export { descriptions }
