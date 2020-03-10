//What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// My Answer: It console.logs all the console.logs for the switch because it has no breaks. 
//The Answer: 
// Product2
// Product3
// Product not found!
// Since the case clauses of the switch statement lack break statements, control falls through from the 
// matching case '113' clause and executes the code in the case '142' and default clauses as well JavaScript 
// doesn't care that the criteria for extra case clauses don't match our serial value. The fall-through 
// behavior is often undesirable.