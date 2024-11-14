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

Steps
  loop from 1 to n
  in the loop 
*/

const kDivide = (n, k) => {
    if (k < 1 || n < 0 || n === undefined || k === undefined) return null;
    
    for (let i = 1; i <= n; i++) {
      console.log(i)
    }
    
  }
  
  kDivide(10, 4);
  
  
    