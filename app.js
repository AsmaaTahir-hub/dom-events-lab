/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

const calculator= document.querySelector('#calculator');

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('1')) {
    // Do something with a number
  }
  if (event.target.classList.contains('1')) {
    // Do something with a number
  }

  // Example
  if (event.target.innerText === '+') {
    // Do something with this operator
  }
});
