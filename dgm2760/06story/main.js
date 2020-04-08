// header / subheader
const header = "Nonsense Story"
const subheader = "String Manipulation"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// global arrays
let nouns, adjs, verbs = []

// textareas
const nounBox = document.getElementById('nounBox')
const adjBox = document.getElementById('adjBox')
const verbBox = document.getElementById('verbBox')
// button
const button = document.getElementById('getButton')
// output
const output = document.getElementById('output')

// functions
const genStory = () => {
    nouns = nounBox.value.split(' ').map(word => word.toLowerCase())
    adjs = adjBox.value.split(' ').map(word => word.toLowerCase())
    verbs = verbBox.value.split(' ').map(word => word.toLowerCase())

    output.innerHTML = `
        Once upon a time there were four <span>${getRandItem(adjs)}</span> <span>${pluralize(getRandItem(nouns))}</span> named Flopsy, Mopsy, Cotton-tail and Peter.<br>
        They lived with their Mother underneath a <span>${getRandItem(nouns)}</span> near a <span>${getRandItem(adjs)}</span> <span>${getRandItem(nouns)}</span>.<br>
        Now, my dears, said <span>${getRandItem(adjs)}</span> Mrs. Rabbit, you may go over the <span>${getRandItem(nouns)}</span> or around the <span>${getRandItem(nouns)}</span>,<br>
        but do not go into Mr. McGregor's <span>${getRandItem(nouns)}</span>, your Father had an accident there and he was put in a <span>${getRandItem(nouns)}</span> by Mrs. McGregor.<br>
        Now <span>${getRandItem(verbs)}</span> along, and don't get into mischief. I am going <span>${ing(getRandItem(verbs))}</span>.<br>
    `
}


const pluralize = (word) => {
    return `${word}s`
}
const ing = (word) => {
    return `${word}ing`
}
const getRandItem = (arr) => {
    let index = Math.floor((Math.random() * arr.length))
    let value = arr[index]
    
    // remove the value from global array
    if (nouns.indexOf(value) != -1) {
        nouns = nouns.filter(word => word != value)
    }
    if (adjs.indexOf(value) != -1) {
        adjs = adjs.filter(word => word != value)
    }
    if (verbs.indexOf(value) != -1) {
        verbs = verbs.filter(word => word != value)
    }

    return value
}

button.onclick = genStory