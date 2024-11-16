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
    let sum = 0;
    let consecutiveDays = 0;

    for (let i = 0; i < earnings.length; i++) {
        sum += earnings[i];
        consecutiveDays++;

        if (consecutiveDays === k) {
            consecutiveDays = 0;
        }
    }

    return sum;
}

// console.log(maximizeEarnings([60, 70, 80, 40, 80, 90, 100, 20], 2)); // 480
console.log(maximizeEarnings([45, 12, 78, 34, 56, 89, 23, 67, 91], 4)); // 460
// console.log(maximizeEarnings([1, 2, 3, 4, 5], 5)); // 15

// 45, 12, 78, 34, 89, 23, 67, 91 //
