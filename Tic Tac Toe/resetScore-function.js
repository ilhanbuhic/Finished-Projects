/* ---------- RESET SCORE FUNCTION----------*/
const resetScore = function (grid) {
  grid.forEach(function (gridEl) {
    gridEl.textContent = ''
    scores = [0, 0]
    player1Score.textContent = 'Score: 0'
    player2Score.textContent = 'Score: 0'
  })
  randomPlayerFunc()
  switchPlayer()
  if (
    !gameEnded &&
    gameModePlaySelected === '1vsPC' &&
    currentPlayer === 'O' &&
    randomPlayer === 2
  ) {
    performComputerMove()
    currentPlayer = 'X'
    switchPlayer()
    console.log(currentPlayer, randomPlayer)
  }
}
/* ---------- RESET SCORE FUNCTION----------*/
