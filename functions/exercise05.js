//What does the following code log to the console?

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// My Answer: 'Yipeee!!!!!'

// The answer: It doesn't log anything. The return on line 3 terminates the function 
// before it can log anything.