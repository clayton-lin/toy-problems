const minSubArrayLength = require('./index');

test('minSubArrayLength function should exist', () => {
  expect(minSubArrayLength).toBeDefined();
});

test('Test 1', () => {
  expect(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
});

test('Test 2', () => {
  expect(minSubArrayLength([3, 1, 7, 11, 2, 9, 24, 34, 48, 23, 14], 45)).toEqual(1);
});

test('Test 3', () => {
  expect(minSubArrayLength([1, 3, 5, 7, 9, 11, 13], 20)).toEqual(2);
});

test('Test 4', () => {
  expect(minSubArrayLength([1, 3, 5, 7, 9, 11, 13], 45)).toEqual(5);
});


test('Shoudl return 0 if no subarray sums to passed in integer', () => {
  expect(minSubArrayLength([1, 2, 3, 4, 5, 6, 7, 8], 42)).toEqual(0);
});