// header / subheader
const header = "The Aborist"
const subheader = "Events and Arrays"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// item list
let itemList = ['Berry Bush', 'Carrot', 'Apple Tree']

// output
const myConsole = document.querySelector('#list ul')
const elementsLong = document.querySelector('#lengthDisplay #length')
const errorConsole = document.querySelector('#errorConsole')

// add trees
const addToEnd = document.querySelector('#addToEnd')
addToEnd.onclick = () => {
    // add a redwood tree to the end
    itemList.push('Redwood Tree')
    refresh()
}

const addToStart = document.querySelector('#addToStart')
addToStart.onclick = () => {
    // add a pear to the start
    itemList.unshift('Pear')
    refresh()
}

// remove trees
const removeFirst = document.querySelector('#removeFirst')
removeFirst.onclick = () => {
    if (itemList.length > 0) {
        itemList.shift()
        refresh()
    }
    else {
        errorConsole.innerHTML = '<div class="outputItem error">Error: Array is empty.</div>'
    }
}

const removeSecond = document.querySelector('#removeSecond')
removeSecond.onclick = () => {
    if (itemList.length > 0) {
        itemList.splice(1, 1)
        refresh()
    }
    else {
        errorConsole.innerHTML = '<div class="outputItem error">Error: Array is empty.</div>'
    }
}

const removeLast = document.querySelector('#removeLast')
removeLast.onclick = () => {
    if (itemList.length > 0) {
        itemList.pop()
        refresh()
    }
    else {
        errorConsole.innerHTML = '<div class="outputItem error">Error: Array is empty.</div>'
    }
}

// manipulate trees
const sortAZ = document.querySelector('#sortAZ')
sortAZ.onclick = () => {
    itemList.sort()
    refresh()
}

const allLower = document.querySelector('#allLower')
allLower.onclick = () => {
    itemList = itemList.map(item => item.toLowerCase())
    refresh()
}

// get tree value
const threeName = document.querySelector('#threeName')
threeName.onclick = () => {
    if (itemList[2]) { 
        errorConsole.innerHTML = `<div class="outputItem">${itemList[2]}</div>`
    } else {
        errorConsole.innerHTML = `<div class="outputItem error">Error: Item doesn't exist!</div>`
    }
}

const fourName = document.querySelector('#fourName')
fourName.onclick = () => {
    if (itemList[3]) { 
        errorConsole.innerHTML = `<div class="outputItem">${itemList[3]}</div>`
    } else {
        errorConsole.innerHTML = `<div class="outputItem error">Error: Item doesn't exist!</div>`
    }
}

// functions
const refresh = () => {
    // refresh count 
    elementsLong.textContent = itemList.length

    // refresh items in list
    let output = ''
    for (let item of itemList) {
        output += `<li class="listItem">${item}</li>`
    }
    myConsole.innerHTML = output

    // clear console 
    errorConsole.innerHTML = ''
}
refresh()