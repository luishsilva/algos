/* 
This method accepts a single argument, a string to be validated.

The string can be of any length and have any contents. But to be considered valid, it must have zero or more spaces, followed by zero to eight numeric digits, 
followed by, again, zero or more spaces.

If it is valid, the number within the string + 1 is returned. Otherwise, the string 'invalid' is returned. A completely empty string is considered valid, equal to zero.

'   7   '     returns 8

'   2 8   '     returns 'invalid' (there mustn't be any spaces (or any other characters) between digits

'     a  8 '     returns 'invalid'

'    ' returns 1

'abc1' returns 'invalid'

An easy problem.

The only slight challenge is to produce a simple method that has no regular expressions and no nesting; no explict nesting with 'for' or 'while' or whatever, 
no block nesting with things like 'map' or 'each'; obviously I have no way of enforcing this! 

Input: string
Output: number + 1

Steps:
    Loop over the string identify  a valid string
    When string is identified check if the previous string is a empty space and check if the next string is a empty space

Edge Cases
    Verify if param is a string if not return 'invalid'
    If digit is find verify if there is any space before and after the encountered digit if so return 'invalid'
    If a non digit is found the 'invalid' should be returned
*/

const simpleStringValidation = (str) => {
  const trimmed = str.trim();

  if (trimmed === "") return 1;

  let result = 0;
  for (const char of trimmed) {
    if (char >= "0" && char <= "9") {
      result = Number(trimmed) + 1;
    } else {
      return "invalid";
    }
  }

  return result;
};

console.log(simpleStringValidation(" 2 9  ")); // invalid
console.log(simpleStringValidation(" 25 ")); // 26
console.log(simpleStringValidation(" ")); // 1
