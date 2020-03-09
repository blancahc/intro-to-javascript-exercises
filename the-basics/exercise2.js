// Use the arithmetic operators to determine the individual digits of a 4-digit 
// number like 4936:

// thousands place is 4
// hundreds place is 9
// tens place is 3
// ones place is 6

var number = 4936
var onesPlace = number % 10
number = (number - onesPlace) / 10;
var tensPlace = number % 10
number = (number - tensPlace) / 10;
var hundredsPlace = number % 10
number = (number - hundredsPlace) / 10;
var thousandsPlace = number

console.log(`thousands place is ${thousandsPlace}, hundreds place is ${hundredsPlace}, 
tens place is ${tensPlace}, and ones place is ${onesPlace}.`);
