const linearSearch = require('./index');

test('linearSearch function should exist', () => {
  expect(linearSearch).toBeDefined();
});

test('Should return correct index 3', () => {
  expect(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)).toEqual(3);
});

test('Should return correct index 0', () => {
  expect(linearSearch([10], 10)).toEqual(1);
});
test('Should return -1 if array is empty', () => {
  expect(linearSearch([], 1)).toEqual(-1);
});

test('Should return -1 if value is not in the array', () => {
  expect(linearSearch([10, 20, 30, 40], 25)).toEqual(-1);
});

test('Should return correct index for a string value', () => {
  expect(linearSearch([10, 'fred', 'tom', 40], 'tom')).toEqual(2);
});