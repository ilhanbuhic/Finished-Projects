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

const grid = document.querySelectorAll(' div')

const imgO = document.createElement('img')
imgO.src = './images/o-icon.png'

const addingIcons = function () {
  for (let i = 1; i < grid.length; i++) {
    const imgX = document.createElement('img')
    imgX.src = './images/x-icon.jpg'
    imgX.alt = 'X'

    grid[i].addEventListener('click', function () {
      if (!grid[i].querySelector('img')) {
        grid[i].appendChild(imgX)
        if (checkWinningCondition(currentPlayer)) {
          alert(`Player ${currentPlayer} wins`)
        }
      }
    })
  }
}

addingIcons()
