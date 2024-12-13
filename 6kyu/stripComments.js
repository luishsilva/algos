/* 
    1. Strip Comments
    Description:
    You are given a string and a list of comment markers (e.g., # or //). Your task is to remove all text after any marker and clean up any trailing whitespace.

    Example:
    stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

    // Output: "apples, pears\ngrapes\nbananas"
    
    Constraints:
    Markers apply to individual lines.
    Whitespace should be stripped after removing comments. 

    Input: String containing some comment markers
    Output: String without the comments

    Steps:
        1 - Create the function which expect 2 arguments a string and a list of markers
        2 - Verify if the character is equal one of the markers
        3 - Remove the comment
        4 - Store in a variable only the string that will be returned
        5 - Return the correct string

    Questions
        Will all the strings contain  \n(new line character) ?
*/

const stripComments = (str, markers) => {

    let hasMarker = false;
    let newString = '';

    for (const char of str) {

        if (!markers.includes(char) && !hasMarker) {
            newString += char;
        } else if (char === '\n') {
            hasMarker = false;
        } else {
            hasMarker = true;
        }
    }
    return newString.trim();
}

console.log(stripComments("Test splitting |string by New !line hope it \nworks", ["|", "!"])); // Output: "Test splitting works"
console.log(stripComments("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])); // "apples, pears\ngrapes\nbananas"



