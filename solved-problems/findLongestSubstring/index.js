// Write a function that accepts a string and returns the length of the longest
// substring with all distinct characters

const findLongestSubstring = (str) => {
  if (typeof str !== 'string') {
    return 'Error: passed in argument is not a string';
  }

  let longest = 0;
  let curLength = 0;
  let substrStart = 0;
  const dict = {};
  
  str.split('').forEach((char, i) => {
    if (i === 0) {
      // dict[str[0]] cannot be set to 0 because else if statement would ignore character
      dict[char] = 'start';
      curLength++;
    } else if (dict[char]) {
      // if dict[char] exists and is non-zero
        // remove chars in dict until dict and curLength reflects new substring
      let index = dict[char];
      if (index === 'start') {
        // 'start' refers to index 0. it has to be set to 0 to use in for loop
        index = 0;
      }
      for (let j = substrStart; j <= index; j++) {
        dict[str[j]] = 0;
        curLength--;
      }
      dict[char] = i;
      curLength++;
      substrStart = index + 1;
    } else {
        dict[char] = i;
        curLength++;
    }

    if (curLength > longest) {
      longest = curLength;
    }
  });
  
  return longest;

  // time complexity: O(n)
  // space complexity: O(n)
};

module.exports = findLongestSubstring;
