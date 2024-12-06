/* 
    Write a function that takes a string and creates a new string where each character is 
    repeated as many times as its position in the string (1-based index). 
    For instance, the input "abc" would become "abbccc"

    Input: string;
    Output: character in the string repeated by it's position in the string

    Steps:
        1 - create the function with a string as argument
        2 - loop over the string to identify the string position value
        3 - repeat the character accordingly with it's position
        4 - return the new string

    Test
        abc = abbccc

    Edge cases
        test if argument is a string
        test if argument is not a string
 */

// 1 - create the function
const repeatCharsByPosition = (str) => {
    let charPosition = {}

    // test if argument is a string, test if argument is not a string
    if (typeof str !== 'string' || str.length === 0) return null;
    
    // 2 - loop over the string to identify the string position value
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        charPosition[str[i]] = i + 1;
    }

    const result = Object.entries(charPosition).map((key, value) => console.log(key, value))
}

repeatCharsByPosition('abc'); // abbccc