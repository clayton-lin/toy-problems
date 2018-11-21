// Create a function that accepts an array and a value and return the index
// at which the value exists. If the value does not exist, return -1.

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  // time complexity: O(n)
  // space complexity: O(1)
  return -1;
};

module.exports = linearSearch;
