/* 
    Remove Unwanted Words
    Description: You are given a string and a list of "unwanted words." Your task is to remove all occurrences of these unwanted words from the string, 
    but only if they appear as whole words (not as part of another word). After removing the words, clean up any extra spaces, ensuring there are no 
    multiple spaces or leading/trailing spaces.

    Example:
    removeUnwantedWords("I really love programming and coding.", ["really", "and"]);
    Output: "I love programming coding."
    
    Constraints:
    The removal should only occur if the word appears as a whole word (e.g., removing "and" should not affect "android").
    Words are case-sensitive.
    Ensure there are no extra spaces in the final string. 

    Input: String and a list( array ) that will contain all unwanted words
    Output: String with only the wanted words

    Edge case
        Argument should be a string and a list (array)
        If string is empty return empty
        If unwanted words list is empty or null return null or the string
        After remove the unwanted words check for unnecessary empty spaces in the string

    Steps
        1 - Create a function unwantedWords which will receive a string and a list (array) as arguments
        2 - Split the string or use index of to compare the list with the string
        3 - Loop the string to compare the values
*/

const unwantedWords = (str, arr) => {

    if(typeof str !== 'string' || str.length === 0 || !Array.isArray(arr)) return '';

    const result = str
        .split(' ')
        .filter(word => !arr.includes(word))
        .join(' ');
    return result;
}

console.log(unwantedWords('I really love programming and coding', ["really", "and"])); // I love programming coding.