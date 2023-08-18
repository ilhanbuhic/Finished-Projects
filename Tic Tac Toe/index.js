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
const init = function () {
  currentPlayer = 'X'
  randomPlayer
  gameEnded = false
  scores = [0, 0]
  document.querySelector('.players').classList.remove('hidden')
  document.querySelector('.player1-input--name').classList.remove('hidden')
  document.querySelector('.player2-input--name').classList.add('hidden')
}

gameModeGrid3x3.addEventListener('click', function () {
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
  } else if (gameModeGrid3x3ClickCheck && gameModePlaySelected === '1vsPC') {
    document.querySelector('.game-mode--difficulty').classList.remove('hidden')
    document.querySelector('.modal-content').style.height = '580px'
    gameModePlaySelected = '1vsPC'
  }
})

restartBtn.addEventListener('click', function () {
  resetGame(grid3x3)
  overlay.classList.add('hidden')
  modal.classList.add('hidden')
})
resetScoreBtn.addEventListener('click', function () {
  resetScore(grid3x3)
})

gameModeBtn.addEventListener('click', function () {
  clickSound.currentTime = 0.09
  clickSound.play()
  if (gameModeGrid3x3ClickCheck && gameModePlaySelected === '1vs1') {
    modeModal.style.display = 'none'
    document.body.classList.add('glassmorphism')
    document.querySelector('.players').style.display = 'flex'
    init()
    mode1v1Game(grid3x3)
  }
})

gameModeBtn.addEventListener('click', function () {
  if (gameModePlaySelected === '1vsPC') {
    modeModal.style.display = 'none'
    document.body.classList.add('glassmorphism')
    document.querySelector('.players').style.display = 'flex'
    player2Img.src = './resources/player-picture_4.png'

    init()
    mode1vPC(grid3x3)
  }
})
