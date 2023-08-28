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
