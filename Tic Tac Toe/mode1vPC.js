/* ---------- Easy mode ---------- */
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
/* ---------- Easy mode ---------- */

/* ---------- Hard mode ---------- */
function minimax(board, depth, isMaximizing) {
  const scores = {
    X: -1,
    O: 1,
    draw: 0,
  }

  if (checkWinner('X')) {
    return { score: scores.X - depth }
  }
  if (checkWinner('O')) {
    return { score: scores.O + depth }
  }
  if (checkDraw()) {
    return { score: scores.draw }
  }

  const emptyCells = getEmptyCells()

  if (isMaximizing) {
    let bestScore = -Infinity
    let bestMove

    for (const cellIndex of emptyCells) {
      board[cellIndex].textContent = 'O'
      const score = minimax(board, depth + 1, false).score
      board[cellIndex].textContent = ''
      if (score > bestScore) {
        bestScore = score
        bestMove = cellIndex
      }
    }

    return { score: bestScore, index: bestMove }
  } else {
    let bestScore = Infinity
    let bestMove

    for (const cellIndex of emptyCells) {
      board[cellIndex].textContent = 'X'
      const score = minimax(board, depth + 1, true).score
      board[cellIndex].textContent = '' // Undo the move
      if (score < bestScore) {
        bestScore = score
        bestMove = cellIndex
      }
    }

    return { score: bestScore, index: bestMove }
  }
}
/* ---------- Hard mode ---------- */

function mode1vPC(grid) {
  player1.classList.add('active--player')
  player2Name.textContent = 'PC'
  document.addEventListener('keyup', function (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (player1Input.value === '') {
        player1Input.placeholder = 'You have to add a name'
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        player1Input.value = ''
        player1Input.placeholder = 'Enter full name'
      } else if (
        player1Input.value.toLowerCase() === normalCase
          ? checkPer(player1Input.value.toLowerCase(), false) === normalCase
          : checkPer(player1Input.value.toLowerCase(), true) === reversedCase
      ) {
        spPer()
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        player2InputName.remove('hidden')
        currentPlayer = 'X'
        gridTextContentTriggerMode1vPC(grid, '❣️')
      } else {
        player1Name.textContent = player1Input.value
        player1Input.classList.add('hidden')
        player1InputName.classList.add('hidden')
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        switchPlayer()
        gridTextContentTriggerMode1vPC(grid, 'X')
      }
    }
  })

  // if (randomPlayer === 2) {
  //   // PC moves first if randomPlayer equals 2
  //   setTimeout(performComputerMove, 1000)
  // }
}
