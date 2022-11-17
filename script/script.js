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

  return Number(solution.toFixed(3));
}

function appendNum (input) {
  if (inputArea.textContent === "0") {
    inputArea.textContent = input;
  } else {
    inputArea.textContent += input;
  }
}

function appendOpr (input) {

  // Don't append operator if input area is empty
  if (inputArea.textContent === "") {
    return;

    // Attempt to evaluate current inputted values before appending operator
  } else if (calculate()) {
    inputArea.textContent = solutionArea.textContent;
    inputArea.textContent += input;
    return;

    // Don't append if the last character inputted was an operator
  } else if (operators.includes(inputArea.textContent[inputArea.textContent.length - 1]))  {
    return;

    // Append the inputted operator if the previous clauses are false
  } else {
    inputArea.textContent += input;
  }
}

function calculate () {
  for (let opr of operators) {

    // Only attempt to evaluate when there are operators present but the last character is not an operator
    if (inputArea.textContent.includes(opr) && operators.includes(inputArea.textContent[inputArea.textContent.length - 1]) === false) {

      userValueA = inputArea.textContent.split(opr)[0];
      userValueB = inputArea.textContent.split(opr)[1];

      // If the first operand is negative, adjust splitting logic to accomodate
      if (inputArea.textContent[0] === "-" && opr === "-") {
        userValueA = "-" + inputArea.textContent.split(opr)[1];
        userValueB = inputArea.textContent.split(opr)[2];
      }

      // Quit evaluation if any of the operands remain undefined
      if (!userValueB || !userValueA) {
        return false;
      }

      // Otherwise call the operate function and display the result on the screen
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

function addDecimal() {
  const text = inputArea.textContent;

  // If the last inputted character is a decimal/operator, stop the function
  if (operators.includes(text[text.length - 1]) || text[text.length - 1] === ".") {
    return;
  }

  // If there's an operator in the display
  for (let opr of operators) {
    if (text.includes(opr)) {

      // Split the expression by the operator
      let operands = text.split(opr);
      for (let char of operands) {

        // And then check if there's an already inputted decimal in each operand by splitting with "."
        if (char.split(".").length < 2) {

          // If an operand without a decimal exists, then append a decimal to the screen
          inputArea.textContent += ".";
          return;
        }
      }

      // If there is no operator and there's already a decimal, stop the function
    } else if (text.includes(".")) {
      return;
    }
  }

  // If the other checks don't end the function, add a decimal
  inputArea.textContent += ".";
}

const inputArea = document.querySelector("#display #expression-display");
const solutionArea = document.querySelector("#display #solution-display");
const numButtons = document.querySelectorAll(".num-button");
const oprButtons = document.querySelectorAll(".operator");
const eqlButton = document.querySelector("#equals");
const clearAllButton = document.querySelector("#clear-all");
const clearOneButton = document.querySelector("#clear-one");
const decimalButton = document.querySelector("#decimal");

const operators = ["+", "x", "÷", "-"];

solutionArea.textContent = 0;
inputArea.textContent = "";

let userValueA;
let userValueB;
let decimalIsValid = true;

for (let btn of numButtons) {
  btn.addEventListener("click", () => appendNum(btn.textContent));
}

for (let btn of oprButtons) {
  btn.addEventListener("click", () => appendOpr(btn.textContent));
}

eqlButton.addEventListener("click", calculate);

clearAllButton.addEventListener("click", clearAll);

clearOneButton.addEventListener("click", clearOne);

decimalButton.addEventListener("click", addDecimal);
