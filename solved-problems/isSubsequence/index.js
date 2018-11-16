// Write a function that takes two strings and check whether the characters in the
// first string form a subsequence of the characters in the second string.

const isSubsequence = (str1, str2) => {
  let i = 0;
  let arr2 = str2.split('');
  
  for (let char of arr2) {
      if (char === str1[i]) {
          i++;
      }
      if (i === str1.length) {
          return true;
      }
  }

  // time complexity: O(n)
  // space complexity: O(1)

  return false;
};

module.exports = isSubsequence;
