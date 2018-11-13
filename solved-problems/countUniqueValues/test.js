const countUniqueValues = require('./index');

test('countUniqueValues function should exist', () => {
  expect(countUniqueValues).toBeDefined();
});

test('should return correct count for array of positive numbers', () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toEqual(2);
});

test('should return correct count for array of negative numbers', () => {
  expect(countUniqueValues([-4, -3, -3, -1])).toEqual(3);
});

test('should return correct count for array of postive and negative numbers', () => {
  expect(countUniqueValues([-4, -3, -3, -1, 0, 3, 4, 4, 4, 6])).toEqual(7);
});

test('should return error message if input is not an array', () => {
  expect(countUniqueValues({ a: 1, b: 2, c: 3 })).toEqual('Input is not an array');
});

test('should return error message if array is not sorted', () => {
  expect(countUniqueValues([1, 4, 3, 5])).toEqual('Array is not properly sorted at index 2');
});