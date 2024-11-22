/* 
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task 
is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

Input = string
Output = converted string to lower or uppercase depending on the constraint

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

Edge case
    identify is the character is lower or upper case
    input need to be a string of non numeric characters
 */

const solve = (str) => {
    let totalLowerChars = 0;
    let totalUpperChars = 0;

    for (let i = 0; i < str.length; i++) {
        let strToLowerCase = str[i].toLowerCase();
        
        if (str[i] === strToLowerCase) {
            totalLowerChars += 1;
        } else {
            totalUpperChars += 1;
        }
    }
    
    if (totalLowerChars > totalUpperChars) {
        return str.toLowerCase();
    } else if ( totalUpperChars > totalLowerChars) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(solve('coDe')); // code
console.log(solve("CODe")); // "CODE"
console.log(solve("coDE")); // "code")