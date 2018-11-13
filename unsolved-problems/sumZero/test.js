const sumZero = require('./index');

test('sumZero function should exist', () => {
  expect(sumZero).toBeDefined();
});

test('should return numbers that sum to zero', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
});

test('should return numbers that sum to zero', () => {
  expect(sumZero([-3, -1, 0, 1, 2, 4])).toEqual([-1, 1]);
});

test('should return null if array is empty', () => {
  expect(sumZero([])).toEqual(null);
});

test('should return null if there are no numbers that sum to 0', () => {
  expect(sumZero([-3, -1, 0, 2, 4, 5])).toEqual(null);
});