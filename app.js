/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let current = "";
let previous = "";
let operator = null;

const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");
const calculator = document.querySelector("#calculator");

calculator.addEventListener("click", (event) => {
  const value = event.target.innerText;

  if (!event.target.classList.contains("button")) return;

  if (event.target.classList.contains("number")) {
    current += value;
    display.innerText = current;
    return;
  }

  if (event.target.classList.contains("operator")) {
    if (value === "C") {
      clearAll();
      return;
    }
    previous = current;
    current = "";
    operator = value;
    return;
  }

  if (event.target.classList.contains("equals")) {
    const result = calculate(previous, current, operator);
    display.innerText = result;
    current = String(result);
    previous = "";
    operator = null;
  }
});

function calculate(num1, num2, operator) {
  const a = Number(num1);
  const b = Number(num2);

  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return b === 0 ? "Error" : a / b;

  return null;
}

function clearAll() {
  current = "";
  previous = "";
  operator = null;
  display.innerText = "";
}