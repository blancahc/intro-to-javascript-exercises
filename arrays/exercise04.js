//Let's try another variation on the even-numbers theme.

//Example

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

//My Solution: 
let evenOrOdd = myArray.map(function (num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

evenOrOdd;

//The Solution
let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

