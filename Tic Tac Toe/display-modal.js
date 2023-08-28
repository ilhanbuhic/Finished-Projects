/* ---------- DISPLAY MODAL FUNCTION---------- */
const displayModal = function (winner) {
  if (checkDraw(grid3x3)) {
    modalP.textContent = `It's draw!`
  } else {
    modalP.textContent = `Player ${winner} wins!`
  }
  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')
}
/* ---------- DISPLAY MODAL FUNCTION---------- */
