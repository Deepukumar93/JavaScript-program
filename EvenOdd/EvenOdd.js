const prompt = require('prompt-sync')(); 

const number = parseInt(prompt("Please enter a number: "));

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log(number + " is an Even Number.");
} else {
  console.log(number + " is an Odd Number.");
}
