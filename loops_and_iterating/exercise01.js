// Modify the age.js program you wrote in the exercises for the Input/Output chapter.
// The updated code should use a for loop to display the future ages.

let age = Number(prompt('What is your age?'));

console.log(`You are ${age} years old.`);

for (let i = 10; i < 41; i += 10) {
  console.log(`In ${i} years you will be ${age + i} years old.`);
}
