/* 
    Given an unsorted array arr containing only non-negative integers, your task is to find a continuous subarray
    (a contiguous sequence of elements) whose sum equals a specified value target. 
    You need to return the 1-based indices of the leftmost and rightmost elements of this subarray. 
*/

const subArraySum = (arr, target) => {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return [start + 1, end + 1];
        }
    }
}

console.log(subArraySum([1,2,3,7,5],15)); // [3, 5]