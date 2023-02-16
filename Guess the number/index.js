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
