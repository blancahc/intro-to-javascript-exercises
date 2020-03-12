//In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];

let array2 = [1]; 
array2.length = 5; 

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

//My Answer:
// array1 length is 4
// array2 length is 5
// array3 length is 1 // The length of array3 is 0. Index positions must be non-negative integers starting from 0. 
// Negative and non-integer indexes don't get taken into account when determining an array's length.
// array4 length is 3
// array5 length is 101