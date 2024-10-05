/*
Prompt: Write a function that takes two sorted lists of numbers and returns a single sorted list containing all elements from both lists.
Extension: Modify the function to merge the lists without using any built-in sorting functions.

inputs: 2 arrays of integers
output: merged array containing all the elements of both array sorted

Edge case:
  Arguments should be 2 valid arrays
*/

const arrayMerge = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error('Both params need to be an array');

    return [...arr1, ...arr2].sort((num1,num2) => num1 - num2);
}
  
console.log(arrayMerge([8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 7]));