// header / subheader
const header = "Fortune Teller"
const subheader = "Switch Statements"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader


let fortunes = [
    ' you will be eaten alive by a squid!',
    ' you will find an unexpected surprise on your doorstep!',
    ' you will accidentally make the biggest mistake of your life!',
    ' you will get a gift from somebody you thought hated you!',
    ' you will be inspired by something, and start a new hobby!'
]

const randMonth = Math.ceil(Math.random() * 12)
const randDate = Math.ceil(Math.random() * 30)
const randFortune = Math.ceil(Math.random() * 5)

document.getElementById('output').innerHTML = `On ${getMonth()} ${randDate}, ${getFortune()}`

// functions

function getMonth () {
    switch (randMonth) {
        case 1:
            return 'January'
            break
        case 2:
            return 'February'
            break
        case 3:
            return 'March'
            break
        case 4:
            return 'April'
            break
        case 5:
            return 'May'
            break
        case 6:
            return 'June'
            break
        case 7:
            return 'July'
            break
        case 8:
            return 'August'
            break
        case 9:
            return 'September'
            break
        case 10:
            return 'October'
            break
        case 11:
            return 'November'
            break
        case 12:
            return 'December'
            break
        default: 
            return 'January'
            break
    }
}

function getFortune () {
    switch(randFortune) {
        case 1:
            return fortunes[0]
            break
        case 2:
            return fortunes[1]
            break
        case 3:
            return fortunes[2]
            break
        case 4:
            return fortunes[3]
            break
        case 5:
            return fortunes[4]
            break
        default: 
            return fortunes[1]
            break
    }
}