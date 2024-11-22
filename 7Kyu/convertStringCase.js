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
    let lowerChars = 0;
    let upperChars = 0;
    for (const char of str) {
        console.log(char)
    }
}

solve('coDe'); // code