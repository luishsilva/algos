/* 
    Prompt: Write a function that takes a string as input and returns the longest word in the string.
    Extension: Modify the function to return an array of all longest words (in case there are ties). 

    Input: string
    Output: longest word in the string

    Edge case:
        Input need to be a string
        Check if string is empty return undefined

    Example:
        Practicing to become a better developer = practicing

    My steps:
        First split the string and turn it into a array 
        Loop over the array and count how many characters each word has
        Return the longest comparing by the word length
*/

const longestWord = (str) => {
    let longestWord = '';
    let wordCount = 0;
    const wordsArray = str.split(' ');
    for ( const word of wordsArray) {
        if (word.length > wordCount) {
            wordCount = word.length;
            longestWord = word;
        }
    }
    return longestWord;
}

longestWord('Practicing to become a better developer');
