/* 
Smallest Subarray with a Sum Greater than or Equal to Target
Problem: Given an array of positive integers and a target 𝑇
T, find the length of the smallest contiguous subarray whose sum is greater than or equal to 𝑇
T. If no such subarray exists, return 0.
Input: arr = [2, 1, 5, 2, 3, 2], 𝑇=7
Output: Minimum length = 2 (subarray [5, 2]) 
*/

const smallestSubarraySum = (arr, t) => {
    let start = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        while (currentSum >= t) {
            minLength = Math.min(minLength, i - start + 1);

            currentSum -= arr[start];
            start++;
        }
    }
    return minLength;

}

console.log(smallestSubarraySum([2, 1, 5, 2, 3, 2], 7)); // 2
console.log(smallestSubarraySum([2, 1, 5, 1, 1, 3, 2], 7)); // 3
console.log(smallestSubarraySum([2, 1, 5, 1, 1, 3, 2], 10)); // 4