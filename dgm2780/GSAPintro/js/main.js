// get nav button
const hamburger = $('.hamburger')
// get hiddenNav 
const hiddenNav = $('.hiddenNav')

hamburger.click(() => {
    hiddenNav.toggle()
})