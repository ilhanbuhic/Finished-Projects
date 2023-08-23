// Minimax algorithm function
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
      board[cellIndex].textContent = '' // Undo the move
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

// Event listener for "Start" button

function mode1vPCHard(grid) {
  player1.classList.add('active--player')
  player2Name.textContent = 'PC'
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      if (player1Input.value === '') {
        alert('You have to add a name')
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        alert(`Enter full name`)
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
        nesto(grid, '❣️')
      } else {
        player1Name.textContent = player1Input.value
        player1Input.classList.add('hidden')
        player1InputName.classList.add('hidden')
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        switchPlayer()
        nesto(grid, 'X')
      }
    }
  })
}

const nesto = function (grid, textContent) {
  resetGame(grid)
  grid.forEach(function (gridEl) {
    gridEl.addEventListener('click', function () {
      if (!gridEl.textContent && !gameEnded) {
        gridEl.textContent = textContent
        if (checkWinner(textContent)) {
          scores[0]++
          player1Score.textContent = `Score: ${scores[0]}`
          gameEnded = true
          displayModal(player1Name.textContent)
          resetGame(grid)
        } else if (checkDraw(grid)) {
          displayModal()
          resetGame(grid)
          gameEnded = true
        } else {
          const bestMove = minimax(grid, 0, true).index
          grid[bestMove].textContent = 'O'
        }
        if (checkWinner('O')) {
          loseSound.currentTime = 0.0
          loseSound.play()
          scores[1]++
          player2Score.textContent = `Score: ${scores[1]}`
          gameEnded = true
          displayModal('PC')
          resetGame(grid)
        } else if (checkDraw(grid)) {
          displayModal('Draw')
          resetGame(grid)
          gameEnded = true
        }
      }
    })
  })
}

// Event listener for grid cell click
//   grid.forEach(cell => {
//     cell.addEventListener('click', () => {
//       if (cell.textContent === '' && !checkWinner('X') && !checkWinner('O')) {
//         cell.textContent = 'X'
//         if (checkWinner('X')) {
//           displayModal('X')
//         } else if (checkDraw()) {
//           displayModal('draw')
//         } else {
//           const bestMove = minimax(grid, 0, true).index
//           grid[bestMove].textContent = 'O'
//           if (checkWinner('O')) {
//             displayModal('O')
//           } else if (checkDraw()) {
//             displayModal('draw')
//           }
//         }
//       }
//     })
//   })
// }
