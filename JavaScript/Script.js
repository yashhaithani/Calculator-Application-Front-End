let displayValue = '0';
let operator = null;
let operand1 = null;
let operand2 = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operand1 = null;
    operand2 = null;
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    operand1 = parseFloat(displayValue);
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    if (operator === null || operand1 === null) return;
    operand2 = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            if (operand2 === 0) {
                result = 'Error';
            } else {
                result = operand1 / operand2;
            }
            break;
        default:
            return;
    }
    displayValue = result.toString();
    operator = null;
    operand1 = result;
    operand2 = null;
    updateDisplay();
}
