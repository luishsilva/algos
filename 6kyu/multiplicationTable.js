/* 
    Create N×N multiplication table, of size provided in parameter.

    For example, when given size is 3:

    1 2 3
    2 4 6
    3 6 9
    For the given example, the return value should be:

    [[1,2,3],[2,4,6],[3,6,9]] 

    Input = a positive number
    Output = Array with a table of multiplied numbers
*/

const multiplicationTable = (size) => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push([]);
        for (let j = 0; j < size; j++) {
            result[i][j] = (j + 1) * (i + 1);
        }
    }
    return result;
}

multiplicationTable(3);