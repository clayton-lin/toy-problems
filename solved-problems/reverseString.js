// Given a string, return a new string with the reversed
// order of characters
// 
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

// solve using reduce and without reversing


// solve using str concat without reversing



module.exports = reverse;
