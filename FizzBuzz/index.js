// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

// n = 15, 
// Return:
// [
//    "1",
//    "2",
//    "Fizz",
//    "4",
//    "Buzz",
//    "Fizz",
//    "7",
//    "8",
//    "Fizz",
//    "Buzz",
//    "11",
//    "Fizz",
//    "13",
//    "14",
//    "FizzBuzz"
// ]

const fizzBuzz = (num) => {
  if (typeof num !== 'number') { return 'NaN'; }
  if (num < 1) { return 'invalid'; }
  if (num % 15 === 0) { return 'FizzBuzz'; }
  if (num % 3 === 0) { return 'Fizz'; }
  if (num % 5 === 0) { return 'Buzz'; }
  return '' + num;
}

console.log(fizzBuzz(4));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(45));
console.log(fizzBuzz(-1));
console.log(fizzBuzz('5'));


