// What does this code log to the console? Does executing the foo function affect
// the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// My Answer:
// foo() returns undefined because it does not have a return statemetn. 
// console.log(bar); returns 1;
// running foo() does not affect the output because it does not have a return statement. 

// The Answer:
// The code logs 1 to the console. foo doesn't affect the value assigned to bar on line 
// 1 since JavaScript functions create an inner scope. Thus, the bar variable on line 3 
// is not the same as the one on line 1. In the end, foo() has no bearing on the final 
// output.