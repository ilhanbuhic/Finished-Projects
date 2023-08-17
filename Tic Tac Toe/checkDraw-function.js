/* ---------- CHECK DRAW FUNCTION---------- */
const checkDraw = function () {
  return getEmptyCells().length === 0 && !checkWinner('X') && !checkWinner('O')
}
/* ---------- CHECK DRAW FUNCTION---------- */
