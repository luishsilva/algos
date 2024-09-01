/**
 * Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) 
 * and consonants are in alternate order.
 * Input: string
 * Output: true if the string contain vowels in alternate order
 * Edge case: need to be a string
 *            string argument can't be empty
 * 
 * Test:
 *      apple: false
 *      banana: true
 *      case: true
 *      order: false
 *      "" : false
 *      123: false
 *      in true
 */

const isAlt = (str) => {
    if (typeof str !== 'string' || !str) return false
    const vowels = ['a','e','i','o','u'];
    const cleanString = str.toLowerCase();
    
    for (let i = 0; i < cleanString.length - 1; i++) {
      const isCurrentVowel = vowels.includes(cleanString[i]);
      const isNextVowel = vowels.includes(cleanString[i + 1]);
      
      if (isCurrentVowel === isNextVowel) {
        return false;
      }
    }
    return true;
  }