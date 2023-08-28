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
