const findLongestSubstring = require('./index');

test('findLongestSubstring function should exist', () => {
  expect(findLongestSubstring).toBeDefined();
});

test('Should return 0 if string is empty string', () => {
  expect(findLongestSubstring('')).toEqual(0);
});

test('Should return 4', () => {
  expect(findLongestSubstring('abcddddddd')).toEqual(0);
});

test('Should return 26', () => {
  expect(findLongestSubstring('abcdefghijklmnopqrstuvwxyz')).toEqual(26);
});

test('Should return 5', () => {
  expect(findLongestSubstring('ilikepie')).toEqual(5);
});

test('Should return 5', () => {
  expect(findLongestSubstring('fredflintstone')).toEqual(12);
});

test('Should return error message if passed in parameter is not s string', () => {
  expect(findLongestSubstring([1, 2, 3])).toEqual('Error: passed in parameter is not a string');
});

