/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published
 and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" 
to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.

Input: string containing numbers separated by white spaces ex: (56 65 74 100 99 68 86 180 90) all numbers are positive numbers

Output: "100 180 90 56 65 74 68 86 99"

Edge cases:
    if 2 numbers have the same weight ex: 180 which is 9 and 90 which is also 9 it comes before as a string (alphabetical ordering)
    The list can be empty
    check for white spaces

Test:
    99  = 9+9 = 18
    100 = 1+0+0 = 1
    ""  = ignore
 */

// create a object with original number and the weight of this number
// loop over the list and identify the numbers in the list
// add the weight to each number
// sum each sequence of numbers and add the weight for each sequence of number

const weightForNumber = (string) => {
    if (!string.trim()) return 'Empty list';

    const numberWeights = [];
    const numbers = string.split(' ');
    
    for (let i = 0; i < numbers.length; i++) {
        let sumOfNumbers = 0;
        for (const number of numbers[i]) {
            sumOfNumbers += parseInt(number);
        }
        numberWeights.push({originalNumber: numbers[i], weight: sumOfNumbers});
    }

    const result =  numberWeights
        .sort((firstElement, secondElement) => firstElement.weight - secondElement.weight || firstElement.originalNumber.localeCompare(secondElement.originalNumber))
        .map((value) => value.originalNumber)
        .join(' '); 
        
    
    return result;
}

console.log(weightForNumber('2000 10003 1234000 44444444 9999 11 11 22 123')); // output 11 11 2000 10003 22 123 1234000 44444444 9999
console.log(weightForNumber('56 74 100 99 68 86 180 90 65')) // output 100 180 90 56 65 74 68 86 99
console.log(weightForNumber('75 80 57 71')) // 14,  8, 17 => 80 75 58 
console.log(weightForNumber('      ')) // Empty list
