/* 
Longest Substring Without Repeating Characters
Problem: Given a string 𝑆
S, find the length of the longest substring without repeating characters.
Input: S = "abcabcbb"
Output: Longest substring length = 3 ("abc") 
*/

/* const lengthOfLongestSubstring = (str) => {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        
        while (charSet.has(str[right])) {
            // remove the left element in the collection
            charSet.delete(str[left]);
            // console.log(charSet)
            left++;
        }

        charSet.add(str[right]);
        // console.log(charSet)

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
} */
const lengthOfLongestSubstring = (str) => { 
    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while (right < str.length) {
        let letter = str[right];
        
        if (!set.has(letter)) {
            set.add(letter);
            longestStr = Math.max(longestStr, set.size);
            right++;
        } else {
            set.delete(str[left]);
            left++;
        }
    }
    return longestStr;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('aaeeiioouu')); // 2
console.log(lengthOfLongestSubstring('aeiou')); // 5
console.log(lengthOfLongestSubstring('aabccd')); // 3