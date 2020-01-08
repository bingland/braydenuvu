const header = "Joe's Bed and Breakfast"
const subheader = "Breakfast from the heart"

document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

const name = prompt("What's your name?")
const greeting = `Hello ${name}, welcome to the best Bed and Breakfast in America!`
document.querySelector('.inserts p').innerHTML = greeting

const date = new Date()
const ourDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
document.querySelector(".inserts h1").innerHTML += ourDate