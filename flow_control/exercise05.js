// Refactor this statement to use an if statement instead.

// return foo() ? 'bar' : qux();

// My Answer:
if (foo()) {
  return 'bar';
} else {
  qux();
}

//The Answer: 
if (foo()) {
  return 'bar';
} else {
  return qux();
}