// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//It turns the string into an array of strings, where each word/group of letter separated
//by a space gets its own index, then the array is reversed, and finally, the length of
// each string in the array gets returned into a new array. 