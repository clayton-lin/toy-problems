const maxSubarraySum = require('./index');

test('maxSubarraySum function should exist', () => {
  expect(maxSubarraySum).toBeDefined();
});

test('Valid test 1', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toEqual(700);
});

test('Valid test 2', () => {
  expect(maxSubarraySum([10, 20, -1, 0, 35, -40, 12], 3)).toEqual(34);
});

test('Valid test 3', () => {
  expect(maxSubarraySum([1, 2, 3, 0, -5, 3, 4, 6, -3, 3], 4)).toEqual(10);
});

test('Valid test 4', () => {
  expect(maxSubarraySum([-1, -2, -4, -2, 3, -2, -4, 2, -1], 3)).toEqual(-1);
});

test('Should return null if array length is less than passed in size', () => {
  expect(maxSubarraySum([2, 3], 3)).toEqual(null);
});