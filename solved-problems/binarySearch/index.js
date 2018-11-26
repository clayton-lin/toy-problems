// Write a function that accepts a sorted array and a value and returns the index at
// which the value exists. Otherwise, return -1.

const binarySearch = (arr, val) => {

  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  // time complexity: O(log(n))
  // space complexity: O(1)

  return -1;
};

module.exports = binarySearch;
