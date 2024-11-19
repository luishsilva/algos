/* 
    Longest Substring with At Most K Distinct Characters    
    Problem: Given a string S and an integer 𝐾, find the length of the longest substring that contains at most K distinct characters.
    Input: S = "araaci", 𝐾=2
    Output: Longest substring length = 4 ("araa") 
*/

const findLongestSubstringKDistinct = (str, k) => {
    let left = 0;
    let maxLength = 0;
    let charCount = {};

    for (let right = 0; right < str.length; right++) {
        const char = str[right];

        charCount[char] = (charCount[char] || 0) + 1;

        while (Object.keys(charCount).length > k) {
            const leftChar = str[left];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

console.log(findLongestSubstringKDistinct('araaci', 2)); //4