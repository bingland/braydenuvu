// get nav button
const hamburger = $('.hamburger')
// get hiddenNav 
const hiddenNav = $('.hiddenNav')

hamburger.click(() => {
    hiddenNav.toggle()
})

// fade in for header background
const landing = $('header, .steps')
gsap.from(landing, {duration: 2, opacity: 0, ease: 'power1'})

// fade in for header text
const landingHeader = $('.headerText h1')
const landingText = $('.headerText p, .headerText button')
gsap.from(landingHeader, {duration: 1, delay: 0.5, opacity: 0, y: 20})
gsap.from(landingText, {duration: 1, delay: 1.5, opacity: 0, y: 20})

// hover onto bottom two panels
$('.biPanel').hover( function () {
    console.log('hi lol')
})