/* 
    Create a function that takes a string and outputs a new string where every vowel (a, e, i, o, u) is replaced by "*", 
    and every consonant is replaced by "#". Ignore capitalization and non-alphabet characters. 

    Task:
        replace every vowel (a, e, i, o, u) by "*"
        replace every consonant by "#"

    Constraint
        Vowel: *
        Consonant: #

    INPUT
        A string
    OUTPUT
        A new string with characters replaced by * or #

    STEPS
        1 - Create a function that will receive a string as argument
        2 - Verify if the argument is a string or is not empty
        3 - Remove any non-alphabet from the string including spaces
        4 - Loop over the string and identify if it's character is a vowel or consonant and replace for the specific symbols
*/

// 1 - Create a function that will receive a string as argument
const replaceVowelOrConsonant = (str) => {
    // 2 - Verify if the argument is a string or is not empty
    if (str.length === 0 || typeof str !== 'string') return null;

    // 3 - Remove any non-alphabet from the string including spaces
    const regex = /[^a-zA-Z]/g;
    const lettersOnly = str.replaceAll(regex, '').toLocaleLowerCase();

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // 4 - Loop over the string and identify if it's character is a vowel or consonant and replace for the specific symbols
    return [...lettersOnly].map((char => vowels.has(char) ? '*' : '#')).join('');
}

console.log(replaceVowelOrConsonant('#Canada 2024')); // #*#*#*
console.log(replaceVowelOrConsonant('codewars')); // #*#*#*##
console.log(replaceVowelOrConsonant('Devslopes')); // #*###*#*#
