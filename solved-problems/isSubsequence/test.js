const isSubsequence = require('./index');

test('isSubsequence function should exist', () => {
  expect(isSubsequence).toBeDefined();
});

test('Should return true', () => {
  expect(isSubsequence('hello', 'hello world')).toEqual(true);
});

test('Should return true', () => {
  expect(isSubsequence('tomato', 'tidgjdosfjdfmafdftjbjdo')).toEqual(true);
});

test('Should return false', () => {
  expect(isSubsequence('hello', 'goodbye world')).toEqual(false);
});