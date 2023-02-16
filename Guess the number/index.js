'use strict'

let generatedNumber = Math.floor(Math.random() * 20) + 1

// function generatedNumber() {
//   return Math.floor(Math.random() * 20) + 1
// }

function displayMessage(message) {
  document.querySelector('.message').textContent = message
}

let score = 20
let highScore = 0

let message = document.querySelector('.message')
let displayedScore = document.querySelector('.score')
let displayedHighScore = document.querySelector('.highscore')
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')

displayedHighScore.textContent = highScore
displayedScore.textContent = score

againBtn.addEventListener('click', function () {
  let generatedNumber = Math.floor(Math.random() * 20) + 1
  score = 20

  displayedScore.textContent = score
  displayedHighScore.textContent = highScore
  document.querySelector('.number').textContent = '?'
  displayMessage('Start guessing...')
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'

  displayedHighScore.textContent = highScore

  console.log(highScore, displayedHighScore.textContent)
})

checkBtn.addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value)
  if (!guessedNumber) {
    displayMessage(`You didn't enter any number`)
  } else if (guessedNumber < 0 || guessedNumber > 20) {
    displayMessage(`Choose a number between 1 and 20`)
  } else if (guessedNumber !== generatedNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber < generatedNumber ? `📉Too low` : `📈Too high`
      )
      score--
    } else {
      displayMessage(`💥You lost the game`)
      score = 0
    }
  } else {
    displayMessage(`That's correct!`)
    if (score > highScore) {
      highScore = score
    }
    displayedHighScore.textContent = highScore
    document.querySelector('.number').textContent = generatedNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  }
  displayedScore.textContent = score
})
