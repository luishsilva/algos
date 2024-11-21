/* 
 In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try: 
 */

const dup =  (arr) => {
    return arr.map(word => {
        let newStr = '';
        for (let i = 0; i < word.length; i++) {
            if (newStr === '' || word[i] !== newStr[newStr.length - 1]) {
                newStr += word[i];
            }
        }
        return newStr;
    });
};

console.log(dup(["abracadabra","allottee","assessee"])); // ["abracadabra","alote","asese"]
// console.log(dup(["kelless","keenness"])); // ["keles","kenes"]