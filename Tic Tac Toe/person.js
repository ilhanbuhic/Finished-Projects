const ena = function () {
  if (
    player1Input.value.toLowerCase() === normalCase ||
    player1Input.value.toLowerCase().split(' ').reverse().join(' ') ===
      reversedCase
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
    console.log('Dobro je')
  }
  if (
    player2Input.value.toLowerCase() === normalCase ||
    player2Input.value.toLowerCase().split(' ').reverse().join(' ') ===
      reversedCase
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
    console.log('Dobro je')
  }
}

const checkForEna1 = function (name) {
  let enaArr = []
  for (const ena of name.split(' ')) {
    enaArr.push(ena.toLowerCase())
  }
  let result = enaArr.join(' ')
  return result
}

const checkForEna2 = function (name) {
  let enaArr = []
  for (const ena of name.split(' ')) {
    enaArr.push(ena.toLowerCase())
  }
  let reversedResult = enaArr.reverse().join(' ')
  return reversedResult
}

const normalCase = checkForEna1('Ena Bejtic')
const reversedCase = checkForEna2('Bejtic Ena')
console.log('Ena Bejtic'.toLowerCase() === normalCase)
console.log('Ena Bejtic'.toLowerCase() === reversedCase)
