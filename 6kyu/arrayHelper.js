/* 
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in 
Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case! 
*/

Array.prototype.square = function() {
    return this.map(s => s**2);
};

Array.prototype.cube = function() {
    return this.map(c => c**3);
}

Array.prototype.average = function() {
    return this.length === 0 ? NaN : this.reduce((curr, val) => curr + val, 0) / this.length;
}

Array.prototype.sum = function() {
    return this.isEmpty ? NaN : this.reduce((curr, val) => curr + val, 0);
}

Array.prototype.even = function() {
    return this.filter(e => e % 2 === 0);
};

Array.prototype.odd = function() {
    return this.filter(o => o % 2 !== 0);
}

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());
