/* 
Problem statement
You are given a positive integer N and an integer K > 1.

For each integer from 1 to N, repeat the following operation:

Divide the integer by K
If the number is divisible, divide by K, and repeat
Otherwise, end the operation.
Let f(n) be the integer after the operation. For example, if n = 12 and K = 3, then f(12) = 4(12→4).

Find the sum of all f(n) from 1 to N.

Input: N (Positive integer), K (a positive number always greater than 1 => integer k > 1)
Output: sum of all f(n) from 1 to N

Edge case:
  K needs to be greater than 1
  N needs to be a positive number
  
Test
  k = 4
  n = 10
  
  So, 1+2+3+1+5+6+7+2+9+10=46

  The output should be 46.

Eg.: if the number is divisible by for return the result

Steps
  loop from 1 to n
  in the loop check if the number is divisible by k
  if is divisible repeat the division till the number is not divisible anymore 
  1 = 1/4 = 1 because 1 is not divisible by 4
  2 = 2/4 = 2 because 2 is not divisible by 4
  3 = 3/4 = 3 because 3 is not divisible by 4
  4 = 4/4 = 1 4 is divisible by 4
  5 = 5/4 = 5 because 5 is not divisible by 4
  6 = 6/4 = 6 because 6 is not divisible by 4
  7 = 7/4 = 7 because 7 is not divisible by 4
  8 = 8/4 = 2 because 8 is divisible by 4
  9 = 9/4 = 9 because 9 is not divisible by 4
  10 10 /4 = 10 because 10 is not divisible by 4
*/

const calculateSum = (n, k) => {
  if (k < 1 || n < 0 || n === undefined || k === undefined) return null;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    // check if number is divisible by k
    const isNotDivisible = (i % k !== 0);
    sum += isNotDivisible ? i : isDivisible(i, k);
  }
  return BigInt(sum);
}

const isDivisible = (num, k) => {
  // keep dividing till num is not divisible by k anymore
  while (num % k === 0) {
    num = num / k;
  }
  return num;
} 
console.log(calculateSum(10, 4));
  
  
    