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
