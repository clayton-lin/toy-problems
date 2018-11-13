// Write function to check if two strings are anagrams of each other
// Assume all characters are lower case and there are no spaces

const validAnagram = (str1, str2) => {
    // if the length of both are not the same, the strings cannot be anagrams  
    if (str1.length !== str2.length) {
      return false;
    }
    
    // create a dictionary from str1
    const dict = {};
    str1.split('').forEach(char => {
      dict[char] = ++dict[char] || 1;
    })
    
    // for each char in str2
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      // return false if char count is undefined or 0
      if (!dict[char]) {
        return false;
      }
      // otherwise decrement char count
      dict[char] = --dict[char];
    }
    
    // time complexity: O(n)
    // space completcity: O(n)
    return true;
};

module.exports = validAnagram;
