/* Write a program that prints all the numbers from 1 to 100. 
For multiples of 3 , instead of the number ,print "Fizz", for multiples of 5 print "Buzz".
For numbers wich are multiples of both 3 and 5 , print "FizzBuzz".
*/

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    // i % 15
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

const output = fizzBuzz();
console.log(output);
