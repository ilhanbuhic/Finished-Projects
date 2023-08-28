const fetchImage = async name => {
  const queryName = name.replace(/ /g, '+')
  try {
    const response = await fetch(
      `https://tic-tac-toe-backend-ouxc.onrender.com/api/picture?name=${queryName}`,
      {
        method: 'GET',
      }
    )
    const data = await response.json()

    return data.picture
  } catch (error) {
    console.error('Error fetching picture:', error)
  }
}

const mode1v1Game = function (grid) {
  document.addEventListener('keyup', async e => {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (player1Input.value) {
        const image = await fetchImage(player1Input.value)
        if (image) {
          const dataURL = `data:image/jpeg;base64,${image}`
          spPer(1, dataURL)
          player2InputName.classList.remove('hidden')
          // currentPlayer = 'X'
          randomPlayerFunc()
          gridTextContentTriggerMode1vPC(grid, '❣️')
        } else if (player1Input.value === '') {
          player1Input.placeholder = 'You have to add a name'
        } else if (
          !/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)
        ) {
          player1Input.value = ''
          player1Input.placeholder = 'Enter full name'
        } else {
          gridTextContentTriggerMode1vPC(grid, 'X')
          player1Name.textContent = player1Input.value
          player1Input.classList.add('hidden')
          player1InputName.classList.add('hidden')
          player2Input.classList.remove('hidden')
          player2InputName.classList.remove('hidden')
          player1.classList.remove('active--player')
          player2.classList.add('active--player')
        }
      }
      if (player2Input.value) {
        const image2 = await fetchImage(player2Input.value)
        if (image2) {
          const dataURL = `data:image/jpeg;base64,${image2}`
          spPer(2, dataURL)
          game.classList.remove('hidden')
          resetScoreBtn.classList.remove('hidden')
          randomPlayerFunc()
          gridTextContentTriggerMode1vPC(grid, '❣️')
        } else if (player2Input.value === '') {
          player2Input.placeholder = 'You have to add a name'
        } else if (
          !/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)
        ) {
          player2Input.value = ''
          player2Input.placeholder = 'Enter full name'
        } else {
          gridTextContentTriggerMode1vPC(grid, 'X')
          player2Name.textContent = player2Input.value
          player2Input.classList.add('hidden')
          player2InputName.classList.add('hidden')
          game.classList.remove('hidden')
          resetScoreBtn.classList.remove('hidden')
          player1.classList.add('active--player')
          player2.classList.remove('active--player')
          randomPlayerFunc()
          switchPlayer()
        }
      }
    }
  })

  resetGame(grid3x3)
  grid.forEach(function (grid) {
    grid.addEventListener('click', function () {
      if (!grid.textContent && !gameEnded) {
        grid.textContent = currentPlayer

        if (checkWinner(currentPlayer)) {
          scores[currentPlayer === 'X' ? 0 : 1]++
          currentPlayer === 'X'
            ? (player1Score.textContent = `Score: ${scores[0]}`)
            : (player2Score.textContent = `Score: ${scores[1]}`)
          gameEnded = true
          displayModal(
            currentPlayer === 'X'
              ? player1Name.textContent
              : player2Name.textContent
          )
          randomPlayerFunc()
          resetGame(grid3x3)
        } else if (checkDraw()) {
          displayModal('Draw')
          resetGame(grid3x3)
          gameEnded = true
        } else {
          if (currentPlayer === 'X') {
            currentPlayer = 'O'
            player1.classList.remove('active--player')
            player2.classList.add('active--player')
          } else {
            currentPlayer = 'X'
            player1.classList.add('active--player')
            player2.classList.remove('active--player')
          }
        }
      }
    })
  })
}
