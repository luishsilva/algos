/* 
    Prompt: Write a function that takes an array and a number k as input and rotates the array to the right by k steps.
    Extension: Modify the function to handle negative values of k to rotate the array to the left. 

    Input: Array and a number
    Output: a array with the positions rotated to the right by number positions

    Example: 
        rotateArray([1,2,3,4], 1); result should be [ 4, 1, 2, 3 ]
        rotateArray([1,2,3,4], 2); result should be [ 2, 3, 4, 1 ]
        rotateArray([1,2,3,4], 3); result should be [ 3, 4, 1, 2 ]

    1, position 0
    2, position 1
    3, position 2
    4  position 3

*/



const rotateArray = (arr, num) => {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

arr = [1,2,3,4];

console.log(rotateArray(arr, 1));
console.log(rotateArray(arr, 2));
console.log(rotateArray(arr, 3));