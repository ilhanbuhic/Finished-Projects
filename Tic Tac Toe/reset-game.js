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
