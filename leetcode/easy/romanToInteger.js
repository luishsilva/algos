/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, 
the number four is written as IV.
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
    Input: s = "III"
    Output: 3
    Explanation: III = 3.

Example 2:
    Input: s = "LVIII"
        Output: 58
        Explanation: L = 50, V= 5, III = 3.

Example 3:
    Input: s = "MCMXCIV"
        Output: 1994
        Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

What is the problem to be solved?
    Convert a Numeral roman symbol into a integer


Input: s = "III"
Output: 3
Explanation: III = 3.

Obs.: For the number 4 the symbol used is IV 
      For the number 9 the symbol used is IX 
      I can be placed before V (5) and X (10) to make 4 and 9. 
      X can be placed before L (50) and C (100) to make 40 and 90. 
      C can be placed before D (500) and M (1000) to make 400 and 900.

Steps
    1 - Loop over the symbol to identify with integer that symbol represents
        1.1 If symbol is I and next symbol is V the number is 4 because we subtract 5 which is V minus 1 which is I
        1.2 If symbol is I and the next symbol is X the number is 9 because we subtract 10 which is X minus 1 which is I
        1.3 If symbol is X and next symbol is L number is 50
        1.4 If symbol is X and next symbol is C number is 90
        1.5 If symbol is C and next symbol is D number if 500
        1.6 If symbol is C abd next symbol is M number is 1000 
    
    2 - After figure out which integer each number or pair of number represents 
        2.1 Sum the values to get the final result

*/

const romanToInt = function (s) {
  for (let i = 0; i < s.length; i++) {
    const nextSymbol = s[i + 1];
    if (nextSymbol !== undefined && nextSymbol === "V") {
      console.log(
        "Next symbol is v, so value will be 5 - 1 which is 4 index ->",
        i + 1
      );
    }
    // console.log(s[i]);
  }
};

romanToInt("IVI"); // 3
