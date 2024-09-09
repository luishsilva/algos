/*Longest Word in a Sentence: Create a function that finds the longest word in a given string. For example, "The quick brown fox" returns "quick."

Input: A string sentence
Output: the longest word in the sentence

Edge cases: needs to be a string

Test:
  Longest word in a sentence: result would be "Sentence"
  The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.: result would be statement;
  123456: result would be Please provide a valid string

*/

const longestWord = (sentence) => {
    if (typeof sentence !== 'string') throw new Error('Please provide a valid string');
    
    const splitSentence = sentence.split(' ');
    let longWord = '';
    for (const word of splitSentence) {
      if (word.length > longWord.length) {
        longWord = word;
      }
    }
    return longWord;
  }
  
  console.log(longestWord("Longest wordeslting in a sentence"));
  console.log(longestWord("The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object."));
  console.log(longestWord(12345));  