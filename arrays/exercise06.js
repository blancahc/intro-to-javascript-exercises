//Use map and filter to first determine the lengths of all the elements in an array of string 
//values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

My Solution:
function oddLengths(array) {
  let newArray = array.filter(str => str.length % 2 !== 0);
  return newArray.map(element => element.length);
}

console.log(oddLengths(arr));

//The Solution: 
function oddLengths(arr) {
  let filteredNumbersArray = arr.map((letters) => {
    return letters.length;
  }).filter((number) => {
    return number % 2 === 1;
  });

  return filteredNumbersArray;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));