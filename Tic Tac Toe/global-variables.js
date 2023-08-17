let currentPlayer
let randomPlayer
let gameEnded
let scores
let checkPlayerFillInputs = false

player2Input.classList.add('hidden')
document.querySelector('.player2-input').classList.add('hidden')
document.querySelector('.player2-input--name').classList.add('hidden')
gameModeBtn.classList.add('hidden')

document.querySelector('.players').classList.add('hidden')
document.querySelector('.game-mode--play').classList.add('hidden')
document.querySelector('.game-mode--difficulty').classList.add('hidden')
resetScoreBtn.classList.add('hidden')

grid3x3.forEach(gridEl => {
  gridEl.addEventListener('click', function () {
    clickSound.currentTime = 0.09
    clickSound.play()
  })
})
