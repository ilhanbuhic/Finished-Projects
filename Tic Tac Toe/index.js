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

const gridMain = document.querySelector('.grid')
const grid3x3 = document.querySelectorAll('.grid > div')
let currentPlayer = 'X'
let gameEnded = false
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let textNodeWin = document.createTextNode(`Player ${currentPlayer} wins!`)
let modalP = document.querySelector('.modalP')
let restartBtn = document.querySelector('.restart-button')
let resetScoreBtn = document.querySelector('.reset-score--button')
let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player1Name = document.querySelector('.player1--name')
let player2Name = document.querySelector('.player2--name')
let player1Score = document.querySelector('.player1--score')
let player2Score = document.querySelector('.player2--score')
let scores = [0, 0]

/* ---------- RESET GAME FUNCTION----------*/
const resetGame = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
  })
  currentPlayer = 'X'
  gameEnded = false
}
/* ---------- RESET GAME FUNCTION----------*/

const resetScore = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
    scores = [0, 0]
    player1Score.textContent = 'Score: 0'
    player2Score.textContent = 'Score: 0'
  })
}

/* ---------- CHECK WINNER FUNCTION---------- */
const checkWinner = function (player) {
  for (const sequence of winningSequence) {
    const [a, b, c] = sequence
    if (
      grid3x3[a].textContent === player &&
      grid3x3[b].textContent === player &&
      grid3x3[c].textContent === player
    ) {
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
  for (const gridElement of grid) {
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
  console.log('nesto')
})

/* ---------- SWITCH PLAYER FUNCTION---------- */
const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    player1.classList.remove('active--player')
    player2.classList.add('active--player')
    console.log(currentPlayer)
  } else {
    currentPlayer = 'X'
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
    console.log(currentPlayer)
  }
}
/* ---------- SWITCH PLAYER FUNCTION---------- */

/* ---------- DISPLAY MODAL FUNCTION---------- */
// displayModal()
const displayModal = function () {
  modalP.textContent = `Player ${currentPlayer} wins!`
  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')
}
/* ---------- DISPLAY MODAL FUNCTION---------- */

const mainGame = function (grid) {
  resetGame(grid3x3)
  grid.forEach(function (grid) {
    grid.addEventListener('click', function () {
      if (!grid.textContent && !gameEnded) {
        grid.textContent = currentPlayer
        if (checkWinner(currentPlayer)) {
          grid.textContent === 'X'
          gameEnded = true
          displayModal()
          resetGame(grid3x3)
        } else if (checkDraw(grid3x3)) {
          alert(`It's a draw`)
          gameEnded = true
        } else {
          switchPlayer()
        }
      }
    })
  })
}
mainGame(grid3x3)

// -------------------------- OLD CODE - DOESN'T WORK PERFECTLY --------------------------
// let currentPlayer = 'X'
// let gameEnded = false // Track if the game has ended

// const switchPlayer = function () {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
// }

// const grid = document.querySelectorAll('div')

// grid.forEach(function (gridEl) {
//   gridEl.addEventListener('click', function () {
//     if (!gridEl.textContent && !gameEnded) {
//       gridEl.textContent = currentPlayer
//       if (checkWinner(currentPlayer)) {
//         alert(`Player ${currentPlayer} wins`)
//         gameEnded = true
//       } else if (checkDraw()) {
//         alert(`It's a draw`)
//         gameEnded = true
//       } else {
//         switchPlayer()
//       }
//     }
//   })
// })

// const checkWinner = function (player) {
//   for (const sequence of winningSequence) {
//     const [a, b, c] = sequence
//     if (
//       grid[a].textContent === player &&
//       grid[b].textContent === player &&
//       grid[c].textContent === player
//     ) {
//       return true
//     }
//   }
//   return false
// }

// const checkDraw = function () {
//   for (const gridElement of grid) {
//     if (!gridElement.textContent) return false
//   }
//   return true
// }

// const resetGame = function () {
//   grid.forEach(function (gridEl) {
//     gridEl.textContent = ''
//   })
//   currentPlayer = 'X'
//   gameEnded = false
// }
