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
const gridMain = document.querySelector('.gameGrid')
const grid3x3 = document.querySelectorAll('.gameGrid > div')
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

/* ---------- INIT ----------*/

let currentPlayer = 'X'
let randomPlayer
let gameEnded = false
let scores = [0, 0]

const removeElInit = function () {
  player2Input.classList.add('hidden')
  document.querySelector('.player2-input--name').classList.add('hidden')
  document.querySelector('.player1-input--name').classList.add('hidden')
  document.querySelector('.players').classList.add('hidden')
}
removeElInit()

// ************************ LJEP ZA POCETAK ************************ //

player2Input.classList.add('hidden')
document.querySelector('.player2-input').classList.add('hidden')
document.querySelector('.player2-input--name').classList.add('hidden')

// ************************ LJEP ZA POCETAK ************************ //

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
    if (player1Input.value === '') {
      alert('You have to add a name')
    } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
      alert(`Enter full name`)
    } else if (
      player1Input.value !== '' &&
      player1Input.value !== 'Ena Bejtic' &&
      /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)
    ) {
      player1Name.textContent = player1Input.value
      document.querySelector('.player1-input').classList.add('hidden')
      document.querySelector('.player1-input--name').classList.add('hidden')
      document.querySelector('.player2-input').classList.remove('hidden')
      document.querySelector('.player2-input--name').classList.remove('hidden')
      player1.classList.remove('active--player')
      player2.classList.add('active--player')
    } else {
      ena()
    }
    if (player2Input.value === '') {
      alert('You have to add a name')
    } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)) {
      alert('Enter full name')
    } else if (
      player2Input.value !== '' &&
      player2Input.value !== 'Ena Bejtic' &&
      /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)
    ) {
      player2Name.textContent = player2Input.value
      document.querySelector('.player2-input').classList.add('hidden')
      document.querySelector('.player2-input--name').classList.add('hidden')
      game.classList.remove('hidden')
      resetScoreBtn.classList.remove('hidden')
      player1.classList.add('active--player')
      player2.classList.remove('active--player')
      currentPlayer
      randomPlayerFunc()
      switchPlayer()
    } else {
      ena()
    }
  }
})

const ena = function () {
  if (
    player1Input.value !== '' &&
    /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value) &&
    player1Input.value === 'Ena Bejtic'
  ) {
    player1Name.textContent = 'Ćoćkica'
    document.querySelector('.player1-input').classList.add('hidden')
    document.querySelector('.player1-input--name').classList.add('hidden')
    document.querySelector('.player2-input').classList.remove('hidden')
    document.querySelector('.player2-input--name').classList.remove('hidden')
    player1.classList.remove('active--player')
    player2.classList.add('active--player')
    document.querySelector('img[alt="player1-picture"]').src =
      './resources/IMG_4262.png'
  }
  if (
    player2Input.value !== '' &&
    /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value) &&
    player2Input.value === 'Ena Bejtic'
  ) {
    player2Name.textContent = 'Ćoćkica'
    document.querySelector('.player2-input').classList.add('hidden')
    document.querySelector('.player2-input--name').classList.add('hidden')
    game.classList.remove('hidden')
    resetScoreBtn.classList.remove('hidden')
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
    currentPlayer
    randomPlayerFunc()
    switchPlayer()
    document.querySelector('img[alt="player2-picture"]').src =
      './resources/IMG_4262.png'
  }
}

/* ---------- ADDING PLAYER NAMES FUNCTION----------*/

/* ---------- RESET GAME FUNCTION----------*/
const resetGame = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    switchPlayer()
  })
  // currentPlayer
  gameEnded = false
}
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
      // console.log(sequence)
      // if (player === 'X') {
      //   scores[0]++
      //   player1Score.textContent = `Score: ${scores[0]}`
      //   console.log(scores)
      // } else {
      //   scores[1]++
      //   player2Score.textContent = `Score: ${scores[1]}`
      //   console.log(scores)
      // }
      return true
    }
  }
  return false
}
/* ---------- CHECK WINNER FUNCTION---------- */

/* ---------- CHECK DRAW FUNCTION---------- */
const checkDraw = function () {
  return getEmptyCells().length === 0 && !checkWinner('X') && !checkWinner('O')
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
  if (currentPlayer === 'X' || randomPlayer === 1) {
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
  } else if (currentPlayer === 'O' || randomPlayer === 2) {
    player1.classList.remove('active--player')
    player2.classList.add('active--player')
  }
}

/* ---------- SWITCH PLAYER FUNCTION---------- */

/* ---------- DISPLAY MODAL FUNCTION---------- */
const displayModal = function (winner) {
  if (checkDraw(grid3x3)) {
    modalP.textContent = `It's draw!`
  } else {
    modalP.textContent = `Player ${winner} wins!`
  }
  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')
}
/* ---------- DISPLAY MODAL FUNCTION---------- */

function getEmptyCells() {
  let emptyCells = []
  grid3x3.forEach((cell, index) => {
    if (!cell.textContent) {
      emptyCells.push(index)
    }
  })
  return emptyCells
}

function performComputerMove() {
  let emptyCells = getEmptyCells()
  if (emptyCells.length > 0) {
    let randomCellIndex = Math.floor(Math.random() * emptyCells.length)
    grid3x3[emptyCells[randomCellIndex]].textContent = 'O'
    clickSound.currentTime = 0.05
    clickSound.play()
  }
}

// function mode1vPC(grid) {
//   resetGame(grid)
//   grid.forEach(function (gridEl, index) {
//     gridEl.addEventListener('click', function () {
//       if (!gridEl.textContent && !gameEnded) {
//         gridEl.textContent = 'X' // Player always moves with 'X' in PC mode

//         if (checkWinner('X')) {
//           scores[0]++
//           player1Score.textContent = `Score: ${scores[0]}`
//           gameEnded = true
//           displayModal('X')
//           resetGame(grid)
//         } else if (checkDraw(grid)) {
//           displayModal()
//           resetGame(grid)
//           gameEnded = true
//         } else {
//           // setTimeout(performComputerMove, 1000) // PC moves right after player
//           performComputerMove()
//           if (checkWinner('O')) {
//             scores[1]++
//             player2Score.textContent = `Score: ${scores[1]}`
//             gameEnded = true
//             displayModal('O')
//             resetGame(grid)
//           } else if (checkDraw(grid)) {
//             displayModal('Draw')
//             resetGame(grid)
//             gameEnded = true
//           }
//         }
//       }
//     })
//   })

//   if (randomPlayer === 2) {
//     // PC moves first if randomPlayer equals 2
//     setTimeout(performComputerMove, 1000)
//   }
// }
// mode1vPC(grid3x3)

const mode1v1Game = function (grid) {
  resetGame(grid3x3)
  grid.forEach(function (grid) {
    grid.addEventListener('click', function () {
      if (!grid.textContent && !gameEnded) {
        grid.textContent = currentPlayer

        if (checkWinner(currentPlayer)) {
          scores[currentPlayer === 'X' ? 0 : 1]++
          currentPlayer === 'X'
            ? (player1Score.textContent = `Score: ${scores[0]}`)
            : (player2Score.textContent = `Score: ${scores[1]}`)
          gameEnded = true
          displayModal(currentPlayer)
          randomPlayerFunc()
          resetGame(grid3x3)
        } else if (checkDraw()) {
          displayModal('Draw')
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
mode1v1Game(grid3x3)

// modal.classList.add('hidden')
// overlay.classList.remove('hidden')
