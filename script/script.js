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
    case "÷":
      solution = divide(num1, num2);
      break;
    case "x":
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
  if (inputArea.textContent === "") {
    return;
  } else if (calculate()) {
    inputArea.textContent = solutionArea.textContent;
  } else {
    for (let opr of operators) {
      const text = inputArea.textContent;
      if (text.includes(opr) && opr !== text[text.length - 1]) {
        inputArea.textContent += input;
        return;
      }
    }
  }
  inputArea.textContent += input;
}

function calculate () {
  for (let opr of operators) {
    if (inputArea.textContent.includes(opr) && opr !== inputArea.textContent[inputArea.textContent.length - 1]) {
      userValueA = inputArea.textContent.split(opr)[0];
      userValueB = inputArea.textContent.split(opr)[1];
      const solution = operate(opr, userValueA, userValueB);
      solutionArea.textContent = solution;
      return true;
    }
  }
}

function clearAll () {
  inputArea.textContent = "";
  solutionArea.textContent = 0;
}

function clearOne () {
  const text = inputArea.textContent;
  inputArea.textContent = text.substring(0, text.length - 1);
}

const inputArea = document.querySelector("#display #expression-display");
const solutionArea = document.querySelector("#display #solution-display");
const numButtons = document.querySelectorAll(".num-button");
const oprButtons = document.querySelectorAll(".operator");
const eqlButton = document.querySelector("#equals");
const clearAllButton = document.querySelector("#clear-all");
const clearOneButton = document.querySelector("#clear-one");

const operators = ["+", "-", "x", "÷"];
solutionArea.textContent = 0;
inputArea.textContent = "";
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
