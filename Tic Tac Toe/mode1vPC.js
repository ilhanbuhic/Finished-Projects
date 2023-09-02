function mode1vPC(grid) {
  const fetchImage = async name => {
    const queryName = name.replace(/ /g, '+')
    try {
      const response = await fetch(
        `https://seashell-app-8jltn.ondigitalocean.app/api/picture?name=${queryName}`,
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

  player1.classList.add('active--player')
  player2Name.textContent = 'PC'
  document.addEventListener('keyup', async e => {
    e.preventDefault()
    if (e.key === 'Enter') {
      const image = await fetchImage(player1Input.value)
      if (image) {
        const dataURL = `data:image/jpeg;base64,${image}`
        spPer(1, dataURL)
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        player2InputName.remove('hidden')
        currentPlayer = 'X'
        gridTextContentTriggerMode1vPC(grid, '❣️')
      } else if (player1Input.value === '') {
        player1Input.placeholder = 'Morate dodati ime'
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        player1Input.value = ''
        player1Input.placeholder = 'Unesite ime i prezime'
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
}
