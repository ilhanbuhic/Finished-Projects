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

let currentPlayer = 'X'
let gameEnded = false // Track if the game has ended
let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let textNodeWin = document.createTextNode(`Player ${currentPlayer} wins!`)
let modalP = document.querySelector('.modalP')
let restartBtn = document.querySelector('.restartBtn')
let player1Name = document.querySelector('.player1--name')
let player2Name = document.querySelector('.player2--name')
let player1Score = document.querySelector('.player1--score')
let player2Score = document.querySelector('.player2--score')
let scores = [0, 0]

restartBtn.addEventListener('click', function () {
  resetGame()
  overlay.classList.add('hidden')
  modal.classList.add('hidden')
})

// displayModal()
// const displayModal = function () {
//   modalP.textContent = `Player ${currentPlayer} wins!`
//   overlay.classList.remove('hidden')
//   modal.classList.remove('hidden')
// }

const switchPlayer = function () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

const gridMain = document.querySelector('.grid')
const grid = document.querySelectorAll('.grid > div')

grid.forEach(function (gridEl, index) {
  gridEl.addEventListener('click', function () {
    if (!gridEl.textContent && !gameEnded) {
      gridEl.textContent = currentPlayer
      if (checkWinner(currentPlayer)) {
        gridEl.textContent === 'X'
        // alert(`Player ${currentPlayer} wins`)
        gameEnded = true
        // displayModal()
        resetGame()
      } else if (checkDraw()) {
        alert(`It's a draw`)
        gameEnded = true
      } else {
        switchPlayer()
      }
    }
  })
})

const checkWinner = function (player) {
  for (const sequence of winningSequence) {
    const [a, b, c] = sequence
    if (
      grid[a].textContent === player &&
      grid[b].textContent === player &&
      grid[c].textContent === player
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

const checkDraw = function () {
  for (const gridElement of grid) {
    if (!gridElement.textContent) return false
  }
  return true
}

const resetGame = function () {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
  })
  currentPlayer = 'X'
  gameEnded = false
}
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
