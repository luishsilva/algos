/* 
    Write a function that takes a string and returns a new string where each character is replaced with "1" if it is a digit (0-9) or "0" otherwise.
    Ignore spaces in the string. 

    Character = replace with 0 
    Digit = replace with 1

    Input: string mixed with letters and numbers abc 123 xyz 456
    Output: 000111000111

    Edge case:
        Input needs to be a string
        Ignore spaces

    Steps:
        1 - Create the function that has a string as argument
        2 - Loop over the string to identify if each character is a digit or a string
        3 - Return the new string

    Questions
        1 - What should this function return if the string is empty
        2 - What should this function return if the argument is not a string?
*/
// 1 - Create the function that has a string as argument
const replaceString = (str) => {    
    if (str.length === 0 || typeof str !== 'string') return null

    // remove spaces
    str = str.replaceAll(' ', '');

    // Pattern to verify if the the character if a digit
    const regex = /[0-9]/;

    let newString = '';

    // 2 - Loop over the string to identify if each character is a digit or a string
    for (const char of str) {
        newString += regex.test(char) ? '1' : '0';
    }
    return newString;
}

console.log(replaceString('abc 123 xyz 456')); //000111000111
console.log(replaceString('a1b2c3d4e5f6')); // 010101010101
console.log(replaceString('abcde')); // 00000
console.log(replaceString('1234')); // 1111




