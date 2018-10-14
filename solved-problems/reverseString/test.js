const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string padded with spaces', () => {
  expect(reverse('    distraction spaces  ')).toEqual('  secaps noitcartsid    ');
});