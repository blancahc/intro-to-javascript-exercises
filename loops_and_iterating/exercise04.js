// Does the following code produce an error? Why or why not? What output does this code 
// send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// My Answer: No this code will not produce an error, because you're increasing i 
// in the console.log until it reaches 5. It will console.log 1, 2, 3, 4, 5

// The Answer: 
// The code doesn't produce an error since all 3 components of the for loop are 
// optional. In this code, we omit the "next value" component; however, this isn't 
// a problem here since we increment the loop variable on line 2.

// The code outputs the following:

// 1
// 2
// 3
// 4
// 5