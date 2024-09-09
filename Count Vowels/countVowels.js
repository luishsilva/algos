/* "Prompt: Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
Extension: Modify the function to also return the number of consonants in the string as well." 
Input: string
Output: Total of vowels in the string

Edge case: 
    return message stating the param is not a string
    if no vowels in the string return 0
    if string contain a vowel uppercase that need to be counted as well

Test:
    string = 1
    vowels = 2
    sdfgh = 0
    Also = 2
    CONSONANTS = 3
*/

const countVowel = (str) => {
    if (typeof str !== 'string') {
      throw new Error('Plese provide a string as value');
    }
    
    const lowerCaseStr = str.toLowerCase();
    const vowel = 'aeiou';
    let totalVowels = 0;
    
    for (i = 0; lowerCaseStr.length > i; i++) {
      if (vowel.includes(lowerCaseStr[i])) {
        ++totalVowels; 
      }
    }
    return totalVowels;
  }
  
  console.log(countVowel('string')); // 1
  console.log(countVowel('vowels')); // 2
  console.log(countVowel('Also')); // 2
  console.log(countVowel('sdfgh')); // 0
  console.log(countVowel('CONSONANTS')); // 3