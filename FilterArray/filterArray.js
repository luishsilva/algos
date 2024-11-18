/* 
    Write a function filterArray that takes an array and a callback function as input. 
    The function should return a new array containing only the elements that satisfy 
    the condition defined in the callback function.

    Input: Array, callback function
    Output: New array containing only elements that satisfy the condition

    Edge case:
        First argument need to be a array
        If array empty return []
        If is not a valid array return null
        Second argument need to be a callback function

    Example
        filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value > 5) // [ 6, 7, 8, 9, 10 ]
*/

const filterArray = (arr, callback) => {
    if (!Array.isArray(arr)) throw new Error('First argument must be an array');
    if (arr.length === 0) return [];
    if (typeof callback !== 'function') throw new Error('Second argument must be a function')
    
    return arr.filter(callback)

}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value > 5)); // [ 6, 7, 8, 9, 10 ]
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value % 2 === 0)); // [ 2, 4, 6, 8, 10 ]