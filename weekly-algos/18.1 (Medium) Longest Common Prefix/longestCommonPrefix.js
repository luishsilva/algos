/* 
18.1 (Medium) Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". 

Input: Array of strings
Output: Longest common prefix

Steps:
    1 - Create a function with a array of string as argument
    2 - Loop over the array to find the prefix
    3 - Have a variable to collect the return values
    4 - Return the result

Edge cases
    If argument is a empty array, return empty string
    If Array contain only one object return the string
    If array is empty


Questions
    What a prefix mean in this context?
    Is the prefix case sensitive?


Example
    ["flower", "flow", "flight"] result = fl because the 3 elements in the array starts with fl
*/

const longestCommonPrefix = (arr) => {

    if(arr.length === 0 || !Array.isArray(arr)) return ''

    let longestPrefix = arr[0];

    let result = '';

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (longestPrefix[j] !== arr[i][j]) {
                result = longestPrefix.substring(0, j);
                break;
            }
        }
    }

    return result;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // fl
console.log(longestCommonPrefix(["fight", "foster", "fast"])); // f
console.log(longestCommonPrefix(["love", "Lovable", "Loving"])); // '' Obs.: should consider case sensitive?
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ''
console.log(longestCommonPrefix([])); // ''
console.log(longestCommonPrefix('')); // ''