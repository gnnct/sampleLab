function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        // Display the result
        displayResult(result);

//        displayResult(add(num1, num2), "addition");
//        displayResult(substract(num1, num2), "subtraction");
//        displayResult(divide(num1, num2), "division");

    } else {
        displayResult('Please enter valid numbers');
    }
}

function add(a, b) {
    debugger;
    return a + b;
}

function substract(a, b) {
    debugger;
    return a - b;
}

function divide(a, b) {
    debugger;
    return a / b;
}
function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
