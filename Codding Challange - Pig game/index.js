'use strict'

// Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions

let scores, currentScore, activePlayer, playing

function init() {
    scores = [0, 0]
    currentScore = 0
    activePlayer = Math.round(Math.random() * 1)
    // activePlayer = 0
    playing = true
  
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
  
    diceEl.classList.add('hidden')
    player0El.classList.remove(`player--winner`)
    player1El.classList.remove(`player--winner`)
    if (activePlayer === 0) {
      player0El.classList.add(`player--active`)
      player1El.classList.remove(`player--active`)
    } else {
      player0El.classList.remove(`player--active`)
      player1El.classList.add(`player--active`)
    }
  }
  init()
  
