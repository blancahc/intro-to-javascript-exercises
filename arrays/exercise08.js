//This problem is more challenging than most in this book. Don't worry if you can't solve it on your 
//own.

//Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter.
//Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}
function oddLengths(array) {
  return array.reduce((accumulator, str) => {
    if(str.length % 2 === 1) {
      return accumulator.concat(str);
    }
  }, []);
}
console.log(oddLengths(arr));