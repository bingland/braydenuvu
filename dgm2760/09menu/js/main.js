const smallNavArea = document.querySelector('#smallNavArea')
const navItems = document.querySelectorAll('#primaryNavigation li a')

let ul = document.createElement('ul')

navItems.forEach(item => {
    let li = document.createElement('li')
    let a = document.createElement('a')
    a.setAttribute('href', item.getAttribute('href'))
    a.innerHTML = item.innerHTML

    // is this the right way to do this? 
    // i can't help but feel like there's a more efficient way to write this.
    // if you could let me know in the comments for the assignment on canvas, that would be great. 
    li.appendChild(a)
    ul.appendChild(li)
})

smallNavArea.appendChild(ul)