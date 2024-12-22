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


Steps:
    1 - Loop over the array of strings
    2 - Identify if the element is not a empty string
    3 - Return the sentence
 */ 

const formatWordSentence = (words) => {
    let sentence = '';
    const arrLength = words.length;
    
    sentence = words[0].length !== 0 ? words[0] : '';
    for (let i = 1; i < arrLength; i++) {
        if (words[i].length !== 0) {
            console.log(words[i].length)
            let separator = ' ';
            if ((i !== arrLength - 1)) {
                separator = ', ';
            } else {
                separator = ' and ';
            }

            sentence += separator+words[i];
        }
    }

    return sentence;
}

// console.log(formatWordSentence(['ninja', 'samurai', 'ronin']));
console.log(formatWordSentence(['', '', 'three']));

/* i = 0 (ninja)
i + 1 = 1 (samurai)
i + 2 = 2 (ronin) */