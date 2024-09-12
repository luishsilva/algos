/*
Array Intersection: Implement a function that finds the intersection of two arrays, returning the common elements. 
Input: 2 arrays
Output: common elements in both arrays

Edge case: param 1 and param 2 need to be a array

Test: array1[1, 2, 3, 4] array2[4, 2, 1, 0, 9, 3] result: [1, 2, 3, 4].
['a', 'c', 'd', 4], ['c', 4, 2, 1, 0, 9, 'd'] result: ["c", "d", 4].

'', 1 result: Both params need to be a array

*/

const arrayIntersection = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error('Both params need to be an array');
    
    let intersection = arr1.filter(
      (element) => arr2.includes(element)
    );
    return intersection;
  }
  
  console.log(arrayIntersection([1, 2, 3, 4], [4, 2, 1, 0, 9, 3]));
  console.log(arrayIntersection(['a', 'c', 'd', 4], ['c', 4, 2, 1, 0, 9, 'd']));
  console.log(arrayIntersection('', 1));