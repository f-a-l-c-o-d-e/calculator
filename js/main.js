let operator = "*"
let firstNumber = 1
let secondNumber = 0
let result = 0
let resetDisplay = true
let equalPressed = true
let operatorIsActive = false
let delNumber = false
const maxDigit = 12
const display = document.querySelector(".calculator-display")


document.addEventListener("keydown", event => {
    switch (event.code) {
        case "Numpad1":
            updateDisplay("1")
            break;
        case "Numpad2":
            updateDisplay("2")
            break;
        case "Numpad3":
            updateDisplay("3")
            break;
        case "Numpad4":
            updateDisplay("4")
            break;
        case "Numpad5":
            updateDisplay("5")
            break;
        case "Numpad6":
            updateDisplay("6")
            break;
        case "Numpad7":
            updateDisplay("7")
            break;
        case "Numpad8":
            updateDisplay("8")
            break;
        case "Numpad9":
            updateDisplay("9")
            break;
        case "Numpad0":
            updateDisplay("0")
            break;
        case "NumpadSubtract":
            calculate("-")
            break;
        case "NumpadAdd":
            calculate("+")
            break;
        case "NumpadDivide":
            calculate("/")
            break;
        case "NumpadMultiply":
            calculate("*")
            break;
        case "NumpadDecimal":
            float()
            break;
        case "NumpadEnter":
            equal(true)
            break;
        case "Backspace":
            cancel()
            break;
        case "Delete":
            reset()
            break;
    }
})

const calculator = document.querySelector(".calculator")

calculator.addEventListener("click", event => {
    console.log(event.target.id)
    switch (event.target.id) {
        case "one":
            updateDisplay("1")
            break;
        case "two":
            updateDisplay("2")
            break;
        case "three":
            updateDisplay("3")
            break;
        case "four":
            updateDisplay("4")
            break;
        case "five":
            updateDisplay("5")
            break;
        case "six":
            updateDisplay("6")
            break;
        case "seven":
            updateDisplay("7")
            break;
        case "eight":
            updateDisplay("8")
            break;
        case "nine":
            updateDisplay("9")
            break;
        case "zero":
            updateDisplay("0")
            break;
        case "subtraction":
            calculate("-")
            break;
        case "addition":
            calculate("+")
            break;
        case "division":
            calculate("/")
            break;
        case "multiplication":
            calculate("*")
            break;
        case "dot":
            float()
            break;
        case "equal":
            equal(true)
            break;
        case "DEL":
            cancel()
            break;
        case "AC":
            reset()
            break;
    }
})

function operate(a,operator,b) {
    let result = 0
    if (operator === "+") {
        result = a + b
    } else if (operator === "-") {
        result = a-b
    } else if (operator === "*") {
        result = a * b
    } else if (operator === "/") {
        result = a / b
    } else {
        console.log("Something goes wrong in the operate function")
    }
    return result
}

function updateDisplay(toAdd) {
    if (resetDisplay === true) {
        let number = toAdd
        display.textContent = number
        resetDisplay = false
    } else {
        let number = display.textContent
        number = number + toAdd
        if (number.length <= maxDigit) {
            display.textContent = number
        } else {
            display.textContent = number.split("").slice(-maxDigit).join("")
        }
    }
    delNumber = true
    operatorIsActive = false
}

function calculate(strOperator) {
    if (operatorIsActive === false) {
        if (equalPressed === true) {
            operator = strOperator
            firstNumber = display.textContent
            resetDisplay = true
            equalPressed = false
            delNumber = false
        } else {
            equal(false)
            resetDisplay = true
            firstNumber = result
            operator = strOperator
            delNumber = false
        }
        operatorIsActive = true
    } else {
        operator = strOperator
    }
}

function equal(equalPresseds) {
    if (equalPressed === false && operatorIsActive === false) {
        secondNumber = display.textContent
        result = operate(Number(firstNumber), operator, Number(secondNumber)).toString()
        delNumber = false
        if (result.length <= maxDigit) {
            display.textContent = result
        } else {
            if (maxDigit - 1 - Number(result).toExponential(0).toString().length <= maxDigit) {
                console.log(maxDigit - 1 - Number(result).toExponential(0).toString().length)
                display.textContent = Number(result).toExponential(maxDigit - 1 - Number(result).toExponential(0).toString().length)
            } else {
                display.textContent = Number(result).toExponential(0).toString().split("").slice(-maxDigit).join("")
            }
        }
        if (equalPresseds === true) {
            equalPressed = true
        } else {
            equalPressed = false
        }
    }
}

function cancel() {
    if (delNumber === true) {
        let number = display.textContent
        number = number.toString().split("").slice(0,-1).join("")
        display.textContent = number
        operatorIsActive = false   
    }
}

function reset() {
    operator = "*"
    firstNumber = 1
    secondNumber = 0
    firstCalc = true
    result = 0
    resetDisplay = true
    equalPressed = false
    operatorIsActive = false
    delNumber = false
    display.textContent = "0"
}

function float() {
    if (!display.textContent.toString().split("").includes(".")) {
        updateDisplay(".")
    }
}