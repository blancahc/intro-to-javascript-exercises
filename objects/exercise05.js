//Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

//MY SOLUTION
let myObject = Object.create(myProtoObj);


