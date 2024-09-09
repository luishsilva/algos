/**
 * Write a function that takes an array of numbers and 
 * moves all zeros to the end of the array while maintaining 
 * the order of the non-zero elements.
 * Inputs nome
 * Output array of numbers with zeros at the end keep order of num-zeros at the array
 * Edge case should be a array
 * Remove non-numbers from the array
 */

const moveZeros = (arr) => {
    if (!Array.isArray(arr)){
      throw new Error('Please provide a valid array of numbers');
    }
    const newArr = arr.filter((number) => number !== 0);
    const numOfZeros = arr.length - newArr.length;
    for (let i = 0; i < numOfZeros; i++) {
      newArr.push(0);
    }
    return newArr;
}
const arrNumbers = [1,0,2,0,3,4,5,6,1,0];
console.log(moveZeros(arrNumbers));