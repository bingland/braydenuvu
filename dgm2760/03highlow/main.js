// header / subheader
const header = "Guessing Game"
const subheader = "Loops"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// game
// global vars
const gameover = document.querySelector('.gameover')
const playAgain = document.querySelector('.playAgain button')

const con = document.querySelector('.console p')

const guessField = document.querySelector('guessValue form input')
// let guess = document.querySelector('.guessValue form input').value
const guessButton = document.querySelector('.guessButton button')
const guessCount = document.querySelector('.guessCount')

let answer = Math.floor(Math.random() * 15) + 1

// game logic
