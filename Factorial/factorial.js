/*
Write a function that takes a non-negative integer and returns its factorial.

Input: a number
Output: a factorial of this number

Edge case: number need to be positive integer

Tests: 
number: 3, result 6
number: 5, result 120

*/
let factorial = 1;
const numberFactorial = (number) => {
  if (number < 0) return 'Number must be bigger than 0';
  for (let i = number; i >= 1; i--){
    factorial = i * factorial;
  }
  return factorial;
  
}

console.log(numberFactorial(3))