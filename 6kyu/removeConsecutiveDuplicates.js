/* 
 In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try: 
 */

const dup =  (str) => {
    let finalArray = [];
    for (i = 0; i < str.length; i++) {
        let word = str[i];
        let verifiedWord = '';
        for (j = 0; j < word.length; j++) {
            if (str[i][j] !== str[i][j + 1]) {
                verifiedWord += str[i][j];
            }
            
        }
        finalArray.push(verifiedWord);
    }
    return finalArray;
};

console.log(dup(["abracadabra","allottee","assessee"])); // = ["abracadabra","alote","asese"]