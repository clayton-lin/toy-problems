// Given a sorted array of integers and a target average, determine if there is
// a pair of values in the array where the average of the pair equls the target
// average.

const averagePair = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;
  
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 === target) {
        return true;
    } else if ((arr[i] + arr[j]) / 2 < target) {
        i++;
    } else if ((arr[i] + arr[j]) / 2 > target) {
        j--;
    }
  }
  
  // time complexity: O(n)
  // space complexity: O(1)

  return false;
};

module.exports = averagePair;
