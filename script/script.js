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

function appendDisplay (text) {
  if (operators.includes(text)) {
    currentOperator = text;
    leftOperand = displyArea.textContent;

  } else if (text === "AC") {
    displayValue = displyArea.textContent = "";
    return;

  }
  displayValue = displyArea.textContent += text;
}

const displyArea = document.querySelector("#display textarea");
const allButtons = document.querySelectorAll(".container button");

const operators = ["+", "-", "*", "/"];
let displayValue;
let leftOperand;
let rightOperand;
let currentOperator;

for (let btn of allButtons) {
  btn.addEventListener("click", () => appendDisplay(btn.textContent));
}
