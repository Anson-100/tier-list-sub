import { subInfoModal, subInfoModalTitle } from "./results.js"

const subPic = document.querySelector(".sub-pic")
const subType = document.querySelector(".sub-type")
const subEffectiveness = document.querySelector(".effectiveness")
const subVersatility = document.querySelector(".versatility")
const subReliability = document.querySelector(".reliability")
const subRiskReward = document.querySelector(".risk-vs-reward")
const subVariation = document.querySelector(".sub-variation")
const subInfoLink = document.querySelector(".sub-links")
const subInfoLinkTwo = document.querySelector(".sub-links-2")
const subActionLink = document.querySelector(".sub-action")
const subCounterLink = document.querySelector(".sub-counter")
const subCounterLinkTwo = document.querySelector(".sub-counter-2")
const subCounterLinkThree = document.querySelector(".sub-counter-3")

function descriptions() {
  const subDescription = document.querySelector(".sub-description")
  if (subInfoModal.open) {
    if (subInfoModalTitle.innerText === "triangle") {
      subPic.src = "assets/triangle-choke.jpg"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      // subEffectiveness.innerText = "4/5"
      // subVersatility.innerText = "4/5"
      // subReliability.innerText = "5/5"
      // subRiskReward.innerText = "4/5"
      subDescription.innerText =
        "The triangle pits the strength of a persons legs against an opponent's upper body which makes it very secure indeed when fully locked. Even larger opponents will find it extremely difficult and miserable to escape a properly applied triangle before being rendered unconscious. What keeps this technique out of S-tier is the fact it is a head and arm style strangle and also the potential risk of being slammed."

      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=WsOvsDR_104"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=dlw6AQH4oI0&t=135s"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=sR2rS2dwpNY"
      )
    } else if (subInfoModalTitle.innerText === "arm triangle") {
      subPic.src = "assets/arm-triangle.png"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subDescription.innerText =
        "The arm triangle, like all strangles, is gauranteed to render an opponent unconscious when properly applied. The technique can be setup from a variety of different positions and is especially effective when an opponent turns into you from their back or side. It is not a particularly risky move to attempt in terms of being countered but using this submission to neutralize a street encounter could result in scraping up your forehead quite a bit. The major drawback of this technique is that it can be very difficult to properly execute against larger opponents."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=Tnj3UNVnMU0&t=96s"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=_0XvdBvXtgg"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=UHvgDb1ISJc"
      )
    } else if (subInfoModalTitle.innerText === "guillotine") {
      subPic.src = "assets/guillotine.jpg"
      subType.innerText = "strangle"
      subVariation.innerText = "head only or head-and-arm"
      subDescription.innerText =
        "The guillotine choke is one of the most effective and versatile submissions across all skill levels and scenarios. The move is potentially open anytime an oppnent's head is below yours and the basic mechanics of the move can be easily picked up by beginners. One of the guillotine's most useful applications is as a counter to takedown attempts. This submission can be applied from a variety of different positions and can be very effective against larger opponents. Developing proficiency in this technique is a necessity for any grappler. Always be aware of the potential risk of being slammed or giving up top position if the attempt fails."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=k_j0NLNwKDA"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=0FsBvCewCco&t=291s"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=boGCOjeNBvQ"
      )
    } else if (subInfoModalTitle.innerText === "heel hook") {
      subPic.src = "assets/heel-hook.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subDescription.innerText =
        "The heel hook is the king of all leg locks. All variations of this move attack the knee by torquing an opponent's heel in either direction until the opponent is forced to tap or a severe injury occurs. Failing to yield to a properly applied heel hook can result in catastrophic damage to the knee so this submission is often not allowed at lower levels of competition. While this move is extremely effective, attacking an opponent's legs can leave your head unprotected which is a concern in street encounters and mixed martial arts competition."

      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=haBJPddcCvo"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=5I-8i7twrwM"
      )
      subCounterLink.innerText = "defense/counter 1"
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=kzgvfbZtH-8",
        "https://www.youtube.com/shorts/YUP488XvlBo"
      )
      subCounterLinkTwo.classList.remove("hidden")
      subCounterLinkTwo.innerText = "..2"
      subCounterLinkTwo.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=JbRfIo1NTLk"
      )
      subCounterLinkThree.classList.remove("hidden")
      subCounterLinkThree.innerText = "..3"
      subCounterLinkThree.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=uZbUhFapIhg"
      )
    } else if (subInfoModalTitle.innerText === "armbar") {
      subPic.src = "assets/armbar.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "straight"
      subDescription.innerText =
        "The armbar is a technique where an opponent's arm is isolated and hyperextended. It is one of the highest percentage submissions in competition and one of the first submissions taught to new bjj students. It is not the most effective option for a street encounter, however, since hyperextending a person's arm may not cause enough pain or damage to deter your opponent."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=GshEzcqlUbY&t=34s"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=o1OZHNf8hoo"
      )
      subCounterLink.innerText = "defense/counter 1"
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=jviGHvuSAds"
      )
      subCounterLinkTwo.classList.remove("hidden")
      subCounterLinkTwo.innerText = "..2"
      subCounterLinkTwo.setAttribute(
        "href",
        "https://www.youtube.com/shorts/3ZPluU8oP3c"
      )
    } else if (subInfoModalTitle.innerText === "rnc") {
      subPic.src = "assets/rnc.jpg"
      subType.innerText = "strangle"
      subVariation.innerText = "head only"
      subDescription.innerText =
        "The rear-naked-choke is the undisputed king of all submissions. Being in the position to apply it indicates you are behind your opponent where you have have the greatest positional advantage. This is the highest percentage move in competition and the ideal way to neatralize an opponent in a street encounter."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/shorts/rRFKZBNpCaE"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=4OO5CWZLbxI&t=11s"
      )
      subCounterLink.innerText = "defense/counter 1"
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=woCl1q2drWo&t=1s"
      )
      subCounterLinkTwo.classList.remove("hidden")
      subCounterLinkTwo.innerText = "..2"
      subCounterLinkTwo.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=52S8JLi10lY"
      )
    } else if (subInfoModalTitle.innerText === "d'arce") {
      subPic.src = "assets/d'arce.jpg"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subDescription.innerText =
        "The d'arce choke is a head-and-arm strangle that can be set up from a variety of positions, including bad ones. The versatility of this submission is one of it's best attributes but it may be difficult to pull off for shorter or stockier people."
      subInfoLink.innerText = "learn 1"
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=ug2Kxs54GuU?t=40s"
      )
      subInfoLinkTwo.classList.remove("hidden")
      subInfoLinkTwo.innerText = "..2"
      subInfoLinkTwo.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=MWMNq8DGHyo"
      )

      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=_hKfaVigOoI"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=ug2Kxs54GuU"
      )
    } else if (subInfoModalTitle.innerText === "anaconda") {
      subPic.src = "assets/anaconda.jpg"
      subType.innerText = "strangle"
      subVariation.innerText = "head-and-arm"
      subDescription.innerText =
        "The anaconda is the slightly less versatile cousin of the d'arce. The main difference is the choke is locked up by the opponent's shoulder instead of the side of their head. Like the d'arce, this choke is better-suited to rangier practicioners."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=NfCO7HzV09s"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/shorts/f0t0RubXFEs"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/shorts/f0t0RubXFEs"
      )
    } else if (subInfoModalTitle.innerText === "kimura") {
      subPic.src = "assets/kimura.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subDescription.innerText =
        "The kimura is a very effective submission capable causing tremendous damage the shoulder. However, finishing the move can be difficult against strong opponents who are able to maintain their grip and keep their hand in front of their body. The real power of this technique lies in the kimura grip itself, which is extremely secure can be used to threaten, slow down, or immobilize an opponent long enough to establish a dominant position. These applications can also be extended to a street encounter."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=p-6lmaseoGI"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=7H9pD9Jow9U"
      )
      subCounterLink.innerText = "defense/counter 1"
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=OkoO71HxN6U"
      )
      subCounterLinkTwo.classList.remove("hidden")
      subCounterLinkTwo.innerText = "..2"
      subCounterLinkTwo.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=UCMEkVP_UqE"
      )
    } else if (subInfoModalTitle.innerText === "twister") {
      subPic.src = "assets/twister.jpg"
      subType.innerText = "joint-lock"
      subVariation.innerText = "twisting/rotational"
      subDescription.innerText =
        "The twister is a fairly obscure submission that can be difficult to set up against skilled opponents. However, this isn't to suggest this technique can't be extremely effective when the opportunity presents itself. While not high percentage, it is worthwhile to learn this move and experiment with it in order to create the awareness necessary to avoid getting caught in a twister yourself. Using this technique to neutralize a street encounter is not recommended since finding an opening for it suggests the rnc is also available."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=V3nDmb66Xpc"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=GPkyiY-IInM"
      )
      subCounterLink.classList.add("hidden")
    } else if (subInfoModalTitle.innerText === "fish hook") {
      subPic.src = "assets/fish-hook.jpeg"
      subType.innerText = "foul"
      subVariation.innerText = "foul"
      subDescription.innerText =
        "The only reason this technique is here is so there is something to put into f-tier. Using the fish hook in training or competition is a foul, a serious breech of grappling ettiquette, and grounds for a permanent ban. In the (hopefully) unlikely event a person finds themselves in a street encounter where running away isn't an option, it is best to keep the fingers out of an opponent's mouth so they don't get bitten off."
      subInfoLink.classList.add("hidden")
      subActionLink.classList.add("hidden")
      subCounterLink.classList.add("hidden")
    } else if (subInfoModalTitle.innerText === "americana") {
      subPic.src = "assets/americana.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subDescription.innerText =
        "Also referred to as the keylock, the americana is the less popular cousin of the kimura. This submission can be effective but it is fairly difficult to secure the grip and maintain a the pin required to finish the move."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=KbOkHMVhnT8"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=VX5qWIztWlI"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=FNyL93v5fGs"
      )
    } else if (subInfoModalTitle.innerText === "americana") {
      subPic.src = "assets/americana.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subDescription.innerText =
        "Also referred to as the keylock, the americana is the less popular cousin of the kimura. This submission can be effective but it is fairly difficult to secure the grip and maintain a the pin required to finish the move."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=KbOkHMVhnT8"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=VX5qWIztWlI"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=FNyL93v5fGs"
      )
    } else if (subInfoModalTitle.innerText === "omoplata") {
      subPic.src = "assets/omoplata.jpg"
      subType.innerText = "joint lock"
      subVariation.innerText = "rotational/twisting"
      subDescription.innerText =
        "The omoplata is basically a kimura where you use your legs instead of your hands to secure an opponent's arm. In theory, this sounds like a very strong attack but practical application of this technique reveals it is extremely limited. There are certain situations where the omoplata is useful but actually finishing this submission is extremely rare."
      subInfoLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=kWCreb5WVxw?t=18s"
      )
      subActionLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=FrwbaZvvz9E"
      )
      subCounterLink.setAttribute(
        "href",
        "https://www.youtube.com/watch?v=hMMn5jt-fsI"
      )
    }
  }
}

export {
  descriptions,
  subInfoLink,
  subInfoLinkTwo,
  subActionLink,
  subCounterLink,
  subCounterLinkTwo,
  subCounterLinkThree,
}
