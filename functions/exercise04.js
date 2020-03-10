// Use the times function shown below to write a program that logs the value of 1! 
// (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

// n!	Expansion	Result
// 1!	1	1
// 2!	1 * 2	2
// 3!	1 * 2 * 3	6
// 4!	1 * 2 * 3 * 4	24
// 5!	1 * 2 * 3 * 4 * 5	120
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
// Here's an example of the expected output:

// > node factorial.js
// 1
// 2
// 6
// 24
// 120

let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fourFactorial);