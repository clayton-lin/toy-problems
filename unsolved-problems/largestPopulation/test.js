const largestPopulation = require('./index');
const starks = require('./sampleData')

test('largestPopulation function should exist', () => {
  expect(largestPopulation).toBeDefined();
});

test('Should return correct year', () => {
  expect(largestPopulation(starks)).toEqual();
});