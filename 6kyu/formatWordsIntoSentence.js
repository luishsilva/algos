/* 
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""

Input: A array containing strings
Output: A formatted sentence separating each word by comma and the last word by the 'and' word

Edge Cases:
    Argument should be a array
    Empty string should be ignored
    Empty array should return empty

Questions?
    Will the array always contain strings only?
    Should the array contain only strings?


Steps:
    1 - Return null if argument is not array, null or empty
    2 - Filter array to remove falsy values like false, 0, "", null, undefined, NaN
    2 - Loop over the filtered array of strings
    3 - Identify if comma or and will be added as separator
    4 - Return the correct sentence
 */ 

const formatWordSentence = (words) => {
    if (words === null || words.length === 0 || !Array.isArray(words)) return '';

    let filteredWords = words.filter(element => element);
    const arrLength = filteredWords.length;

    let sentence = '';
    const lastSeparator = arrLength - 1;
    for (let i = 0; i < arrLength; i++) { 
        sentence += filteredWords[i];
        const nextIndex = i + 1;
        if (lastSeparator === nextIndex) {
            sentence += ' and ';
            
        } else if (nextIndex < arrLength) {
            sentence += ', ';
        }        
    }
    return sentence;
}

console.log(formatWordSentence(['one', 'two', 'three', 'four'])); // one two three and four
console.log(formatWordSentence(['ninja', 'samurai', 'ronin'])); // ninja, samurai and ronin
console.log(formatWordSentence(['', '', 'three'])); // three
console.log(formatWordSentence(['one', '', 'three'])); // one and three
console.log(formatWordSentence(null)); // ''
console.log(formatWordSentence([''])); // ''
console.log(formatWordSentence('string')); // ''