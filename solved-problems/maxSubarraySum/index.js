// Given an array of integers and a number, write a function that finds the
// maximum sum if a subarray with size of the passed number
// Return null if subarray is not valid

const maxSubarraySum = (arr, size) => {
  if (arr.length < size) {
    return null;
  }
  
  let current = 0;
  for (let i = 0; i < size; i++) {
    current += arr[i];
  }

  let max = current;

  for (let j = size; j < arr.length; j++) {
    current = current + arr[j] - arr[j - size];
    if (current > max) {
      max = current;
    }
  }

  // time complexity: O(n)
  // space complexity: O(1)
  return max;
};

module.exports = maxSubarraySum;
