// api base link
const api = 'https://baconipsum.com/api/?'

// forms / inputs
const all_meat = document.querySelector('#all-meat')
const meat_and_filler = document.querySelector('#meat-and-filler')
const paras = document.querySelector('#paragraphs')
const sentences = document.querySelector('#sentences')
const lorem = document.querySelector('#start-with-lorem')

// start button
const btn = document.querySelector('input[type="submit"]')
// output 
const output = document.querySelector('.output')

// settings object
let settings = {
    type: 'meat-and-filler',
    paras: null,
    sentences: null,
    lorem: false
}

const getLorem = () => {
    
    // * update settings object by checking form
    // settings.type
    if(all_meat.checked || meat_and_filler.checked) {
        settings.type = all_meat.checked ? 'all-meat' : 'meat-and-filler'
    } else {
        settings.type = 'meat-and-filler'
    }

    // settings.paras
    if (isNaN(paras.value)) {
        // not a number
        settings.paras = null
    } else if (paras.value < 1) {
        // not a valid number
        settings.paras = null
    } else {
        // valid
        settings.paras = paras.value
    }

    // settings.sentences
    if (isNaN(sentences.value)) {
        // not a number
        settings.sentences = null
    } else if (sentences.value < 1) {
        // not a valid number
        settings.sentences = null
    } else {
        // valid
        settings.sentences = sentences.value
    }

    // settings.lorem
    if (lorem.checked) {
        settings.lorem = true
    }


    // * make the api call with an updated api link
    let link = api + `type=${settings.type}`
    if (settings.paras != null) { link += `&paras=${settings.paras}` }
    if (settings.sentences != null) { link += `&sentences=${settings.sentences}` }
    if (settings.lorem != false) { link += `&start-with-lorem=1` }

    try {
        fetch(link)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                output.innerHTML = ''
                data.forEach((para) => output.innerHTML += `<p>${para}</p>`)
            })
    }
    catch (err) {
        output.innerHTML = '<h1>An error occured!</h1>'
    }
}

btn.onclick = function (e) {
    e.preventDefault()
    getLorem()
}