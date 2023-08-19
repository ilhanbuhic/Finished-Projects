// const playerFillInput = function (
//   playerInput,
//   playerName,
//   playerInputName,
//   player1,
//   player2
// ) {
//   if (playerInput.value === '') {
//     playerInput.placeholder = 'You have to add a name'
//   } else if (!/^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(playerInput.value)) {
//     playerInput.value = ''
//     playerInput.placeholder = 'Enter full name'
//   } else if (
//     playerInput.value !== '' &&
//     playerInput.value !== 'Ena Bejtic' &&
//     /^[A-Za-z]{3,}(?: [A-Za-z]{3,})+$/.test(playerInput.value)
//   ) {
//     playerName.textContent = playerInput.value
//     playerInput.classList.add('hidden')
//     playerInputName.classList.add('hidden')
//     player1.classList.remove('active--player')
//     player2.classList.add('active--player')
//   } else {
//     person()
//   }
// }
