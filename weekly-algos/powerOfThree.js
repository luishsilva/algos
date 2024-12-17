/* 
    Given an integer n, write a function to determine if it is a power of three. 

    Input: Integer number
    Output: True if a power of 3 and false if it's not

    Edge cases
        Argument of the function need to be a positive integer
        Argument need to be integer


    Steps
        1 - Create a function that receive a integer as argument
        2 - Loop the number dividing it by 3 if there is no reminder the number is power of 3
*/

const powerOfThree = (num) => {
    if(!Number.isInteger(num) || num <= 0) return false;

    if(num === 1) {
        return true;
    }

    if (num = num / 3) {
        return powerOfThree(num);
    }
        
    return false;
}

console.log(powerOfThree(3)); // tri
console.log(powerOfThree(27)); // true
console.log(powerOfThree(-1)); // false
console.log(powerOfThree(15)); // false