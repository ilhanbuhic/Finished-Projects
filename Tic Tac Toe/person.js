// const spPer = function () {
//   if (
//     player1Input.value.toLowerCase() === normalCase ||
//     player1Input.value.toLowerCase().split(' ').reverse().join(' ') ===
//       reversedCase
//   ) {
//     player1Name.textContent = 'Ćoćkica'
//     player1Input.classList.add('hidden')
//     player1InputName.classList.add('hidden')
//     player2Input.classList.remove('hidden')
//     player2InputName.classList.remove('hidden')
//     player1.classList.remove('active--player')
//     player2.classList.add('active--player')
//     document.querySelector('img[alt="player1-picture"]').src =
//       './resources/IMG_4262.png'
//     console.log('Dobro je')
//   }
//   if (
//     player2Input.value.toLowerCase() === normalCase ||
//     player2Input.value.toLowerCase().split(' ').reverse().join(' ') ===
//       reversedCase
//   ) {
//     player2Name.textContent = 'Ćoćkica'
//     player2Input.classList.add('hidden')
//     player2InputName.classList.add('hidden')
//     game.classList.remove('hidden')
//     resetScoreBtn.classList.remove('hidden')
//     player1.classList.add('active--player')
//     player2.classList.remove('active--player')
//     currentPlayer
//     randomPlayerFunc()
//     switchPlayer()
//     document.querySelector('img[alt="player2-picture"]').src =
//       './resources/IMG_4262.png'
//     console.log('Dobro je')
//   }
// }

const spPer = function () {
  if (gameModePlaySelected === '1vs1') {
    if (
      player1Input.value.toLowerCase() === normalCase ||
      checkPer(player1Input.value.toLowerCase(), true) === reversedCase
    ) {
      player1Name.textContent = 'Ćoćkica'
      player1Input.classList.add('hidden')
      player1InputName.classList.add('hidden')
      player2Input.classList.remove('hidden')
      player2InputName.classList.remove('hidden')
      player1.classList.remove('active--player')
      player2.classList.add('active--player')
      document.querySelector('img[alt="player1-picture"]').src =
        './resources/IMG_4262.png'
      console.log('bla1')
    }
    if (
      player2Input.value.toLowerCase() === normalCase ||
      checkPer(player2Input.value.toLowerCase(), true) === reversedCase
    ) {
      player2Name.textContent = 'Ćoćkica'
      player2Input.classList.add('hidden')
      player2InputName.classList.add('hidden')
      game.classList.remove('hidden')
      resetScoreBtn.classList.remove('hidden')
      player1.classList.add('active--player')
      player2.classList.remove('active--player')
      currentPlayer = randomPlayerFunc()
      switchPlayer()
      document.querySelector('img[alt="player2-picture"]').src =
        './resources/IMG_4262.png'
      console.log('bla2')
    }
  } else if (gameModePlaySelected === '1vsPC') {
    if (
      player1Input.value.toLowerCase() === normalCase ||
      checkPer(player1Input.value.toLowerCase(), true) === reversedCase
    ) {
      player1Name.textContent = 'Ćoćkica'
      player1Input.classList.add('hidden')
      player1InputName.classList.add('hidden')
      document.querySelector('img[alt="player1-picture"]').src =
        './resources/IMG_4262.png'
    }
  }
}

const checkPer = function (name, reverse = false) {
  let enaArr = []
  for (const ena of name.split(' ')) {
    enaArr.push(ena.toLowerCase())
  }
  let result = enaArr.join(' ')

  if (reverse) {
    result = enaArr.reverse().join(' ')
  }

  return result
}
const normalCase = checkPer('Ena Bejtic')
const reversedCase = checkPer('Bejtic Ena', true)
