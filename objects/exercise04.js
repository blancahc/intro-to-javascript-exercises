//Create an array from the keys of object obj below, with all values converted to uppercase. 
//Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

//MY SOLUTION
let objKeys = Object.keys(obj);
let objKeysUppercase = objKeys.map(key => key.toUpperCase());
console.log(objKeysUppercase);

//THE SOLUTION
let objValues = Object.keys(obj).map((key) => key.toUpperCase());
console.log(objValues); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }
