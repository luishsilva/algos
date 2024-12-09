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

// 1 - Create the function with a string as argument
decipherThis = (str) => {
    // 2 - Loop over each word that will be deciphered (Obs.: The numbers at the beginning of each world is the character code for a letter)
    const words = str
    .split(' ')
    .map((word) => {
        // 3 - Discover which character each number represents
        let code = word.replace(/[^0-9]/g, "");
        let onlyString = word.replace(/[^a-z]/gi, "");
        return String.fromCharCode(code).concat(onlyString);;
    });

    console.log(words)

    // 3 - Discover which character each number represents
    /* let characterCode = '';
    let letter = '';
    for (let i = 0; i < word.length; i++) {
        const isNumber = /\d/.test(word[i]);
        if (isNumber) {
            characterCode += word[i];
        } else {
            // console.log(i)
            letter = String.fromCharCode(characterCode);
            console.log(letter)
            break;
        }
    } */
    
}

decipherThis('72olle 103doo 100ya'); // 'Hello good day'