const ena = function () {
  if (
    player1Input.value !== '' &&
    /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value) &&
    player1Input.value === 'Ena Bejtic'
  ) {
    player1Name.textContent = 'Ćoćkica'
    document.querySelector('.player1-input').classList.add('hidden')
    document.querySelector('.player1-input--name').classList.add('hidden')
    document.querySelector('.player2-input').classList.remove('hidden')
    document.querySelector('.player2-input--name').classList.remove('hidden')
    player1.classList.remove('active--player')
    player2.classList.add('active--player')
    document.querySelector('img[alt="player1-picture"]').src =
      './resources/IMG_4262.png'
  }
  if (
    player2Input.value !== '' &&
    /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value) &&
    player2Input.value === 'Ena Bejtic'
  ) {
    player2Name.textContent = 'Ćoćkica'
    document.querySelector('.player2-input').classList.add('hidden')
    document.querySelector('.player2-input--name').classList.add('hidden')
    game.classList.remove('hidden')
    resetScoreBtn.classList.remove('hidden')
    player1.classList.add('active--player')
    player2.classList.remove('active--player')
    currentPlayer
    randomPlayerFunc()
    switchPlayer()
    document.querySelector('img[alt="player2-picture"]').src =
      './resources/IMG_4262.png'
  }
}

const checkForEna = function (name) {
  let enaArr = []
  for (const ena of name.split(' ')) {
    enaArr.push(ena.toLowerCase())
  }
  let result = enaArr.join(' ')
  let reversedResult = enaArr.reverse().join(' ')
  return [result, reversedResult]
}
const [normalCase, reversedCase] = checkForEna('Ena Bejtic')
console.log(normalCase, reversedCase)
