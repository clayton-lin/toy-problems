// Return the number of unique values in a sorted array
// Use the multiple pointer pattern for O(n) time and O(1) space complexity.

const countUniqueValues = (arr) => {
  if (!Array.isArray(arr)) {
    return 'Input is not an array';
  }
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] < arr[j - 1]) {
      return `Array is not properly sorted at index ${j}`;
    }
    if (arr[j] !== arr[j - 1]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // time complexity: O(n)
  // space complexity: O(1)
  return i + 1;
};

module.exports = countUniqueValues;
