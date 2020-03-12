//Use the filter method to implement a function that returns a new array with all of the integers 
//from the input array. It should ignore all non-integer values from the input.

//Example

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
//let newArray = removeNonInteger(array);
//console.log(newArray); // => [1, 3, -4]

//My Solution:
let newArray = array.filter(num => Number.isInteger(num));

console.log(newArray);

//Solutions: 
function removeNonInteger(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

function removeNonInteger(array) {
  return array.filter(Number.isInteger);
}


