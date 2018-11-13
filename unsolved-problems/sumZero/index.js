// For a sorted array of numbers, find if two numbers in the array sum up to zero.
// If there are, return an array containing the two numbers.
// Otherwise, return null.
// Use the multiple pointer pattern for O(n) time and O(1) space complexity.

const sumZero = (arr) => {
  let i = 0;
  let j = arr.length -1;
  
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else if (arr[i] + arr[j] > 0) {
      j--;
    }
  }
  
  // time complexity: O(n)
  // space complexity: O(1)
  return null;
};

module.exports = sumZero;
