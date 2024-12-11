/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces

Input: String to be deciphered 
Output: String with words separated by space 

Steps:
    1 - Create the function with a string as argument
    2 - Loop over each word that will be deciphered (Obs.: The numbers at the beginning of each world is the character code for a letter)
    3 - Discover which character each number represents
    4 - Switch the second letter of each word with the last letter
    5 - Store each word in a result variable
    6 - Return the deciphered string

Edge cases:
    Check if the argument is a string if so return null

Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'
 */

decipherThis = (str) => {
    if (typeof str !== 'string' || str.trim().length === 0) return null;

    return str
        .split(' ')
        .map((word) => {
            const match = word.match(/^(\d+)([a-zA-Z]*)$/);
            if (!match) return word;
            
            const charCode = parseInt(match[1], 10);
            const letters = match[2];
            
            const firstChar = String.fromCharCode(charCode);
            const second = letters[0];

            if (letters.length < 2) {
                return firstChar + letters;
            }

            const last = letters[letters.length - 1];
            const middle = letters.slice(1, -1);
            
            return firstChar + last + middle + second;
        })
        .join(' ')
}

console.log(decipherThis('72olle 103doo 100ya')); // Hello good day
console.log(decipherThis('82yade 115te 103o')); // Ready set go
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // Have a go at this and see how you do
console.log(decipherThis('97')); // a
console.log(decipherThis(' ')); // null