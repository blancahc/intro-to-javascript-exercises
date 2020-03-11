// Write a function that computes and returns the factorial (see exercise 4 in the 
// Functions chapter) of a number by using a for loop. You may assume that the argument 
// is a valid non-negative integer.

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

let oneFactorial = times(1, 1);
let twoFactorial = times(2, oneFactorial);
let threeFactorial = times(3, twoFactorial);
let fourFactorial = times(4, threeFactorial);
let fiveFactorial = times(5, fourFactorial);
let number1 = 1
function factorial (number) {
  let result = 1;
  for ( let current = 1; current <= number; current += 1) {
    console.log(result);
    result = current * result;
  }
}