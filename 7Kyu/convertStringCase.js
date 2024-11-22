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

    if (typeof str !== 'string' || /[^a-zA-Z]/.test(str)) 
        throw new Error("Input must be a string of alphabetic characters only.");

    let totalLowerChars = 0;
    let totalUpperChars = 0;

    for (const char of str) {
        char === char.toLowerCase() ? totalLowerChars++ : totalUpperChars++
    }

    return totalLowerChars >= totalUpperChars ? str.toLowerCase() : str.toUpperCase();
}

console.log(solve('coDe')); // code
console.log(solve("CODe")); // "CODE"
console.log(solve("coDE")); // "code")