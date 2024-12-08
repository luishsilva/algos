/* 
    Given an array of size n, find the majority element. 
    The majority element is the element that appears more than n/2 times. 

    Input: array
    Output: the element that appears n/2 times (n/2 means element that appears more than half of the total elements in the array)

    Example:
        arr = [3, 2, 3, 4, 5, 3, 3, 3]; 
        arr.length = 8
        n/2 represent 8/2 = 4
        majority is 3

    Edge case
        function argument need to be array

    Steps
        1 - create the function
        2 - identify the n/2 of the array
        3 - identify the number that is the majority
        4 - return the result
*/

// 1 - create the function
const majorityElement = (arr) => {

    // function argument need to be array
    if (!Array.isArray(arr) || arr.length === 0) return null

    // 2 - identify the n/2 of the array
    let halfArrayLength = arr.length / 2;
    let majority = {};

    // 3 - identify the number that is the majority
    for (let i = 0; i < arr.length; i++) {
        majority[arr[i]] = (majority[arr[i]] || 0) + 1;
    }

    for (const [key, value] of Object.entries(majority)) {
        if (value > halfArrayLength) {
            return key;
        }
    }
}

console.log(majorityElement([3, 2, 3, 4, 5, 3, 3, 3])); // 3
