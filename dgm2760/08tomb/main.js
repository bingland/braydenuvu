// header / subheader
const header = "Grant's Tomb"
const subheader = "Literal Objects"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// output area
const app = document.querySelector('.app')

const question = {
    text: 'What does "HTTP" stand for?',
    answers: [
        'Hyper Tea Transfer Party',
        'Hysterical Tea Time Practice',
        'HyperText Tool Protocol',
        'HyperText Transfer Protocol'
    ],
    correct: 4,
    print: () => {
        // print question
        app.innerHTML += `
            <div class="text">${question.text}</div>
            <button id="1">${question.answers[0]}</button>
            <button id="2">${question.answers[1]}</button>
            <button id="3">${question.answers[2]}</button>
            <button id="4">${question.answers[3]}</button>
            <div class="console"></div>
        `
        const buttons = [...document.getElementsByTagName('button')]
        buttons.forEach(button => {
            button.onclick = question.check
        })

    },
    check: (e) => {
        const guess = e.target.id
        const output = document.querySelector('.console')
        if (guess == question.correct) {
            output.innerHTML = '<div class="correct">Correct!!!</div>'
        } else {
            output.innerHTML = '<div class="incorrect">Try again</div>'
        }
    }
}

question.print()