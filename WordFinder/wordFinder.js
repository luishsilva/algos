const arr =    ['banana'];
const pattern = '?a?a?a';

// console.log(arr[0].split(''))
// console.log(pattern.split(''))

// console.log(pattern[2])

const patternArray = pattern.split('');
const patternLength = patternArray.length

for (let i = 0; i < arr.length; i++) {
  const arrWord = arr[i].split('');
  console.log(arrWord)
}