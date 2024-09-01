/**
  DESCRIPTION:
    Find the missing letter
    Write a method that takes an array of consecutive (increasing) letters as input and that returns the 
    missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length 
    of the array will always be at least 2.
    The array will always contain letters in only one case.

    Test:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'
    (Use the English alphabet with 26 letters!)

    Input: array
    Output: Missing letter
 */

const findMissingLetter = (arr) => {
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const arrCopy = arr.map((str) => str.toLowerCase());
    const arrValuesLowered = arrCopy.slice();
    
    const initialIndex = (firstIndexElement) => firstIndexElement === arr[0].toLowerCase();
    const lastIndex = (lastIndexElement) => lastIndexElement === arr[arr.length -1].toLowerCase();
        
    const slicedAlphabet = alphabet.slice(alphabet.findIndex(initialIndex), alphabet.findIndex(lastIndex));
    const missingLetter = slicedAlphabet.filter((letter) => arrValuesLowered.indexOf(letter) === -1)
                                                
    return arr[0] === arr[0].toLowerCase() ? missingLetter.toString() : missingLetter.toString().toUpperCase();    
}
    
    console.log(findMissingLetter(['O','Q','R','S']))     