import {
  submitButton,
  calculateTotalScore,
  pointsPossible,
  resultsModal,
  submitButtonGraphics,
} from "./script.js"

const scoringDisplay = document.querySelector(".scoring-display")
const scoreBar = document.querySelector(".top")
const beltEnd = Array.from(document.querySelectorAll(".belt-end"))
const stripes = document.querySelector(".stripes")
const resultsModalContent = document.querySelector(".results-content")
const learnMore = document.querySelector(".learn-more")
let beltColor = undefined
let stripeAmount = undefined

const subInfoModal = document.querySelector(".sub-info")
const closeSubInfoModal = document.querySelector(".close-sub-info")
const subInfoModalTitle = document.querySelector(".sub-name")

const blackBeltFour = pointsPossible * 0.97
const blackBeltTwo = pointsPossible * 0.94
const blackBeltOne = pointsPossible * 0.92
const blackBelt = pointsPossible * 0.9
const brownBeltFour = pointsPossible * 0.87
const brownBeltTwo = pointsPossible * 0.84
const brownBeltOne = pointsPossible * 0.82
const brownBelt = pointsPossible * 0.8
const purpleBeltFour = pointsPossible * 0.75
const purpleBeltTwo = pointsPossible * 0.7
const purpleBeltOne = pointsPossible * 0.65
const purpleBelt = pointsPossible * 0.6
const blueBeltFour = pointsPossible * 0.55
const blueBeltTwo = pointsPossible * 0.5
const blueBeltOne = pointsPossible * 0.45
const blueBelt = pointsPossible * 0.4
const whiteBeltFour = pointsPossible * 0.3
const whiteBeltTwo = pointsPossible * 0.25
const whiteBeltOne = pointsPossible * 0.2

const stripeOne = document.querySelector(".stripe-one")
const stripeTwo = document.querySelector(".stripe-two")
const stripeThree = document.querySelector(".stripe-three")
const stripeFour = document.querySelector(".stripe-four")

// logic for scoring display and animation----------------------------------------------------

