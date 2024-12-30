/* 
    Write a function that takes an array of strings as input and groups the strings into arrays of anagrams. 
    Return an object where the keys are the sorted version of the letters in each group, and the values are 
    arrays of words that are anagrams of each other. 

    Rules:
        Each group key should be a sorted version of the letters in the group.
        Strings in the array can contain lowercase letters only.
        The function should work for an array of any length.

    Input:
    ["eat", "tea", "tan", "ate", "nat", "bat"]

    Output:
    {
        "aet": ["eat", "tea", "ate"],
        "ant": ["tan", "nat"],
        "abt": ["bat"]
    }

    Steps:
        1 - loop over the array
        2 - order each word alphabetically 
        3 - each word alphabetically ordered will be the key of the object
        4 - compare each letter in the object key with each word in the array to verify the anagram
        5 - if all letters match the word add the word to the present key
*/

const anagram = (arr) => {
  let obj = {};

  for (const word of arr) {
    const key = word.split("").sort().join("");

    if (obj.hasOwnProperty(key)) {
      obj[key].push(word);
    } else {
      obj[key] = [word];
    }
  }
  return obj;
};

console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
