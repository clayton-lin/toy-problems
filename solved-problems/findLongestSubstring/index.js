// Write a function that accepts a string and returns the length of the longest
// substring with all distinct characters

const findLongestSubstring = (str) => {
  if (typeof str !== 'string') {
    return 'Error: passed in argument is not a string';
  }

  let longest = 0;
  let curLength = 0;
  let start = 0;
  const dict = {};
  
  str.split('').forEach((char, i) => {
    if (dict[char] !== undefined) {
      let index = dict[char];
      for (let j = start; j <= index; j++) {
        dict[str[j]] = undefined;
        curLength--;
      }
      start = index + 1;
    }

    dict[char] = i;
    curLength++;

    if (curLength > longest) {
      longest = curLength;
    }
  });
  
  return longest;

  // time complexity: O(n)
  // space complexity: O(n)
};

module.exports = findLongestSubstring;
