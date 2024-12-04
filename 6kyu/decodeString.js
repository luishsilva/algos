/* 
    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" 
    if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
    Notes
    Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

    Symbol:
        ( = Character appears only once in the original string.
        ) = Character appears more than once in the original string.

    Steps:
        1 - Create a method that receive a string as argument
        2 - Get each element in the string and compare if the string contain the current character 
        3 - Replace the original string with the respective symbol
        4 - Return the new string
    
    Edge cases:
        Argument must be a string
        Uppercase characters are treated as a new character      
 */

// 1 - Create a method that receive a string as argument
const duplicateEncode = (word) => { 
    word = word.toLowerCase();
    
    let charCount = {};

    for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const result = [];
    for (let i = 0; i < word.length; i++) {
        result.push(charCount[word[i]] > 1 ? ')' : '(');
    }

    return result.join('');
}
console.log(duplicateEncode('rre')); // ))(
console.log(duplicateEncode('dddd')); // ))))
console.log(duplicateEncode('din')); // (((
console.log(duplicateEncode('recede')); // ()()()