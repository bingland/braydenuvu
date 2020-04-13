// header / subheader
const header = "Pizza Emporium"
const subheader = "Literal Objects"
document.querySelector('header h1').innerHTML = header
document.querySelector('header h2').innerHTML = subheader

// buttons
const buildPizzaBtn = document.getElementById('buildPizza')
const buildListBtn = document.getElementById('buildList')
// output
const output = document.querySelector('.output')

let pizza = {
    crust: '',
    topping: '',
    size: '',
    getVals: function () {
        pizza.crust = document.getElementById('thin').checked ? 'thin' : 'thick'
        pizza.topping = document.getElementById('sausage').checked ? 'sausage' : 'pepporoni'
        pizza.size = document.getElementById('small').checked ? 'small' : 'large'
    },
    buildPizza: function () {
        pizza.getVals()
        output.textContent = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese just for you :)`
    },
    buildList: function () {
        pizza.getVals()
        let flour = ((pizza.size == 'small') ? 1 : 2) * ((pizza.crust == 'thin') ? 1 : 2)
        output.textContent = `You will need to purchase ${flour} cup(s) of flour and 1 lb of ${pizza.topping}.`
    }
}

buildPizzaBtn.onclick = pizza.buildPizza
buildListBtn.onclick = pizza.buildList
