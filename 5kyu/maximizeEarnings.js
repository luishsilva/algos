/* 
    Task
    You have a list of daily earnings from a freelance job. You can choose to work or skip those days. You can work for up to k consecutive days, 
    but after that, you must take at least one break day where you earn nothing.

    Your task is to determine the maximum total earnings you can achieve while following this rule.

    Inputs
        earnings: an array of non-negative integers ( 0 <= length earnings < 100 ).
        k: an integer representing the maximum number of consecutive working days ( 1 <= k < 100 ).
    Output
        an integer representing the maximum earnings you can achieve while respecting the mandatory break rule.
    Example
        For earnings = [60, 70, 80, 40, 80, 90, 100, 20], k = 3, return 480. Forgo earning 40 and 20.
        For earnings = [45, 12, 78, 34, 56, 89, 23, 67, 91], k = 4, return 460. Forgo earning 12 and 23. 

    Solution summarize the earnings when the array position is not multiple by k
*/

const maximizeEarnings = (earnings, k) => {
    const earningsArrLength = earnings.length;

    const maxEarnings = new Array(earningsArrLength + 1).fill(0);
    // console.log(maxEarnings)
    for (let i = 1; i <= earningsArrLength; i++) {
        maxEarnings[i] = maxEarnings[i - 1];
        
        let currentSum = 0;
        for (let j = 1; j <= k && i - j >= 0; j++) {
            currentSum += earnings[i -j];
            
            maxEarnings[i] = Math.max(maxEarnings[i], currentSum + (i - j >= 1 ? maxEarnings[i - j - 1] : 0));
        }
    }
    return maxEarnings[earningsArrLength];
}   

console.log(maximizeEarnings([60, 70, 80, 40, 80, 90, 100, 20], 3)); // 480
console.log(maximizeEarnings([45, 12, 78, 34, 56, 89, 23, 67, 91], 4)); // 460
console.log(maximizeEarnings([1, 2, 3, 4, 5], 5)); // 15
console.log(maximizeEarnings([10], 1)); // 10
console.log(maximizeEarnings([5, 10, 15], 30)); // 30
console.log(maximizeEarnings([], 2)); // 0
console.log(maximizeEarnings([5, 3, 1, 8], 1)); // 13
console.log(maximizeEarnings([1000, 2000, 3000, 4000, 5000], 3)); // 13000

// 45, 12, 78, 34, // 169
// 89, 23, 67, 91 // 270
