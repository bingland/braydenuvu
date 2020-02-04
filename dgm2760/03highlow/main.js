// header / subheader
const header = "Guessing Game"
const subheader = "Loops"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader


// * game *
// global vars
// game over box
const gameoverDiv = document.querySelector('.game .gameover')
const playAgain = document.querySelector('.playAgain button')
const finalScore = document.querySelector('.finalScoreDiv .finalScore')
const award = document.querySelector('.award')

// console
const con = document.querySelector('.console p')

// guessing area and score count
const guessInput = document.querySelector('form .guessValue')
const guessField = document.querySelector('form .guessValue input')
const guessButton = document.querySelector('.guessButton button')
const guessCount = document.querySelector('.guessCount')

let answer = Math.floor(Math.random() * 15) + 1
console.log(`answer: ${answer}`)


// * game logic *
// input field on submit
guessInput.addEventListener('submit', function(e){
    e.preventDefault()
    sumbitAnswer()
})

// button on submit
guessButton.addEventListener('click', function(e){
    e.preventDefault()
    sumbitAnswer()
})

// function to submit the users answer
const sumbitAnswer = () => {
    let guess = Number(guessField.value)

    // check if valid guess or not
    if(!isNaN(guess) && guess >= 1 && guess <= 15) {
        // compare the guess with the answer
        if (guess == answer) {
            con.innerHTML = 'Right answer! Good job!'
            // game over
            gameover()
        } else if (guess > answer) {
            con.innerHTML = 'Your guess was too high, try again'
        } else if (guess < answer) {
            con.innerHTML = 'Your guess was too low, try again'
        } else {
            console.log('error')
            con.innerHTML = 'Error'
        }

        increaseAttempts()

    } else {
        con.innerHTML = 'Invalid guess, pick a number between 1 and 15'
    }

    // clear guess input box 
    guessField.value = ''
}

// functino to increase attempts
const increaseAttempts = () => {
    let curGuess = Number(guessCount.innerHTML)
    guessCount.innerHTML = curGuess + 1
}

const gameover = () => {
    gameoverDiv.style.display = 'block'

    // display final score
    let curGuess = Number(guessCount.innerHTML)
    finalScore.innerHTML = curGuess + 1

    // display medal
    let medal = 'bronze'
    if (curGuess + 1 <= 3) {
        medal = 'gold'
    } else if (curGuess + 1 <= 6){
        medal = 'silver'
    }
    award.innerHTML = `<image src="./img/${medal}medal.png" alt="medal">`

    // lock text input field and guess button
    guessField.disabled = true
    guessButton.disabled = true

}

// play again button, recalibrates game
playAgain.addEventListener('click', function() {
    gameoverDiv.style.display = 'none'

    // unlock text input field and guess button
    guessField.disabled = false
    guessButton.disabled = false

    //reset guess count
    guessCount.innerHTML = '0'

    //reset answer
    answer = Math.floor(Math.random() * 15) + 1
    console.log(`new answer: ${answer}`)

    //reset console text
    con.innerHTML = 'Choose a number between 1 and 15!'
})