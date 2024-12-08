/* 
    Prompt: Write a function that takes a string as input and returns the string reversed.
    Extension: Write a version of this function without built-in methods. 
*/

function reverseStr(str) {
    const splitedStr = str.split('');
    let reversedStr = "";
    for (let i = splitedStr.length -1; i >= 0; i--){
      reversedStr += splitedStr[i];
    }
    return reversedStr;
  }
  reverseStr('devslopes'); 
  