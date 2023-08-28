/* ---------- RANDOM PLAYER FUNCTION----------*/
const randomPlayerFunc = () => {
  randomPlayer = Math.ceil(Math.random() * 2)
  if (randomPlayer === 1) {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
}
/* ---------- RANDOM PLAYER FUNCTION----------*/
