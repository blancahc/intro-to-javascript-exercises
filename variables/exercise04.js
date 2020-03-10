4. What happens when you run the following code? Why?

const NAME = 'Victor'; 
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// My Answer: 
// The first part of the code runs fines; it console.logs the three greetings for Victor. 
// However, you get an error when you try to reassign the NAME to 'Joe' because you cannot 
// reassign constant variables and the code after that doesn't run. 
