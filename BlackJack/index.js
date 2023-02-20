// Creating an object for the user
let player = {
  name: "Ilhan",
  chips: 0,
}
// Targeting DOM and assigning it to new variables
let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")
let playerEl = document.querySelector("#player-el")

// Creating needed variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let chips = 0

//adding object user to playerEl DOM
playerEl.textContent = player.name + ": $" + player.chips

// Getting a random card using Math.random method and returning number 10 if randomNumber exceeds 11 and returning number 11 is randomNumber is 1
function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

// Creating a function for rendering the game, checking if we even started the game with boolean, assigning getRandomCard to the cards we're using in the game, rendering the game itself
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
  winChips()
}

// Going through the loop to check the lengh of cards which are inside the array and adding them to cardsEl.textContent
// Checking if we are still playing the game or can we draw a new card with boolean
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
  } else if (sum === 21) {
    message = "You've got Blackjack! 🥳"
    hasBlackJack = true
  } else {
    message = "You're out of the game! 😭"
    isAlive = false
  }
  messageEl.textContent = message
}

// Adding new card depending on if isAlive == true && hasBlackJack == false
function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    if (hasBlackJack == true) {
      player.chips += 500
    } else {
      player.chips -= 20
    }
    playerEl.textContent = player.name + ": $" + player.chips
    renderGame()
  }
}
