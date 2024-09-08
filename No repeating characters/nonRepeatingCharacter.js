/* Implement a function that returns the first non-repeating character in a string. 
If all characters are repeating, return null. 
Input = string
Output = null || first non-repeating character

Test 
  aaaaa = return null
  abaaa = return b
  aaac = return c
  
*/

const nonRepeatingCharacter = (str) => {
    for (let i = 0; i < str.length ; i++){
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null;
  }
  
  console.log(nonRepeatingCharacter('aaaaa')); // Output: null
  console.log(nonRepeatingCharacter('abaaa')); // Output: 'b'
  console.log(nonRepeatingCharacter('aaac')); // Output: 'c'