function scoreboard() {
  scoringDisplay.innerText = calculateTotalScore()

  const score = parseInt(scoringDisplay.innerText.substr(0, 2))
  console.log(score)
  console.log(whiteBeltOne)
  if (score == pointsPossible) {
    scoreBar.classList.add("red")
  } else if (score > parseInt(blackBelt)) {
    scoreBar.classList.add("black")
    if (score > parseInt(blackBeltFour)) {
      scoreBar.classList.add("four")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(blackBeltTwo)) {
      scoreBar.classList.add("two")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(blackBeltOne)) {
      scoreBar.classList.add("one")
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(brownBelt)) {
    scoreBar.classList.add("brown")
    if (score > parseInt(brownBeltFour)) {
      scoreBar.classList.add("four")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(brownBeltTwo)) {
      scoreBar.classList.add("two")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(brownBeltOne)) {
      scoreBar.classList.add("one")
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(purpleBelt)) {
    scoreBar.classList.add("purple")
    if (score > parseInt(purpleBeltFour)) {
      scoreBar.classList.add("four")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(purpleBeltTwo)) {
      scoreBar.classList.add("two")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(purpleBeltOne)) {
      scoreBar.classList.add("one")
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(blueBelt)) {
    scoreBar.classList.add("blue")
    if (score > parseInt(blueBeltFour)) {
      scoreBar.classList.add("four")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(blueBeltTwo)) {
      scoreBar.classList.add("two")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(blueBeltOne)) {
      scoreBar.classList.add("one")
      stripeOne.style.backgroundColor = "white"
    }
  } else {
    scoreBar.classList.add("white")
    if (score > parseInt(whiteBeltFour)) {
      scoreBar.classList.add("four")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(whiteBeltTwo)) {
      scoreBar.classList.add("two")
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(whiteBeltOne)) {
      scoreBar.classList.add("one")
      stripeOne.style.backgroundColor = "white"
    }
  }
  beltColor = scoreBar.classList.item(1)
  stripeAmount = scoreBar.classList.item(2)
  return beltColor, stripeAmount
}

// event listener for when submit button is clicked--------------------------------
submitButton.addEventListener("click", e => {
  const finalScore = calculateTotalScore()
  const placedItems = Array.from(document.querySelectorAll(".placed"))
  const unplacedItems = Array.from(document.querySelectorAll(".unplaced"))

  submitButton.disabled = true
  submitButton.classList.add("clicked")

  scoreboard()
  resultsModal.showModal()

  if (scoreBar.classList.item(2) == null) {
    resultsModalContent.innerText = `your bjj submission knowledge is at the ${beltColor} belt level`
  } else {
    resultsModalContent.innerText = `your bjj submission knowledge is at the ${stripeAmount} stripe ${beltColor} belt level`
  }

  if (scoreBar.classList.item(1) == "red") {
    learnMore.innerText = "👌"
  } else if (scoreBar.classList.item(1) == "black") {
    learnMore.innerText = "your skills are legit"
  } else if (scoreBar.classList.item(1) == "brown") {
    learnMore.innerText =
      "your skills are advanced but there are still a couple holes in your game"
  } else if (scoreBar.classList.item(1) == "purple") {
    learnMore.innerText =
      "you are very skilled but there is still a lot more to learn"
  } else if (scoreBar.classList.item(1) == "blue") {
    learnMore.innerText =
      "you have developed some skill but you need to keep training"
  } else if (scoreBar.classList.item(1) == "white") {
    learnMore.innerText =
      "train hard and smart and soon you will begin to feel more comfortable"
  }

  beltEnd.forEach(stuff => {
    stuff.classList.add("show")
  })
  stripes.classList.add("show")
  scoringDisplay.classList.add("show")

  placedItems.forEach(placedItem => {
    placedItem.classList.add("check-results")

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

    // Attach click event listener and disable draggable
    placedItem.addEventListener("click", handlePlacedItemClick)
    placedItem.setAttribute("draggable", "false")
    unplacedItems.forEach(unplacedItem => {
      unplacedItem.setAttribute("draggable", "false")
    })
  })

  function handlePlacedItemClick() {
    subInfoModal.showModal()
    const orderWithinTierNumber = parseInt(this.dataset.rank) + 1
    const orderWithinTier = orderWithinTierNumber.toString()

    const thisContainer = this.parentNode

    const anOrA = () => {
      if (
        this.classList[1] === "B" ||
        this.classList[1] === "C" ||
        this.classList[1] === "D" ||
        thisContainer.id === "B" ||
        thisContainer.id === "C" ||
        thisContainer.id === "D"
      ) {
        return "a"
      } else {
        return "an"
      }
    }

    const hiOrLow = () => {
      const containerRank = thisContainer.classList[2]
      const itemRank = this.classList[2]

      if (containerRank > itemRank) {
        return "higher"
      } else if (containerRank < itemRank) {
        return "lower"
      }
    }

    function descriptions() {
      const subDescription = document.querySelector(".sub-description")
      if (subInfoModal.open) {
        subDescription.innerText = "hello"
      }
    }

    descriptions()

    const subInfoModalDescription = document.querySelector(".sub-tier")

    subInfoModalTitle.innerText = this.innerText.substring(2)

    if (this.dataset.score === "2") {
      subInfoModalDescription.innerText = `Nice! The ${this.innerText.substring(
        2
      )} is ${anOrA()} ${
        this.classList[1]
      }-tier move and belongs in position ${orderWithinTier}.`
    } else if (this.dataset.score === "1") {
      subInfoModalDescription.innerText = `The ${this.innerText.substring(
        2
      )} is ${anOrA()} ${
        this.classList[1]
      }-tier move but it is supposed to go in position ${orderWithinTier}.`
    } else {
      subInfoModalDescription.innerText = `The ${this.innerText.substring(
        2
      )} isn't ${anOrA()} ${
        thisContainer.id
      }-tier move. It should be ranked ${hiOrLow()}.`
    }
  }
})
closeSubInfoModal.addEventListener("click", () => {
  subInfoModal.classList.add("hide")
  subInfoModal.addEventListener("animationend", function hideDialog() {
    subInfoModal.classList.remove("hide")
    subInfoModal.close()
    subInfoModal.removeEventListener("animationend", hideDialog)
  })
})

export { scoreBar, stripeAmount, beltColor, scoreboard }
