 /**
  *  Write a function that takes a number n and returns the 
  * first n numbers in the Fibonacci sequence.
  * 
  * Start with 0,1
  * 
  * Input: a number
  * Output: Fibonnaci sequence of the number
  */

 const fibonacci = (number) => {
    const numbers = [0,1];
    for (let i = 2; i < number; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2])
    }
    // return numbers.join(''); // return ex.: 01123
    return numbers.join(); // return ex.: 0,1,1,2,3
 }

 console.log(fibonacci(5)) // 0,1,1,2,3
 console.log(fibonacci(10)) // 0,1,1,2,3,5,8,13,21,34