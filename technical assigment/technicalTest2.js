/* 
Squared Array Matching

Given two arrays a and b write a function that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity 
of a member is the number of times it appears). "Same"  here means that the elements in "b" are the elements in "a" squared, regardless of the order.

## Examples

Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the 
square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19] **This is the same as b in the example above just written as squares**
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
c = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,c) returns false because in c 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
d = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,d) returns false because in d 36100 is not the square of any number of a.

Remarks
a or b might be []
a or b might be null
If a or b are  null the problem doesn't make sense so return false. 

square num * num

*/

const comp = (a, b) => {
    const objA = {};
    const objB = {};

    for (let itemA of a) {
        const square = itemA * itemA;
        objA[square] = (objA[square] || 0) + 1;
    }

    for (let itemB of b) {
        objB[itemB] = (objB[itemB] || 0) + 1;
    }
    
    for (let item in objA) {
        if (objA[item] !== objB[item]) return false;
    }
    return true;
}
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a, b)); // true
