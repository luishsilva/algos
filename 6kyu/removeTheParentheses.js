/* 
    Remove the parentheses
    In this kata you are given a string for example:

    "example(unwanted thing)example"
    Your task is to remove everything inside the parentheses as well as the parentheses themselves.

    The example above would return:

    "exampleexample"
    Notes
        Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets 
        like "[]" and "{}" as these will never appear.
        There can be multiple parentheses.
        The parentheses can be nested. 

    Input: A string
    Output: a string without the parentheses and everything in between the parentheses

    Edge case
        Input must be a string
        Multiple parentheses could appear in the string
        Parentheses can be nested
    

    Steps
        1 - Create a method that receives a string as argument
        2 - Search in the string for the parentheses
        3 - Remove the parentheses and the strings in between the parentheses
        4 - Return the new string sanitized.
*/

function removeParentheses(s){
    if (typeof s !== 'string' || s.trim().length === 0) return null;

    let result = '';
    let parentheses = 0;

    for (let char of s) {
        if (char === '(') {
            parentheses++;
        } else if (char === ')') {
            if (parentheses > 0) parentheses--;
        } else if (parentheses === 0) {
            result += char;
        }
    }
    return result;
    
}

console.log(removeParentheses('example(unwanted thing)example')); // exampleexample
console.log(removeParentheses('example (unwanted thing) example')); // example  example
console.log(removeParentheses('a (bc d)e"), "a e"')); // a, "a e"
console.log(removeParentheses('hello example (words(more words) here) something')); // hello example  something
console.log(removeParentheses('You will (never) give up (, you need to promise)')); // " You will give up "
console.log(removeParentheses('(first group) (second group) (third group)')); // "  "