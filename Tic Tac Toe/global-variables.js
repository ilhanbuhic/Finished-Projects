let currentPlayer
let randomPlayer
let gameEnded
let scores

player2Input.classList.add('hidden')
player2InputName.classList.add('hidden')
gameModeBtn.classList.add('hidden')

document.querySelector('.players').style.display = 'none'
document.querySelector('.game-mode--play').classList.add('hidden')
document.querySelector('.game-mode--difficulty').classList.add('hidden')
resetScoreBtn.classList.add('hidden')

grid3x3.forEach(gridEl => {
  gridEl.addEventListener('click', function () {
    clickSound.currentTime = 0.05
    clickSound.play()
  })
})
