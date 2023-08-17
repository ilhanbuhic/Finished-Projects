/* ------ GAME MODE GRID SELECTOR ------ */
const modeModal = document.querySelector('.modeModal')
document.querySelector('.game-mode--play').classList.add('hidden')
document.querySelector('.game-mode--difficulty').classList.add('hidden')
const gameModeGrid3x3 = document.querySelector('.game-mode--grid3x3')
let gameModeGrid3x3ClickCheck = false
const gameModePlayDP = document.getElementById('gameModePlay')
const gameModeDifficultyDP = document.getElementById('gameModeDifficulty')
let gameModePlaySelected = '1vs1'
/* ------ GAME MODE GRID SELECTOR ------ */

/* ------ GRID SELECTOR ------ */
const gridMain = document.querySelector('.gameGrid')
const grid3x3 = document.querySelectorAll('.gameGrid > div')
const clickSound = document.querySelector('.clickSound')
const game = document.querySelector('.game')
game.classList.add('hidden')
/* ------ GRID SELECTOR ------ */
