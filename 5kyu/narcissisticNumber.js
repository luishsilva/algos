/* 
Does my number look big in this?
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the 
power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
For example, take 153 (3 digits), which is narcissistic:
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 

Input: a positive number in a decimal base
Output: ?

Questions:
    this should return only true or false or return the narcissistic number?
    would accept a string with a number as argument?

Edge case:
    number needs to be positive
    input need to be a valid input 
*/

const bigNumber = (num) => {
    const numToString = num.toString();
    const numLength = numToString.length;
    let sum = 0;
    for (const digit of numToString) {
        sum += Math.pow(parseInt(digit),numLength);
    }

    return sum === parseInt(num);
}

console.log(bigNumber(153)); // true
console.log(bigNumber(1652)); // false
console.log(bigNumber(370)); // true
console.log(bigNumber(93084)); // true
console.log(bigNumber('93084')); // true
console.log(bigNumber('153')); // true
console.log(bigNumber('200')); // false