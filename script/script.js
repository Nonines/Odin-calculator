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

function appendNum (input) {
  if (inputArea.textContent === "0") {
    inputArea.textContent = input;
  } else {
    inputArea.textContent += input;
  }
}

function appendOpr (input) {
  for (let operator of operators)  {
    if (inputArea.textContent.includes(operator)) {
      return;
    }
  }
  inputArea.textContent += input;
}

function calculate () {
  for (let operator of operators) {
    if (inputArea.textContent.includes(operator)) {
      userValueA = inputArea.textContent.split(operator)[0];
      userValueB = inputArea.textContent.split(operator)[1];
      const solution = operate(operator, userValueA, userValueB);
      exprArea.textContent = solution;

    }
  }
}

function clearAll () {
  inputArea.textContent = 0;
  exprArea.textContent = "";
}

function clearOne () {
  const text = inputArea.textContent;
  inputArea.textContent = text.substring(0, text.length - 1);
}

const inputArea = document.querySelector("#display #expression-display");
inputArea.textContent = 0;
const exprArea = document.querySelector("#display #input-display");
const numButtons = document.querySelectorAll(".container #num-buttons button");
const oprButtons = document.querySelectorAll(".container #operators button");
const eqlButton = document.querySelector("#equals");
const clearAllButton = document.querySelector("#clear-all");
const clearOneButton = document.querySelector("#clear-one");

const operators = ["+", "-", "*", "/"];
// let displayValue;
let userValueA;
let userValueB;
let currentOperator;
let nextOperator;

for (let btn of numButtons) {
  btn.addEventListener("click", () => appendNum(btn.textContent));
}

for (let btn of oprButtons) {
  btn.addEventListener("click", () => appendOpr(btn.textContent));
}

eqlButton.addEventListener("click", calculate);

clearAllButton.addEventListener("click", clearAll);

clearOneButton.addEventListener("click", clearOne);
