let operator = "*"
let firstNumber = 1
let secondNumber = 0

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b 
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function operate(a,operator,b) {
    if (operator === "+") {
        return add(a,b)
    } else if (operator === "-") {
        return subtract(a,b)
    } else if (operator === "*") {
        return multiply(a,b)
    } else if (operator === "/") {
        return divide(a,b)
    }
}


const one = document.querySelector(".calculator-1")
const two = document.querySelector(".calculator-2")
const three = document.querySelector(".calculator-3")
const four = document.querySelector(".calculator-4")
const five = document.querySelector(".calculator-5")
const six = document.querySelector(".calculator-6")
const seven = document.querySelector(".calculator-7")
const eight = document.querySelector(".calculator-8")
const nine = document.querySelector(".calculator-9")
const zero = document.querySelector(".calculator-0")

one.addEventListener("click", () => updateDisplay("1"))
two.addEventListener("click", () => updateDisplay("2"))
three.addEventListener("click", () => updateDisplay("3"))
four.addEventListener("click", () => updateDisplay("4"))
five.addEventListener("click", () => updateDisplay("5"))
six.addEventListener("click", () => updateDisplay("6"))
seven.addEventListener("click", () => updateDisplay("7"))
eight.addEventListener("click", () => updateDisplay("8"))
nine.addEventListener("click", () => updateDisplay("9"))
zero.addEventListener("click", () => updateDisplay("0"))

function updateDisplay(toAdd) {
    if (resetDisplay === true) {
        const display = document.querySelector(".calculator-display")
        number = toAdd
        display.textContent = number
        resetDisplay = false
    } else {
        const display = document.querySelector(".calculator-display")
        let number = display.textContent
        number = number + toAdd
        if (number.length <= 12) {
            display.textContent = number
        } else {
            display.textContent = number.split("").slice(-12).join("")
        }
    }
    delNumber = true
    molt = false
    div = false
    adds = false
    sub = false
    // if (delNumber !== true) {
    //     del.disabled = true
    // } else {
    //     del.disabled = false
    // }
}


const moltiplication = document.querySelector(".calculator-moltiplication")
const division = document.querySelector(".calculator-division")
const addition = document.querySelector(".calculator-plus")
const subtraction = document.querySelector(".calculator--")
const equals = document.querySelector(".calculator-equal")

moltiplication.addEventListener("click", () => calculate("*"))
division.addEventListener("click", () => calculate("/"))
addition.addEventListener("click", () => calculate("+"))
subtraction.addEventListener("click", () => calculate("-"))
equals.addEventListener("click", () => equal(true))

let firstCalc = true
let result = 0
let resetDisplay = true
let equalPressed = false
let molt = false
let div = false
let adds = false
let sub = false
let delNumber = false

function calculate(strOperator) {
    if (molt !== true && div !== true && adds !== true && sub !== true) {
        if (firstCalc === true || equalPressed === true) {
            operator = strOperator
            const display = document.querySelector(".calculator-display")
            firstNumber = display.textContent
            resetDisplay = true
            firstCalc = false
            equalPressed = false
            delNumber = false
        } else {
            equal(false)
            resetDisplay = true
            firstNumber = result
            operator = strOperator
            delNumber = false
        }
        switch (strOperator){
            case "*":
                molt = true
                break;
            case "/":
                div = true
                break;
            case "+":
                adds = true
                break;
            case "-":
                sub = true
                break;
        }
    } else {
        operator = strOperator
    }
    // if (delNumber !== true) {
    //     del.disabled = true
    // } else {
    //     del.disabled = false
    // }
}

function equal(equalPresseds) {
    if (equalPressed === false && molt !== true && div !== true && adds !== true && sub !== true) {
        const display = document.querySelector(".calculator-display")
        secondNumber = display.textContent
        result = operate(Number(firstNumber), operator, Number(secondNumber)).toString()
        delNumber = false
        if (result.length <= 12) {
            display.textContent = result
        } else {
            if (12 - 1 - Number(result).toExponential(0).toString().length <= 12) {
                console.log(12 - 1 - Number(result).toExponential(0).toString().length)
                display.textContent = Number(result).toExponential(12 - 1 - Number(result).toExponential(0).toString().length)
            } else {
                display.textContent = Number(result).toExponential(0).toString().split("").slice(-12).join("")
            }
        }
        if (equalPresseds === true) {
            equalPressed = true
        } else {
            equalPressed = false
        }
        // if (delNumber !== true) {
        //     del.disabled = true
        // } else {
        //     del.disabled = false
        // }
    }
}


const del = document.querySelector(".calculator-DEL")
const ac = document.querySelector(".calculator-AC")

del.addEventListener("click", () => {
    if (delNumber === true) {
        const display = document.querySelector(".calculator-display")
        let number = display.textContent
        number = number.toString().split("").slice(0,-1).join("")
        display.textContent = number
    
        molt = false
        div = false
        adds = false
        sub = false       
    }
})

ac.addEventListener("click", () => {
    operator = "*"
    firstNumber = 1
    secondNumber = 0
    firstCalc = true
    result = 0
    resetDisplay = true
    equalPressed = false
    molt = false
    div = false
    adds = false
    sub = false
    delNumber = false
    const display = document.querySelector(".calculator-display")
    display.textContent = "0"
})