// const mode1v1Game = function (grid) {
//   document.addEventListener('keyup', function (e) {
//     e.preventDefault()
//     if (e.key === 'Enter') {
//       if (player1Input.value === '') {
//         alert('You have to add a name')
//         player1Input.placeholder = 'You have to add a name'
//       } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
//         alert(`Enter full name`)
//         player1Input.value = ''
//         player1Input.placeholder = 'Enter full name'
//       } else if (
//         player1Input.value.toLowerCase() === normalCase
//           ? checkPer(player1Input.value.toLowerCase(), false) === normalCase
//           : checkPer(player1Input.value.toLowerCase(), true) === reversedCase
//       ) {
//         spPer()
//         game.classList.remove('hidden')
//         resetScoreBtn.classList.remove('hidden')
//         player2InputName.remove('hidden')
//       } else {
//         player1Name.textContent = player1Input.value
//         player1Input.classList.add('hidden')
//         player1InputName.classList.add('hidden')
//         player2Input.classList.remove('hidden')
//         player2InputName.classList.remove('hidden')
//         player1.classList.remove('active--player')
//         player2.classList.add('active--player')
//       }
//       if (player2Input.value === '') {
//         alert('You have to add a name')
//         player2Input.placeholder = 'You have to add a name'
//       } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)) {
//         alert(`Enter full name`)
//         player2Input.value = ''
//         player2Input.placeholder = 'Enter full name'
//       } else if (
//         player2Input.value.toLowerCase() === normalCase
//           ? checkPer(player2Input.value.toLowerCase(), false) === normalCase
//           : checkPer(player2Input.value.toLowerCase(), true) === reversedCase
//       ) {
//         spPer()
//         game.classList.remove('hidden')
//         resetScoreBtn.classList.remove('hidden')
//         player2InputName.remove('hidden')
//       } else {
//         player2Name.textContent = player2Input.value
//         player2Input.classList.add('hidden')
//         player2InputName.classList.add('hidden')
//         game.classList.remove('hidden')
//         resetScoreBtn.classList.remove('hidden')
//         player1.classList.add('active--player')
//         player2.classList.remove('active--player')
//         currentPlayer
//         randomPlayerFunc()
//         switchPlayer()
//       }
//     }
//   })
//   resetGame(grid3x3)
//   grid.forEach(function (grid) {
//     grid.addEventListener('click', function () {
//       if (!grid.textContent && !gameEnded) {
//         grid.textContent = currentPlayer

//         if (checkWinner(currentPlayer)) {
//           scores[currentPlayer === 'X' ? 0 : 1]++
//           currentPlayer === 'X'
//             ? (player1Score.textContent = `Score: ${scores[0]}`)
//             : (player2Score.textContent = `Score: ${scores[1]}`)
//           gameEnded = true
//           displayModal(
//             currentPlayer === 'X'
//               ? player1Name.textContent
//               : player2Name.textContent
//           )
//           randomPlayerFunc()
//           resetGame(grid3x3)
//         } else if (checkDraw()) {
//           displayModal('Draw')
//           resetGame(grid3x3)
//           gameEnded = true
//         } else {
//           if (currentPlayer === 'X') {
//             currentPlayer = 'O'
//             player1.classList.remove('active--player')
//             player2.classList.add('active--player')
//           } else {
//             currentPlayer = 'X'
//             player1.classList.add('active--player')
//             player2.classList.remove('active--player')
//           }
//         }
//       }
//     })
//   })
// }

const mode1v1Game = function (grid) {
  document.addEventListener('keyup', function (e) {
    e.preventDefault()

    if (e.key === 'Enter') {
      if (player1Input.value === '') {
        alert('You have to add a name')
        player1Input.placeholder = 'You have to add a name'
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player1Input.value)) {
        alert('Enter full name')
        player1Input.value = ''
        player1Input.placeholder = 'Enter full name'
      } else if (
        player1Input.value.toLowerCase() === normalCase ||
        checkPer(player1Input.value.toLowerCase(), true) === reversedCase
      ) {
        spPer()
        player2InputName.classList.remove('hidden')
        currentPlayer = 'X'
      } else {
        player1Name.textContent = player1Input.value
        player1Input.classList.add('hidden')
        player1InputName.classList.add('hidden')
        player2Input.classList.remove('hidden')
        player2InputName.classList.remove('hidden')
        player1.classList.remove('active--player')
        player2.classList.add('active--player')
      }

      if (player2Input.value === '') {
        alert('You have to add a name')
        player2Input.placeholder = 'You have to add a name'
      } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(player2Input.value)) {
        alert('Enter full name')
        player2Input.value = ''
        player2Input.placeholder = 'Enter full name'
      } else if (
        player2Input.value.toLowerCase() === normalCase ||
        checkPer(player2Input.value.toLowerCase(), true) === reversedCase
      ) {
        spPer()
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
      } else {
        player2Name.textContent = player2Input.value
        player2Input.classList.add('hidden')
        player2InputName.classList.add('hidden')
        game.classList.remove('hidden')
        resetScoreBtn.classList.remove('hidden')
        player1.classList.add('active--player')
        player2.classList.remove('active--player')
        currentPlayer
        randomPlayerFunc()
        switchPlayer()
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
