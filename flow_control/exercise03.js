// Let's improve our previous implementation of evenOrOdd. Add a validation 
// check to ensure that the argument is an integer. If it isn't, the function 
// should issue an error message and return.
// My solution:
function evenOrOdd(integer) {
  if(integer === parseInt(integer, 10)){
    if(integer % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('You need to enter an integer.')
  }
}

evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(1.2);

// The solution: 
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}