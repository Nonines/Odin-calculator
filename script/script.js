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
  displayValue = displyArea.textContent += text;
}

const displyArea = document.querySelector("#display textarea");
const allButtons = document.querySelectorAll(".container button")
// const operators = document.querySelectorAll("#operators button");
// const numberButtons = document.querySelectorAll("#num-buttons button");

let displayValue;

for (let btn of allButtons) {
  btn.addEventListener("click", () => appendDisplay(btn.textContent));
}

// for (let btn of numberButtons) {
//   btn.addEventListener("click", () => appendDisplay(btn.textContent));
// }

// for (let btn of operators) {
//   btn.addEventListener("click", () => appendDisplay(btn.textContent));
// }
