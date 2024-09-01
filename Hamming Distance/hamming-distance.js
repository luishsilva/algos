/**
 * The Hamming Distance is a measure of similarity between two strings of equal length. 
 * Complete the function so that it returns the number of positions where the input strings do not match.
 * Inputs: string1 and string2
 * Outputs: number of strings that not match
 * Edge cases
 *  Strings should be valid
 * 
 * Test
 *  a = "I like turtles"
 *    b = "I like turkeys"
 *   Result: 3
 *
 *   a = "Hello World"
 *   b = "Hello World"
 *  Result: 0
 *
 *   a = "espresso"
 *   b = "Expresso"
 *   Result: 2
 */

const hamming = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string' || !str1 || !str2 ) return 0
      
    const longerString = str1.length > str2.length ? str1 : str2
    let result = 0;
    for (let i = 0; i < longerString.length; i++) {
      if (str1[i] !== str2[i]) {
        result += 1; 
      }
    }
    return result;
}
