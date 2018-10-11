// Write a function that returns the number of vowels used in a string

const vowels = (str) => {
  const vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  str.toLowerCase().split('').forEach(char => {
    if (vowels[char] !== undefined) {
      vowels[char] += 1;
    }
  });
  
  return vowels['a'] + vowels['e'] + vowels['i'] + vowels['o'] + vowels['u'];
}

console.log(vowels('There are 9 vowels in this string')); // 9
console.log(vowels('aAbBcCdDeE')); // 4
console.log(vowels('oierbzvhbveiFOubkgsdld')); // 7

