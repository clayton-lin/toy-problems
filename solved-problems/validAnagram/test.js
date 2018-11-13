const validAnagram = require('./index');

test('validAnagram function should exist', () => {
  expect(validAnagram).toBeDefined();
});

test('ahould return true for an empty string', () => {
  expect(validAnagram('', '')).toEqual(true);
});

test('ahould return true for two strings that are anagrams', () => {
  expect(validAnagram('anagram', 'aganmra')).toEqual(true);
});

test('ahould return false for two strings that are not anagrams', () => {
  expect(validAnagram('fried', 'dried')).toEqual(false);
});

test('ahould return false for two strings are different lengths', () => {
  expect(validAnagram('tomato', 'tomatos')).toEqual(false);
});
