const mode1v1Game = function (grid) {
  document.addEventListener('keyup', function (e) {
    e.preventDefault()
    if (e.key === 'Enter') {
      if (player1Input.value === '') {
        alert('You have to add a name')
        player1Input.placeholder = 'You have to add a name'
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        alert(`Enter full name`)
        player1Input.value = ''
        player1Input.placeholder = 'Enter full name'
      } else if (
        player1Input.value !== '' &&
        player1Input.value !== 'Ena Bejtic' &&
        /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)
      ) {
        player1Name.textContent = player1Input.value
        document.querySelector('.player1-input').classList.add('hidden')
        document.querySelector('.player1-input--name').classList.add('hidden')
        document.querySelector('.player2-input').classList.remove('hidden')
        document
          .querySelector('.player2-input--name')
          .classList.remove('hidden')
        player1.classList.remove('active--player')
        player2.classList.add('active--player')
      } else {
        ena()
      }
      if (player2Input.value === '') {
        alert('You have to add a name')
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)) {
        alert('Enter full name')
      } else if (
        player2Input.value !== '' &&
        player2Input.value !== 'Ena Bejtic' &&
        /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)
      ) {
        player2Name.textContent = player2Input.value
        document.querySelector('.player2-input').classList.add('hidden')
        document.querySelector('.player2-input--name').classList.add('hidden')
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        player1.classList.add('active--player')
        player2.classList.remove('active--player')
        currentPlayer
        randomPlayerFunc()
        switchPlayer()
      } else {
        ena()
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
          displayModal(currentPlayer)
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
