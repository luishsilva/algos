/*Write a function that merges two sorted arrays into one sorted array without 
using any sorting functions.
Input: sorted array 1 and sorted array 2
Output: merged sorted array

Edge case
  should contain letter and number?
  Should both arrays have value to execute the shorting?
  What should be the result if one of the arrays are empty?
  How it should be sorted asc or desc?
  
  
Test
  array1 = [1,2,3,4,5];
  array2 = [6,7,8,9];
  
  output: [1,2,3,4,5,6,7,8,9];
*/

const arr1 = ['5','6','7','8'];
const arr2 = ['1','2','3','4'];

const sortArrays = (array1, array2) => {
    const mergedArray = [];

    array1.map((val1) => {
        mergedArray.push(val1);
    });

    array2.map((val2) => {
        mergedArray.push(val2);
    });

    for (let a = 0; a < mergedArray.length - 1; a++){
        for (let b = 0; b < mergedArray.length - a - 1; b++){
            if (mergedArray[b] > mergedArray[b+1]){
                let temp = mergedArray[b]
                mergedArray[b] = mergedArray[b+1]
                mergedArray[b+1] = temp
            }
        }
    }  
    return mergedArray;
}

console.log(sortArrays(arr1, arr2))













