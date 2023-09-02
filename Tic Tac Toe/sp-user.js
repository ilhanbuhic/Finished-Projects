const spPer = function (playerNumber, img) {
  if (gameModePlaySelected === '1vs1') {
    if (img && playerNumber === 1) {
      player1Name.textContent = 'Ćoćkica'
      player1Input.classList.add('hidden')
      player1InputName.classList.add('hidden')
      player2Input.classList.remove('hidden')
      player2InputName.classList.remove('hidden')
      player1.classList.remove('active--player')
      player2.classList.add('active--player')
      document.querySelector('img[alt="player1-picture"]').src = img
    }
    if (img && playerNumber === 2) {
      player2Name.textContent = 'Ćoćkica'
      player2Input.classList.add('hidden')
      player2InputName.classList.add('hidden')
      game.classList.remove('hidden')
      resetScoreBtn.classList.remove('hidden')
      player1.classList.add('active--player')
      player2.classList.remove('active--player')
      currentPlayer = randomPlayerFunc()
      switchPlayer()
      document.querySelector('img[alt="player2-picture"]').src = img
    }
  } else if (gameModePlaySelected === '1vsPC') {
    if (img && playerNumber === 1) {
      player1Name.textContent = 'Ćoćkica'
      player1Input.classList.add('hidden')
      player1InputName.classList.add('hidden')
      document.querySelector('img[alt="player1-picture"]').src = img
    }
  }
}
// test