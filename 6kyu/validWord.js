/* 
    You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

    Task
    Test if the string can be entirely formed by consecutively concatenating words of the dictionary.

    For example:

    dictionary: ["code", "wars"]

    s1:         "codewars" =>  true  -> match 'code', 'wars'
    s2:         "codewar"  =>  false -> match 'code', unmatched 'war'
    One word from the dictionary can be used several times. 

    Input: A dictionary of words (Array) and a string
    Output: Return true if the words in the dictionary is equal the second string argument
*/

var validWord = (dictionary, word) => {
    const dp = Array(word.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= word.length; i++) {
        for (const element of dictionary) {
            const elemLength = element.length;
            if (i >= elemLength && word.slice(i - elemLength, i) === element) {
                dp[i] = dp[i] || dp[i - elemLength];
            }
        }
    }
    return dp[word.length];
};

console.log(validWord(["code", "wars"], 'codewars')); // true
// console.log(validWord(["code", "wars"], 'codewar')); // false
// console.log(validWord(["wars", "code"], 'codewars')); // true
// console.log(validWord(["wars", "code"], 'codecodewars')); // true
// console.log(validWord(['code', 'star', 'wars'], 'starwars')); // true