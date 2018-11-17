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
      dict[char] = 'start';
      curLength++;
    } else if (dict[char]) {
      let index = dict[char];
      for (let j = substrStart; j <= index; j++) {
        dict[str[j]] = 0;
        curLength--;
        substrStart = index + 1;
      } 
    } else {
        dict[char] = i;
        curLength++;
    }
    if (curLength > longest) {
      longest = curLength;
    }
  });
  
  return longest;


  // time complexity: O()
  // space complexity: O()

};

module.exports = findLongestSubstring;
