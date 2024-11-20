/* 
    Minimum size Subarray Sum

    Given an array of positive nums  and a positive integer TARGET.

    Return the minimal length of a subarray whose sum is greater than or
    equal TARGET.

    If there is no such subarray return 0 instead.

    Example 1:
        Input: target = 7, arr = [2, 3, 1, 2, 4, 3]
        Output: 2

    Example 2:
        Input: target 4, nums [1,4,4]
        Output: 1
*/

const minSubarrayLen = (arrNums, target) => {
    let prevTotal = 0;
    let subArrayLength = 0;

    for (let i = 0; i < arrNums.length; i++) {
        prevTotal =+ arrNums[i];
        subArrayLength++;

        if (prevTotal >= target) break;

        if (prevTotal < target) return 0;

        for (let i = 1; i < arrNums.length; i++) {
            const currentTotal = prevTotal - nums[i-1];
            if (currentTotal >= target) {
                subArrayLength--;
                prevTotal = currentTotal;
            } else {
                prevTotal = currentTotal + nums[i + subArrayLength - 1];
            }
        }
    }
    return true;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7));