/* 
You are given an input string.

For each symbol in the string if it's the first character occurrence, replace it with a '1', else replace it with the amount of times you've already seen it.

Examples:
input   =  "Hello, World!"
result  =  "1112111121311"

input   =  "aaaaaaaaaaaa"
result  =  "123456789101112"
There might be some non-ascii characters in the string. 
*/

const numericals = (s) => {
    let result = new Map();
    let numerical = '';

    for (const char of s) {
        if (result.has(char)) {
            let totalChars = result.get(char) + 1;
            result.set(char, totalChars)
            numerical += totalChars;
        } else {
            result.set(char, 1)
            numerical += 1
        }
        
    }
    return numerical;
}

numericals("Hello, World!"); //1112111121311
numericals("aaaaaaaaaaaa"); //123456789101112