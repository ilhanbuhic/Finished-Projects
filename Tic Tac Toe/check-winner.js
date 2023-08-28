/* ---------- CHECK WINNER FUNCTION---------- */
const checkWinner = function (player) {
  for (const sequence of winningSequence) {
    const [a, b, c] = sequence
    if (
      grid3x3[a].textContent === player &&
      grid3x3[b].textContent === player &&
      grid3x3[c].textContent === player
    ) {
      return true
    }
  }
  return false
}
/* ---------- CHECK WINNER FUNCTION---------- */
