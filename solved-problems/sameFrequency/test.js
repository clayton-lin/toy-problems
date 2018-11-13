const sameFrequency = require('./index');

test('sameFrequency function should exist', () => {
  expect(sameFrequency).toBeDefined();
});

test('should return true if numbers have the same frequency of numbers', () => {
  expect(sameFrequency(182, 281)).toEqual(true);
});

test('should return false if the digits are not the same', () => {
  expect(sameFrequency(34, 14)).toEqual(false);
});

test('should return true if numbers have the same frequency of numbers for larger numbers', () => {
  expect(sameFrequency(3589578, 5879385)).toEqual(true);
});

test('should return false if numbers are different number of digits', () => {
  expect(sameFrequency(22, 222)).toEqual(false);
});