let data = null
let page = 1
let numPages = 0
let query = ''
let defaultQuery = 'mech'

const output = document.querySelector('#output')
const input = document.querySelector('#cInput')
const form = document.querySelector('#searchForm')
const defaultBtn = document.querySelector('#defaultBtn')

// access token US6hAHXoJtO5a7BM0xGQYiQJaxWvNr4Jvo
// access token USppIO2Ut3DwM6d6tIY9MGXyit9ZAdT72m
// curl -u {client_id}:{client_secret} -d grant_type=client_credentials https://us.battle.net/oauth/token
// curl -u a19ed0f786f4495b98d0b6d249063806:FDbRUwO5ado8vUq6fwJ0P3UXPXx7y24u -d grant_type=client_credentials https://us.battle.net/oauth/token
// client id a19ed0f786f4495b98d0b6d249063806
// client secret FDbRUwO5ado8vUq6fwJ0P3UXPXx7y24u

const load = () => {
    let baseURL = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US'
    let params = `&textFilter=${query}&page=${page}`
    let accessToken = '&access_token=USppIO2Ut3DwM6d6tIY9MGXyit9ZAdT72m'
    let fullURL = baseURL + params + accessToken
    console.log('%c ' + fullURL, 'font-weight: bold;')

    fetch(fullURL, {
        "method": "GET",
    })
    .then(response => {
        return response.json()
    })
    .then(response => {
        data = response
        numPages = data.pageCount
        display()
    })
    .catch(err => {
        console.log(err);
    });
}

const display = () => {
    console.log(data)

    output.innerHTML = ''

    // page numbers and info
    let pageInfo = document.createElement('div')
    pageInfo.className = 'pageInfo'
    pageInfo.innerHTML += `
    <p>${data.cardCount} cards - Page ${data.page} out of ${data.pageCount}</p>
    `
    for (let i = 0; i < numPages; i++) {
        if (i + 1 != page) {
            pageInfo.innerHTML += `<div class="pageIcon" id="${i + 1}">${i + 1}</div>`
        } else {
            pageInfo.innerHTML += `<div class="pageIcon pageIconSelected" id="${i + 1}">${i + 1}</div>`
        }
    }
    output.appendChild(pageInfo)

    let cardsArea = document.createElement('div')
    cardsArea.className = 'cardsArea'
    output.appendChild(cardsArea)

    // cards
    data.cards.forEach((element, index) => {
        cardsArea.innerHTML += `
        <div class="card" id="${index}">
            <p>${element.name} - Mana: ${element.manaCost}</p>
            <img src="${element.cropImage}">
        </div>`
    });

    // event listeners
    // page icons
    let pageIcons = [...document.querySelectorAll('.pageIcon')]
    pageIcons.forEach(el => {
        el.addEventListener('click', function () {
            page = this.id
            load()
        })
    })

    //cards 
    let cardList = [...document.querySelectorAll('.card')]
    cardList.forEach(el => {
        el.addEventListener('click', function () {
            // show full card
            clickCard(el.id)
        })
    })
}

const clickCard = (index) => {
    let fullWindow = document.createElement('div')
    fullWindow.className = 'fullWindow'
    fullWindow.innerHTML = `
        <img src="${data.cards[index].image}">
    `
    document.body.prepend(fullWindow)
    fullWindow.addEventListener('click', function() {
        document.body.removeChild(fullWindow)
    })
}

// search feature
form.onsubmit = (e) => {
    e.preventDefault()
    query = input.value
    page = 1
    load()
}

// default search
defaultBtn.onclick = () => {
    query = defaultQuery
    page = 1
    load()
}