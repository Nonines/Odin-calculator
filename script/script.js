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
  displyArea.textContent += text;
}

const displyArea = document.querySelector("#display textarea");
const numberButtons = document.querySelectorAll("#num-buttons button");

for (let btn of numberButtons) {
  btn.addEventListener("click", () => appendDisplay(btn.textContent));
}
