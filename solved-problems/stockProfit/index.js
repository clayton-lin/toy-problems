// Given an array of stock prices, what is the most profit you 
// can make from a single purchase/sale of stock? You can only 
// sell the stock after you have purchased it.

// Input : [2, 3, 10, 6, 4, 8, 1]
// Output : 8
// Explanation : The maximum maximum profit you can make is 
// buying at $2 and selling at $10 for $8 profit

// Input : [7, 9, 5, 6, 3, 2]
// Output : 2
// Explanation : The maximum maximum profit you can make is 
// buying at $7 and selling at $9 for $2 profit

// solution must be O(n)


const stockProfit = arr => {
  if (arr.length < 2 || !Array.isArray(arr)) {
    return 'invalid';
  }
  let smallest = arr[0];
  let largest = arr[0];
  let largestDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return `error: element at index ${i} is not a number`;
    }
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      if (largest - smallest > largestDiff) {
        largestDiff = largest - smallest;
      }
      smallest = arr[i];
      largest = arr[i];
    }
    if (i === arr.length - 1) {
      if (largest - smallest > largestDiff) {
        largestDiff = largest - smallest;
      }
    }
  }

  if (largestDiff === 0) {
    return 'you lost money';
  }

  return largestDiff;
}


console.log('test 1: ', stockProfit([2, 3, 10, 6, 4, 8, 1])); // 8
console.log('test 2: ', stockProfit([7, 9, 5, 6, 3, 2])); // 2
console.log('test 3: ', stockProfit([7, 12, 5, 2, 5, 2])); // 5
console.log('test 4: ', stockProfit([7, 10, 5, 2, 3, 7])); // 5
console.log('test 5: ', stockProfit('7, 10, 5, 2, 3, 7')); // 'invalid'
console.log('test 6: ', stockProfit([7, 1, 5, 2, 3, 3])); // '4'
console.log('test 7: ', stockProfit([7, 1, '5', 2, 3, 3])); // 'error: element at index 2 is not number'

module.exports = stockProfit;
