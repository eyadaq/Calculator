let prevInput = '';
let operation = '';
let currentInput = '';

function updateDisplay(value) {
    const display = document.querySelector('.result');
    display.textContent = value;
}

function handleInput(input) {
    currentInput += input;
    if (currentInput.length > 10) {
        currentInput = currentInput.slice(0, 10); // Limit input length
        alert("Input limit reached");
    }
    updateDisplay(currentInput);
}

function handleOperation(op) {
    if (prevInput !== '' && currentInput !== '') {
        calculate();
    }
    operation = op;
    prevInput = currentInput || prevInput;
    currentInput = '';
    updateDisplay('');
}


function clearCalculator() {
    prevInput = '';
    operation = '';
    currentInput = '';
    updateDisplay('');
}

function calculate() {
    if (prevInput === '' || currentInput === '' || operation === '') return;

    let result;
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
            break;
        default: return;
    }

    prevInput = result.toString();
    updateDisplay(prevInput);
    currentInput = '';
    operation = '';
}
