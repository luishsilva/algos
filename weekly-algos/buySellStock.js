/* 
    Given an array where the i-th element is the price of a given stock on day i, 
    find the maximum profit you can achieve by buying and then selling the stock. 
    You can only complete one transaction. 

    Input: array [7, 1, 5, 3, 6, 4]
    Output: max profit to buy and then sell the stock

    Profit: 
        6−1=5

    Obs: Only one transaction can be done

    Edge case
        argument of the function need to be a array

    Steps
        1 - Create the function that accept a array as argument
        2 - Identify in the array which day is the best day to buy and sell the stock
        3 - Calculate the profit which is Sell - buy
        4 - Return the profit
*/

// 1 - Create the function that accept a array as argument
const buySellStock = (arr) => {
    if (!Array.isArray(arr)) return null

    let buy = arr[0];
    let sell = 0;

    // 2 - Identify in the array which day is the best day to buy and sell the stock
    for (let i = 1; i < arr.length; i++ ) {
        if (arr[i] < buy) {
            buy = arr[i];
        } else if (arr[i] > sell) {
            sell = arr[i];
        }
    }
    // 3 - Calculate the profit which is Sell - buy
    return sell === 0 ? 0 : sell - buy;
}

console.log(buySellStock([7, 1, 5, 3, 6, 4])); // best day to buy is day = 2 price = 1 and best day to sell is day 5 = 6  profit 5
console.log(buySellStock([1, 5, 3, 9, 4])); // best day to buy is day = 1 price = 1 and best day to sell is day 4 = 9  profit 8
console.log(buySellStock([10, 5, 3, 2, 1])); // best day to buy is day = 1 price = 1 and best day to sell is day 0 = 0  profit 0

