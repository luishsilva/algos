/* Prompt: Write a function that prints numbers from 1 to 100. For multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz". 
Extension: Modify the function to take two additional parameters fizzNumber and buzzNumber to generalize the FizzBuzz logic to any two numbers.
*/

const fizzBuzzExtension = (fizzNumber, buzzNumber) => {
    if ((typeof fizzNumber !== 'number' || fizzBuzz < 0) || (typeof buzzNumber !== 'number' || buzzNumber < 0)) {
      throw new Error('FizzNumber or BuzzNumber are not a valid number');
    }
    for (let i = 1; i<= 100; i++) {
      if (i % fizzNumber === 0 && i % buzzNumber === 0) {
        console.log('FizzBuzz')
      } else if(i % buzzNumber === 0) {
        console.log('Buzz')
      } else if (i % fizzNumber === 0) {
        console.log('Fizz')
      }
    }
  }
  fizzBuzzExtension(3,5)