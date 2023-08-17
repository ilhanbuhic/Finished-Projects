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

/* ---------- INIT ----------*/

const init = function () {
  currentPlayer = 'X'
  randomPlayer
  gameEnded = false
  scores = [0, 0]
  document.querySelector('.player1-input--name').classList.remove('hidden')
  document.querySelector('.player2-input--name').classList.add('hidden')
}

// ************************ LJEP ZA POCETAK ************************ //

player2Input.classList.add('hidden')
document.querySelector('.player2-input').classList.add('hidden')
document.querySelector('.player2-input--name').classList.add('hidden')
gameModeBtn.classList.add('hidden')

// ************************ LJEP ZA POCETAK ************************ //

const randomPlayerFunc = () => {
  randomPlayer = Math.ceil(Math.random() * 2)
  if (randomPlayer === 1) {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
}

grid3x3.forEach(gridEl => {
  gridEl.addEventListener('click', function () {
    clickSound.currentTime = 0.09
    clickSound.play()
  })
})
/* ---------- INIT ----------*/

/* ---------- ADDING PLAYER NAMES FUNCTION----------*/

gameModeGrid3x3.addEventListener('click', function () {
  // const gameModeDifficultySelected = event.target.value
  gameModeGrid3x3.style.padding = '15px'
  gameModeGrid3x3.style.borderRadius = '10px'
  gameModeGrid3x3.style.background =
    'linear-gradient(90deg, rgba(182, 15, 253, 1) 0%, rgba(150, 24, 255, 1) 65%, rgba(104, 39, 252, 1) 100%)'
  clickSound.currentTime = 0.09
  clickSound.play()
  gameModeGrid3x3ClickCheck = true
  if (gameModeGrid3x3ClickCheck) {
    console.log('Checked')
    document.querySelector('.game-mode--play').classList.remove('hidden')
    gameModeBtn.classList.remove('hidden')
    document.querySelector('.modal-content').style.height = '470px'
  } else if (!gameModeGrid3x3ClickCheck) {
    document.querySelector('.game-mode--play').classList.add('hidden')
    gameModeBtn.classList.add('hidden')
  }
})

gameModePlayDP.addEventListener('change', function (event) {
  gameModePlaySelected = event.target.value

  if (gameModeGrid3x3ClickCheck && gameModePlaySelected === '1vs1') {
    document.querySelector('.game-mode--difficulty').classList.add('hidden')
    document.querySelector('.modal-content').style.height = '450px'
    // gameModePlaySelected = '1vs1'
  } else if (gameModeGrid3x3ClickCheck && gameModePlaySelected === '1vsPC') {
    document.querySelector('.game-mode--difficulty').classList.remove('hidden')
    document.querySelector('.modal-content').style.height = '580px'
    gameModePlaySelected = '1vsPC'
  }
})

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

gameModeBtn.addEventListener('click', function () {
  clickSound.currentTime = 0.09
  clickSound.play()
  if (gameModeGrid3x3ClickCheck && gameModePlaySelected === '1vs1') {
    modeModal.style.display = 'none'
    document.body.classList.add('glassmorphism')

    init()
    mode1v1Game(grid3x3)
  } else {
    console.log(gameModeGrid3x3ClickCheck, gameModePlaySelected)
  }
})
