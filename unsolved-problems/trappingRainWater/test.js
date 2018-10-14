const trap = require('./index');

test('Trap function should exist', () => {
  expect(trap).toBeDefined();
});

test('Should return correct number of water units', () => {
  expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toEqual(6);
});

test('Should return correct number of water units', () => {
  expect(trap([2,0,2])).toEqual(2);
});

test('Should return correct number of water units', () => {
  expect(trap([2,1,0,2])).toEqual(3);
});