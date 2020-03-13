// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//logs [1, 4, 3] because array2 is pointing to the same location that array1
//pointing to. When the array that array1 is modified, the modified array is also
//visible to array2