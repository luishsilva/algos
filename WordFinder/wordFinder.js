/*
You have to extend the dictionary with a method, 
that returns a list of words matching a pattern. This pattern may contain 
letters (lowercase) and placeholders ("?"). A placeholder stands for exactly 
one arbitrary letter.
*/

const arr =    ['papaya', 'banana', 'apple', 'cherry'];
const pattern = '?a?a?a'

const result = [];

for (let i = 0; i < arr.length; i++) {
  const arrWord = arr[i].split('');
  let patternArray = pattern.split('');
  for (let j = 0; j < arrWord.length; j++) {
    if(patternArray[j] === '?') {
      patternArray[j] = arrWord[j];
    }
  }
  if(patternArray.join('') === arr[i]) {
    result.push(arr[i]);
  }
}
console.log(result);