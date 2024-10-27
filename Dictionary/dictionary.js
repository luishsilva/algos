/**
 * Write a function that takes a string and returns a dictionary with each character as the key and the number of times it appears in the string as the value.
 * 
 * Input: string
 * Output: a Dictionary
 * 
 * Test
 *  Hello World
 *  H = 1
 *  e = 1
 *  l = 3 
 *  o = 2
 *  W = 1 
 *  r = 1
 *  d = 1
 * 
 * Edge case 
 *  Ignore white space
 */

const dictionary = (string) => {
    const dictionary = {};
    const stringWithoutSpaces = string.replaceAll(' ','');

    for (let i = 0; i < stringWithoutSpaces.length; i++) {
        if (dictionary[stringWithoutSpaces[i]]) {
            dictionary[stringWithoutSpaces[i]] += 1;
        } else {
            dictionary[stringWithoutSpaces[i]] = 1;
        }
    }

    return dictionary;
}

console.log(dictionary('Hello World')); // { H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1 }
console.log(dictionary('Devslopes Acedemy')); // { D: 1, e: 4, v: 1, s: 2, l: 1, o: 1, p: 1, A: 1, c: 1, d: 1, m: 1, y: 1 }
console.log(dictionary('')); // {}