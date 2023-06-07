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

const switchPlayer = function () {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

const grid = document.querySelectorAll('.grid > div')

grid.forEach(function (gridEl, index) {
  gridEl.addEventListener('click', function () {
    if (!gridEl.textContent && !gameEnded) {
      gridEl.textContent = currentPlayer
      if (checkWinner(currentPlayer)) {
        alert(`Player ${currentPlayer} wins`)
        gameEnded = true
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
