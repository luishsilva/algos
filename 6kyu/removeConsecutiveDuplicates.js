/* 
 In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try: 
 */

const dup =  (s) => {
    let finalArray = [];
    for (i = 0; i < s.length; i++) {
        let word = s[i];
        let finalWord = '';
        for (j = 0; j < word.length; j++) {
            if (s[i][j] !== s[i][j + 1]) {
                finalWord += s[i][j];
            }
            
        }
        finalArray.push(finalWord);
    }
    return finalArray;
};

console.log(dup(["abracadabra","allottee","assessee"])); // = ["abracadabra","alote","asese"]