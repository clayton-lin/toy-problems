// Given a string, return a new string with the reversed
// order of characters
// 
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'


// solve using reverse()
const reverse = (str) => {
  return str.split('').reverse().join('');
}

// solve using reduce and without reverse()
// const reverse = (str) => {
//   return str.split('').reduce((acc, char) => {
//     return char + acc;
//   }, '');
// }

// solve using str concat without reverse()
// const reverse = (str) => {
//   let reversed = '';
//   str.split('').forEach(char => {
//     reversed = char + reversed;
//   });
//   return reversed;
// }


module.exports = reverse;


console.log(reverse('apple'));
console.log(reverse('Greetings!'));

