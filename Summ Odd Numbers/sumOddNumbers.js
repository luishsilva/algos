/* 
Write a function that takes a list of numbers and returns the sum of all even numbers 
in the list.
Extension: Modify the function to return both the sum of even numbers and the sum of 
odd numbers.

Input: list of numbers
Output: sum the list of odd numbers

Edge case
  clean the array to contain only number
  should have a array as param
  
Ex sum odd:
  [1, 2, 3, 4, 5, 6, 7] = 16
  [1, 'a', 'b', 2, 3, 4] = 4
  
Ex sum odd and even:
  [1, 2, 3, 4, 5, 6, 7] = [16, 12]
  [1, 'a', 'b', 2, 3, 4] = [4, 6]

*/

const sumOddNumbers = (arr,shouldSumOddAndEven = false) => {
    if (!Array.isArray(arr)) {
      throw new Error('Param should be a array');
    }
  
    const numbersOnly = arr.filter(item => typeof item === 'number');
  
    let sumOddNumbers = 0;
    let sumEvenNumbers = 0;
    numbersOnly.map((val) => {
      if (val % 2 !== 0) {
        sumOddNumbers += val;
      } else {
        sumEvenNumbers += val;
      }
    });
    return shouldSumOddAndEven ? [sumOddNumbers, sumEvenNumbers] : sumOddNumbers;
}
console.log(sumOddNumbers([1, 2, 3, 4, 5, 6, 7], true));
console.log(sumOddNumbers([1, 'a', 'b', 2, 3, 4], false));