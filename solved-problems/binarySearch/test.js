const binarySearch = require('./index');

test('binarySearch function should exist', () => {
  expect(binarySearch).toBeDefined();
});

test('Should return 0 if value 1 exists in array ar index 0', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1)).toEqual(0);
});

test('Should return last index if value exixts in array at last index', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8)).toEqual(7);
});

test('Should return 3 if value 4 exixts in array at index 3', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual(3);
});

test('Should return 6 if value 7 exixts in array at index 6', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7)).toEqual(6);
});

test('Should return -1 if value 10 does not exist in array', () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 10)).toEqual(-1);
});

test('Should return 3 if value 25 exixts in array at index 3', () => {
  expect(binarySearch([1, 12, 23, 25, 34, 35, 38, 40, 46, 47, 49, 59, 64, 78], 25)).toEqual(3);
});

test('Should return -1 if value 100 does not exist in array', () => {
  expect(binarySearch([1, 12, 23, 25, 34, 35, 38, 40, 46, 47, 49, 59, 64, 78], 100)).toEqual(-1);
});