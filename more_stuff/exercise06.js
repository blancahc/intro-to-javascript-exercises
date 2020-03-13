// Write a function that searches an array of strings for every element that matches 
// the regular expression given by its argument. The function should return all 
// matching elements in an array.

//Example

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(strArray, toMatch) {
  let matches = [];
  strArray.forEach(str => {
    if(str.match(toMatch)) {
      matches.push(str);
    }
  });
  return matches;
}
allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']

  