/* ---------- Perform Computer Move ---------- */
function getEmptyCells() {
  let emptyCells = []
  grid3x3.forEach((cell, index) => {
    if (!cell.textContent) {
      emptyCells.push(index)
    }
  })
  return emptyCells
}

function performComputerMove() {
  let emptyCells = getEmptyCells()
  if (emptyCells.length > 0) {
    let randomCellIndex = Math.floor(Math.random() * emptyCells.length)
    grid3x3[emptyCells[randomCellIndex]].textContent = 'O'
    clickSound.currentTime = 0.05
    clickSound.play()
  }
}
/* ---------- Perform Computer Move ---------- */
