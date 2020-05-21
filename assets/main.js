const rollButton = document.querySelector('.roll-button')
const showRollsButton = document.querySelector('.show-all-rolls')
const diceResults = []
let total = document.querySelector('#total-rolls')
let userInput = document.querySelector('#number-of-dice')
let newTotal = 0
let allRolls = document.querySelector('#all-rolls')

rollButton.addEventListener("click", function () {
    
    // 1. Get the value of the input text box and assign it
    
    // 2. loop THAT number of times
    let counter = 0
    while(counter < userInput.value) {

        let diceRoll = Math.floor( Math.random() * 6 + 1);
        console.log(diceRoll)
        counter ++
        diceResults.push(diceRoll)
        newTotal += diceRoll
    }
        total.innerHTML = newTotal

    // 3. And each time "roll" randomly from one to six
    // loop a number of times equal to the number-of-dice
})


showRollsButton.addEventListener("click", function () {

    let index = 0
    let total = 0
    while (index < diceResults.length) {
        allRolls.innerHTML += '<li>' + diceResults[index] + '</li>';
            index += 1
    }
    console.log(total)
})