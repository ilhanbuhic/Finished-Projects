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
