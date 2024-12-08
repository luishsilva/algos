/*
Prompt: Write a recursive function that returns the n-th number in the Fibonacci sequence using a recursive approach. 
Bonus: write a non-recursive, iterative approach.

Input: a number
Output: sum of the numbers using the fibinacci formula F(n)=F(n−1)+F(n−2)

*/

const fibonacci = (number) => {
    if (number <= 1 ) return number;
      // console.log(number)
    return fibonacci(number -1) + fibonacci(number - 2)
  }
  console.log(fibonacci(3))