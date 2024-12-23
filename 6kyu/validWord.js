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
    let countWord = 0;
    let dictionaryCount = dictionary.length;
    for (const element of dictionary) {
        if (word.includes(element)) {
            console.log(true)
            countWord ++;
        } else {
            console.log(false)
            dictionaryCount --;
        }
    }
    // return countWord === dictionaryCount;
};

// console.log(validWord(["code", "war"], 'codewars')); // true
console.log(validWord(["code", "wars"], 'codewar')); // false
// console.log(validWord(["wars", "code"], 'codewars')); // true
// console.log(validWord(["wars", "code"], 'codecodewars')); // true
console.log(validWord(['code', 'star', 'wars'], 'starwars')); // true