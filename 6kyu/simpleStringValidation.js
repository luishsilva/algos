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
Output: string + 1

Steps:
    Loop over the string identify  a valid string
    When string is identified check if the previous string is a empty space and check if the next string is a empty space

Edge Cases
    Verify if param is a string if not return 'invalid'
    If digit is find verify if there is any space before and after the encountered digit if so return 'invalid'
    If a non digit is found the 'invalid' should be returned
*/

const simpleStringValidation = (str) => {

    if (str === ' ') return 1;

    let validNumber = 0;
    let foundNumber = false;
    let invalid = '';

    for (let i = 0; i< str.length; i++) {
        if(Number.parseInt(str[i]) && invalid !== 'invalid'){
            validNumber += str[i];
            foundNumber = true;
        } else if (foundNumber){
            if (!Number.parseInt(str[i + 1] === ' ' && foundNumber)) {
                invalid = 'invalid';
                console.log(invalid)
            }
        }
    }
    console.log(validNumber);
}

simpleStringValidation('   7 7   ');