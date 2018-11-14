const areThereDuplicates = require('./index');

test('areThereDuplicates function should exist', () => {
  expect(areThereDuplicates).toBeDefined();
});

test('Should return false if there are no duplicate numbers', () => {
  expect(areThereDuplicates(1, 2, 3)).toEqual(false);
});

test('Should return true if there are duplicate numbers', () => {
  expect(areThereDuplicates(1, 2, 2)).toEqual(true);
});

test('Should return true if there are duplicate strings', () => {
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toEqual(true);
});

test('Should return false if there are no arguments', () => {
  expect(areThereDuplicates()).toEqual(false);
});