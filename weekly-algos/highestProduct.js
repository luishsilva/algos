/* 
    Prompt: Given an array of integers, find the highest product of two unique numbers in the array.
    Extension: Do not use native methods. 

    Input: array of integers
    Output: the highest product of two unique numbers (means multiply two sequential numbers in the array of integers)

    Ex.: [1, 2, 3, 4] = 1 x 2 = 2
                        2 x 3 = 6
                        3 x 4 = 12

         [2, 5, 8, 3] = 2 x 5 = 10
                        5 x 8 = 40
                        8 x 3 = 24

        [1, 10, 5, 7]

    Result in this case is 40

    Edge cases
        array need to be bigger than 2 numbers
        Need to handle negative numbers

*/

const highestProduct = (arr) => {
    let highestProduct = 0;

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i] * arr[i + 1];
        if (highestProduct < sum) {
            highestProduct = sum;
        }
    }
    return highestProduct;
}

highestProduct([1, 2, 3, 4]); // 12
highestProduct([2, 5, 8, 3]); // 12
