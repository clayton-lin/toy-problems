const averagePair = require('./index');

test('averagePair function should exist', () => {
  expect(averagePair).toBeDefined();
});

test('Should return true if there is a pair of numbers whose average equals target', () => {
  expect(averagePair([1, 2, 3, 4, 6, 12], 5)).toEqual(true);
});

test('Should return false if there is no pair of numbers whose average equals target', () => {
  expect(averagePair([-2, 0, 1, 3, 5], 4.1)).toEqual(false);
});

test('Should return false if array is empty', () => {
  expect(averagePair([], 1)).toEqual(false);
});