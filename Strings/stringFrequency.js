/* 
    Develop a function that converts a string into a new string where each character is replaced by its frequency in the original string. 
    For example, given "hello", the output would be "12121" 

    Input: String
    Output: Converted string with each character converted by it's frequency in the entire string.

    Test:
        hello: should be 11221
        door: 1221
        peace: 12112

    Steps:
        1 - Create a function with a string as argument
        2 - Identify how many times each string appears in the string
        3 - Return the new string with the expected replacement
*/

// 1 - Create a function with a string as argument
const stringFrequency = (str) => {
    // Identify how many times each string appears in the string
    const charCount = {}
    let newString = '';
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;

        newString += charCount[char];
    }
    
    // 3 - Return the new string with the expected replacement
    return newString;
}

console.log(stringFrequency('hello')); // 11221
console.log(stringFrequency('door')); // 1221
console.log(stringFrequency('peace')); // 12112

