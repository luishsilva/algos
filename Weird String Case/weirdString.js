/* 
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

Input = string
Output = returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased.

Obs: The index is zero based which means the count should start at zero
     The string should consist only with alphabetical characters
     Spaces need to be respected spaces will be presented if is multiple words
*/

const toWeirdCase = (str) => {
    if (!typeof str === 'string') {
        throw new Error('Please provide a valid string');
    }
    const cleanString = str.replace(/\d+/g,'');
    let result = '';
    for (let i = 0, j = 0; i < cleanString.length; i++) {
        if (cleanString[i] === ' ') {
            result += ' ';
            j = 0;
        } else {
            result += j % 2 === 0 ? cleanString[i].toUpperCase() : cleanString[i].toLowerCase();
            j++;
        }
    }
    return result;
}
