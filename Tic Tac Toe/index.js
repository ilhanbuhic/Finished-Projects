'use strict'

const winningSequence = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
]

/* ------ GRID SELECTOR ------ */
const gridMain = document.querySelector('.grid')
const grid3x3 = document.querySelectorAll('.grid > div')
const clickSound = document.querySelector('.clickSound')
const game = document.querySelector('.game')
game.classList.add('hidden')
/* ------ GRID SELECTOR ------ */

/* ------ GAME ELEMENTS SELECTOR ------ */
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let modalP = document.querySelector('.modalP')
let restartBtn = document.querySelector('.restart-button')
let resetScoreBtn = document.querySelector('.reset-score--button')
resetScoreBtn.classList.add('hidden')
/* ------ GRID SELECTOR ------ */

/* ------ PLAYER 1-1 SELECTOR ------ */
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player1Name = document.querySelector('.player1-name')
let player2Name = document.querySelector('.player2-name')
let player1Score = document.querySelector('.player1--score')
let player2Score = document.querySelector('.player2--score')
/* ------ GRID SELECTOR ------ */

/* ------  PLAYER INPUT ------  */
let player1Input = document.querySelector('.player1-input')
let player2Input = document.querySelector('.player2-input')
/* ------  PLAYER INPUT ------  */

document.querySelector('.player2-input').classList.add('hidden')
document.querySelector('.player2-input--name').classList.add('hidden')

/* ---------- INIT ----------*/
let currentPlayer
let randomPlayer
let gameEnded = false
let scores = [0, 0]

const randomPlayerFunc = () => {
  randomPlayer = Math.ceil(Math.random() * 2)
  if (randomPlayer === 1) {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
}

grid3x3.forEach(gridEl => {
  gridEl.addEventListener('click', function () {
    clickSound.currentTime = 0.05
    clickSound.play()
  })
})
/* ---------- INIT ----------*/

/* ---------- ADDING PLAYER NAMES FUNCTION----------*/
document.addEventListener('keyup', function (e) {
  e.preventDefault()
  if (e.key === 'Enter') {
    if (player1Input.value === '' && player2Input.value === '') {
      alert('You have to add a name')
    }
    if (player1Input.value !== '') {
      player1Name.textContent = player1Input.value
      document.querySelector('.player1-input').classList.add('hidden')
      document.querySelector('.player1-input--name').classList.add('hidden')
      document.querySelector('.player2-input').classList.remove('hidden')
      document.querySelector('.player2-input--name').classList.remove('hidden')
      player1.classList.remove('active--player')
      player2.classList.add('active--player')
    }
    if (player2Input.value !== '') {
      player2Name.textContent = player2Input.value
      document.querySelector('.player2-input').classList.add('hidden')
      document.querySelector('.player2-input--name').classList.add('hidden')
      game.classList.remove('hidden')
      resetScoreBtn.classList.remove('hidden')
      player1.classList.add('active--player')
      player2.classList.remove('active--player')
      switchPlayer()
    }
  }
})
randomPlayerFunc()
/* ---------- ADDING PLAYER NAMES FUNCTION----------*/

/* ---------- RESET GAME FUNCTION----------*/
const resetGame = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    // randomPlayerFunc()
    switchPlayer()
  })
  // currentPlayer
  gameEnded = false
}
console.log(randomPlayer)
console.log(currentPlayer)
/* ---------- RESET GAME FUNCTION----------*/

/* ---------- RESET SCORE FUNCTION----------*/
const resetScore = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    randomPlayerFunc()
    switchPlayer()
    scores = [0, 0]
    player1Score.textContent = 'Score: 0'
    player2Score.textContent = 'Score: 0'
  })
}
/* ---------- RESET SCORE FUNCTION----------*/

/* ---------- CHECK WINNER FUNCTION---------- */
const checkWinner = function (player) {
  for (const sequence of winningSequence) {
    const [a, b, c] = sequence
    if (
      grid3x3[a].textContent === player &&
      grid3x3[b].textContent === player &&
      grid3x3[c].textContent === player
    ) {
      console.log(sequence)
      if (player === 'X') {
        scores[0]++
        player1Score.textContent = `Score: ${scores[0]}`
        console.log(scores)
      } else {
        scores[1]++
        player2Score.textContent = `Score: ${scores[1]}`
        console.log(scores)
      }
      return true
    }
  }
  return false
}
/* ---------- CHECK WINNER FUNCTION---------- */

/* ---------- CHECK DRAW FUNCTION---------- */
const checkDraw = function (grid) {
  for (const sequence of winningSequence) {
    const [a, b, c] = sequence
    if (
      grid3x3[a].textContent !== '' &&
      grid3x3[b].textContent !== '' &&
      grid3x3[c].textContent !== ''
    ) {
      return false
    }
  }

  // If no winning sequence and all grid elements have content, it's a draw
  for (const gridElement of grid3x3) {
    if (!gridElement.textContent) return false
  }
  return true
}
/* ---------- CHECK DRAW FUNCTION---------- */

restartBtn.addEventListener('click', function () {
  resetGame(grid3x3)
  overlay.classList.add('hidden')
  modal.classList.add('hidden')
})
resetScoreBtn.addEventListener('click', function () {
  resetScore(grid3x3)
})

/* ---------- SWITCH PLAYER FUNCTION---------- */
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
  } else {
    player1.classList.remove('active--player')
    player2.classList.add('active--player')
  }
}

/* ---------- SWITCH PLAYER FUNCTION---------- */

/* ---------- DISPLAY MODAL FUNCTION---------- */
// displayModal()
const displayModal = function () {
  if (checkDraw(grid3x3)) {
    modalP.textContent = `It's draw!`
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
  } else {
    modalP.textContent = `Player ${currentPlayer} wins!`
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
  }
}
/* ---------- DISPLAY MODAL FUNCTION---------- */
const mainGame = function (grid) {
  resetGame(grid3x3)
  grid.forEach(function (grid) {
    grid.addEventListener('click', function () {
      if (!grid.textContent && !gameEnded) {
        grid.textContent = currentPlayer
        if (checkWinner(currentPlayer)) {
          grid.textContent === currentPlayer
          gameEnded = true
          displayModal()
          randomPlayerFunc()
          resetGame(grid3x3)
        } else if (checkDraw(grid3x3)) {
          displayModal()
          resetGame(grid3x3)
          gameEnded = true
        } else {
          if (currentPlayer === 'X') {
            currentPlayer = 'O'
            player1.classList.remove('active--player')
            player2.classList.add('active--player')
          } else {
            currentPlayer = 'X'
            player1.classList.add('active--player')
            player2.classList.remove('active--player')
          }
        }
      }
    })
  })
}

mainGame(grid3x3)
