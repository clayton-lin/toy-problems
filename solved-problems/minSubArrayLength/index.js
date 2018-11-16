// Create a function that accepts an array of positive integers and a positive
// integer and returns the minimal length of a contiguous subarray of which the
// sum of the integers is greater than or equal to the passed in integer.

const minSubArrayLength = (arr, num) => {
  let minLen = Infinity;
  let curLen = 0;
  let sum = 0;
  let i = 0;
  
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    curLen++;
    while (sum >= num) {
      if (minLen > curLen) {
        minLen = curLen;
      }
      sum -= arr[i];
      i++;
      curLen--;
    }
  }

  // time complexity: O()
  // space complexity: O()
  if (minLen === Infinity) {
    return 0;
  }
  return minLen;
};

module.exports = minSubArrayLength;
