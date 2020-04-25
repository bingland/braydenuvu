// get nav button
const hamburger = $('.hamburger')
// get hiddenNav 
const hiddenNav = $('.hiddenNav')

hamburger.click(() => {
    hiddenNav.toggle()
})

// GSAP ASSIGNMENT

// fade in for header background
const landing = $('header, .steps')
gsap.from(landing, {duration: 2, opacity: 0, ease: 'power1'})

// fade in for header text
const landingHeader = $('.headerText h1')
const landingText = $('.headerText p, .headerText button')
gsap.from(landingHeader, {duration: 1, delay: 0.5, opacity: 0, y: 20})
gsap.from(landingText, {duration: 1, delay: 1.5, opacity: 0, y: 20})

// hover onto "how it works" icons
const stepImages = $('.stepImage').toArray()
console.log(stepImages)
stepImages.forEach((myimg, index) => {
    $(myimg).hover(function () {
        // hover on
        gsap.to(myimg, {duration: 0.5, y: -5, ease: 'power3'})
    },
    function () {
        // hover out
        gsap.to(myimg, {duration: 0.5, y: 5, ease: 'power3'})
    })
})