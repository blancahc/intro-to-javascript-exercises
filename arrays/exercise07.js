//Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [3, 5, 7];
//console.log(sumOfSquares(numbers));

//My Solution: 
function sumOfSquares (array) {
  return array.reduce((accumulator, element) => accumulator + (element * element), 0)
}

console.log(sumOfSquares(numbers));

//The Solution: 
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));
//If you don't supply an initial value, the first element in the array will be used and skipped. 
//Therefore, you will end up with 77 (3 + 25 + 49).