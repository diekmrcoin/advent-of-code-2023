const { getFirstDigit, getLastDigit } = require('./solution');

describe('day01', () => {
  it('Test getFirstDigit', async () => {
    expect(getFirstDigit('1abc')).toBe('1');
    expect(getFirstDigit('abc1')).toBe('1');
    expect(getFirstDigit('1abc2')).toBe('1');
    expect(getFirstDigit('abc')).toBe(undefined);
  });
  it('Test getLastDigit', async () => {
    expect(getLastDigit('1abc')).toBe('1');
    expect(getLastDigit('abc1')).toBe('1');
    expect(getLastDigit('1abc2')).toBe('2');
    expect(getLastDigit('abc')).toBe(undefined);
  });
});
