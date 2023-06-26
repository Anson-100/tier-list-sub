import {
  draggables,
  containers,
  submitButton,
  calculateTotalScore,
  draggableArea,
  pointsPossible,
} from "./script.js"

const scoringDisplay = document.querySelector(".scoring-display")
const scoreBar = document.querySelector(".top")
const beltEnd = Array.from(document.querySelectorAll(".belt-end"))
const toolBar = document.querySelector(".stripes")

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

function scoreboard() {
  scoringDisplay.innerText = calculateTotalScore()

  const score = parseInt(scoringDisplay.innerText.substr(0, 2))
  console.log(score)
  console.log(whiteBeltOne)
  if (score == pointsPossible) {
    scoreBar.style.backgroundColor = "red"
  } else if (score > parseInt(blackBelt)) {
    scoreBar.style.backgroundColor = "black"
    if (score > parseInt(blackBeltFour)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(blackBeltTwo)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(blackBeltOne)) {
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(brownBelt)) {
    scoreBar.style.backgroundColor = "brown"
    if (score > parseInt(brownBeltFour)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(brownBeltTwo)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(brownBeltOne)) {
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(purpleBelt)) {
    scoreBar.style.backgroundColor = "purple"
    if (score > parseInt(purpleBeltFour)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(purpleBeltTwo)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(purpleBeltOne)) {
      stripeOne.style.backgroundColor = "white"
    }
  } else if (score > parseInt(blueBelt)) {
    scoreBar.style.backgroundColor = "rgb(0, 191, 255)"
    if (score > parseInt(blueBeltFour)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(blueBeltTwo)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(blueBeltOne)) {
      stripeOne.style.backgroundColor = "white"
    }
  } else {
    scoreBar.style.backgroundColor = "white"
    if (score > parseInt(whiteBeltFour)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
      stripeThree.style.backgroundColor = "white"
      stripeFour.style.backgroundColor = "white"
    } else if (score > parseInt(whiteBeltTwo)) {
      stripeOne.style.backgroundColor = "white"
      stripeTwo.style.backgroundColor = "white"
    } else if (score > parseInt(whiteBeltOne)) {
      stripeOne.style.backgroundColor = "white"
    }
  }
}

submitButton.addEventListener("click", e => {
  const finalScore = calculateTotalScore()
  const placedItems = Array.from(document.querySelectorAll(".placed"))
  const unplacedItems = Array.from(document.querySelectorAll(".unplaced"))

  beltEnd.forEach(stuff => {
    stuff.classList.add("show")
  })

  toolBar.classList.add("show")

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

  scoreboard()

  function handlePlacedItemClick(event) {
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

    if (this.dataset.score === "2") {
      alert(
        `Nice! The ${this.innerText.substring(2)} is ${anOrA()} ${
          this.classList[1]
        } tier move belongs in position ${orderWithinTier}.`
      )
    } else if (this.dataset.score === "1") {
      alert(
        `The ${this.innerText.substring(2)} is ${anOrA()} ${
          this.classList[1]
        } move but it is supposed to go in position ${orderWithinTier}.`
      )
    } else {
      alert(
        `The ${this.innerText.substring(2)} isn't ${anOrA()} ${
          thisContainer.id
        } tier move. It should be ranked ${hiOrLow()}.`
      )
    }
  }
})
