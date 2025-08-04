const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter second number: "));
let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero!");
      process.exit(); // exit the program
    }
    result = num1 / num2;
    break;
  default:
    console.log(" Invalid operator!");
    process.exit(); // exit the program
}

console.log(` Result: ${num1} ${operator} ${num2} = ${result}`);
