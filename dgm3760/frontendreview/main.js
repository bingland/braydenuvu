let data = null

const output = document.querySelector('#output')

// access token US6hAHXoJtO5a7BM0xGQYiQJaxWvNr4Jvo

const init = () => {
    let baseURL = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US'
    let params = '&minionType=beast&page=2'
    let accessToken = '&access_token=USO9BHzET8t2u4jjILrXkXmCjmho1gDOMD'
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
        display()
    })
    .catch(err => {
        console.log(err);
    });
}

const display = () => {
    console.log(data)

    // meta into
    output.innerHTML += `
    <p>${data.cardCount} cards - Page ${data.page} out of ${data.pageCount}</p>
    `
    data.cards.forEach(element => {
        output.innerHTML += `
        <div class="card">
            <p>${element.name} - Mana: ${element.manaCost}</p>
            <img src="${element.cropImage}">
        </div>`
    });
}

init()

// curl -u a19ed0f786f4495b98d0b6d249063806:FDbRUwO5ado8vUq6fwJ0P3UXPXx7y24u -d grant_type=client_credentials https://us.battle.net/oauth/token