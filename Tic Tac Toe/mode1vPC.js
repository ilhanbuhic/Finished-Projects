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
  player2Name.textContent = 'PC'
  document.addEventListener('keyup', function (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (player1Input.value === '') {
        alert('You have to add a name')
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        alert(`Enter full name`)
      } else if (
        player1Input.value !== '' &&
        player1Input.value !== 'Ena Bejtic' &&
        /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)
      ) {
        player1Name.textContent = player1Input.value
        document.querySelector('.player1-input').classList.add('hidden')
        document.querySelector('.player1-input--name').classList.add('hidden')
        player1.classList.remove('active--player')
        game.classList.remove('hidden')
        currentPlayer = 'X'
        switchPlayer()
      } else {
        ena()
      }
    }
  })
  resetGame(grid)
  currentPlayer = 'X'
  console.log(currentPlayer)
  grid.forEach(function (gridEl, index) {
    gridEl.addEventListener('click', function () {
      if (!gridEl.textContent && !gameEnded) {
        gridEl.textContent = 'X'

        if (checkWinner('X')) {
          scores[0]++
          player1Score.textContent = `Score: ${scores[0]}`
          gameEnded = true
          displayModal('X')
          resetGame(grid)
        } else if (checkDraw(grid)) {
          displayModal()
          resetGame(grid)
          gameEnded = true
        } else {
          // setTimeout(performComputerMove, 1000) // PC moves right after player
          performComputerMove()
          if (checkWinner('O')) {
            scores[1]++
            player2Score.textContent = `Score: ${scores[1]}`
            gameEnded = true
            displayModal('O')
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

  // if (randomPlayer === 2) {
  //   // PC moves first if randomPlayer equals 2
  //   setTimeout(performComputerMove, 1000)
  // }
}
