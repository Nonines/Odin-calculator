function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function divide (a, b) {
  return a / b;
}

function multiply (a, b) {
  return a * b;
}

function operate (operator, num1, num2) {
  let solution;
  num1 = Number(num1);
  num2 = Number(num2);

  switch(operator) {
    case "+":
      solution = add(num1, num2);
      break;
    case "-":
      solution = subtract(num1, num2);
      break;
    case "/":
      solution = divide(num1, num2);
      break;
    case "*":
      solution = multiply(num1, num2);
      break;
  }

  return solution;
}

function appendDisplay (input) {
  let currentSolution = 0;
  for (let operator of operators) {
    // If a second operator is inputted, calculate the current expression and update the display with the result.
    if (displyArea.textContent.includes(operator) && operators.includes(input)) {
      currentOperator = operator;
      leftOperand = displyArea.textContent.split(operator)[0];
      rightOperand = displyArea.textContent.split(operator)[1];

      currentSolution = operate(currentOperator, leftOperand, rightOperand);
      displyArea.textContent = currentSolution;

      nextOperator = input;
    }
  }

  displyArea.textContent += input;
}

const displyArea = document.querySelector("#display textarea");
const allButtons = document.querySelectorAll(".container button");

const operators = ["+", "-", "*", "/"];
// let displayValue;
let leftOperand;
let rightOperand;
let currentOperator;
let nextOperator;

for (let btn of allButtons) {
  btn.addEventListener("click", () => appendDisplay(btn.textContent));
}
