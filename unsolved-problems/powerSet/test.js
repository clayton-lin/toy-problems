const powerrSet = require('./index');

test('powerrSet function should exist', () => {
  expect(powerrSet).toBeDefined();
});

test('Should return correct power set for string "a"', () => {
  expect(powerrSet('a')).toEqual([ '', 'a' ]);
});

test('Should return correct power set for string "abc"', () => {
  expect(powerrSet('abc')).toEqual([ '', 'a', 'ab', 'abc', 'b', 'bc', 'c']);
});

test('Should return correct power set for string "horse"', () => {
  expect(powerrSet('horse')).toEqual([ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]);
});

test('Should return correct power set for string with duplicate letters', () => {
  expect(powerrSet('abcabc')).toEqual([ '', 'a', 'ab', 'abc', 'b', 'bc', 'c']);
});