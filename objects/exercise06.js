//Add a qux property with value 3 to the myObj object we created in the previous exercise.
//Now, examine the following code snippets:
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

//Snippet 1

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

//Snippet 2

for (let key in myObj) {
  console.log(key);
}
//Without running this code, can you determine whether these two snippets produce the same output? Why?

// My Answer: 
// These two snippets do not produce the same output because Object.keys does not include keys from the prototype
// object while the for..in does. 