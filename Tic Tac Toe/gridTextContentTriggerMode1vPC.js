const gridTextContentTriggerMode1vPC = function (grid, textContent) {
  if (
    gameModePlaySelected === '1vsPC' &&
    gameModeDifficultySelected === 'easy'
  ) {
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
            // setTimeout(performComputerMove, 1000) // PC moves right after player
            performComputerMove()
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
        }
      })
    })
  } else {
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
}
