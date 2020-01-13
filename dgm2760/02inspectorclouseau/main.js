const header = "Inspector Clouseau"
const subheader = "\"This IZ Chief Inspector Clouseau speaking on the pheaun\""
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

const xSize = window.innerWidth
const ySize = window.innerHeight
document.querySelector('#windowSize').innerHTML = `${xSize} pixels wide and ${ySize} pixels tall.`

const xOffset = window.pageXOffset
const yOffset = window.pageYOffset
document.querySelector('#windowOffset').innerHTML = `${xOffset} and ${yOffset}`

const url = window.location
document.querySelector('#pageURL').innerHTML = `${url}`

const title = document.title
document.querySelector('#documentTitle').innerHTML = `${title}`

const lastModified = document.lastModified
document.querySelector('#lastUpdated').innerHTML = lastModified