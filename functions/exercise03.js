// Write a program that uses a multiply method to multiply two numbers and returns the 
// result. Ask the user to enter the two numbers, then output the numbers and result as
// a simple equation.

// My Solution:
function multiply() {
  let number1 = prompt('Enter a number');
  let number2 = prompt('Enter another number');
  return (number1 + ' * ' + number2 + ' is ' + number1 * number2 );
}

multiply();

// The Solution: 
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
