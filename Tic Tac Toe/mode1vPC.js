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

function mode1vPC(grid) {
  player1.classList.add('active--player')
  player2Name.textContent = 'PC'
  document.addEventListener('keyup', function (e) {
    e.preventDefault()
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

const gridTextContentTriggerMode1vPC = function (grid, textContent) {
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
}
