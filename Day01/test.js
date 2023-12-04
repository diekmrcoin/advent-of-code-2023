const { getFirstDigit1, getLastDigit1, returnDigits2, getFirstDigit2, getLastDigit2, wordToDigit } = require('./solution');

describe('day01', () => {
  describe('part1', () => {
    it('Test getFirstDigit 1', async () => {
      expect(getFirstDigit1('1abc')).toBe('1');
      expect(getFirstDigit1('abc1')).toBe('1');
      expect(getFirstDigit1('1abc2')).toBe('1');
      expect(getFirstDigit1('abc')).toBe(undefined);
    });
    it('Test getLastDigit 1', async () => {
      expect(getLastDigit1('1abc')).toBe('1');
      expect(getLastDigit1('abc1')).toBe('1');
      expect(getLastDigit1('1abc2')).toBe('2');
      expect(getLastDigit1('abc')).toBe(undefined);
    });
  });
  describe('part2', () => {
    it('Test getFirstDigit 2', async () => {
      expect(getFirstDigit2('one1as')).toBe('one');
      expect(getFirstDigit2('twoone1as')).toBe('two');
      expect(getFirstDigit2('1two')).toBe('1');
      expect(getFirstDigit2('threeabstwo')).toBe('three');
      expect(getFirstDigit2('abc')).toBe(undefined);
      expect(wordToDigit(getFirstDigit2('one1as'))).toBe('1');
    });
    it('Test getLastDigit 2', async () => {
      expect(getLastDigit2('one1as')).toBe('1');
      expect(getLastDigit2('1two')).toBe('two');
      expect(getLastDigit2('threeabstwo')).toBe('two');
      expect(getLastDigit2('abc')).toBe(undefined);
      expect(wordToDigit(getLastDigit2('one1as'))).toBe('1');
    });
    it('Test wordToDigit', async () => {
      expect(wordToDigit('one')).toBe('1');
      expect(wordToDigit('two')).toBe('2');
      expect(wordToDigit('three')).toBe('3');
      expect(wordToDigit('four')).toBe('4');
      expect(wordToDigit('five')).toBe('5');
      expect(wordToDigit('six')).toBe('6');
      expect(wordToDigit('seven')).toBe('7');
      expect(wordToDigit('eight')).toBe('8');
      expect(wordToDigit('nine')).toBe('9');
      expect(wordToDigit('ten')).toBe(undefined);
      expect(wordToDigit('asdf')).toBe(undefined);
    });
    it('Test provided examples', async () => {
      const words = [
        'two1nine',
        'eightwothree',
        'abcone2threexyz',
        'xtwone3four',
        '4nineeightseven2',
        'zoneight234',
        '7pqrstsixteen',
      ];
      const firstDigits = words.map(getFirstDigit2);
      expect(firstDigits).toEqual(['two', 'eight', 'one', 'two', '4', 'one', '7']);
      const lastDigits = words.map(getLastDigit2);
      expect(lastDigits).toEqual(['nine', 'three', 'three', 'four', '2', '4', 'six']);
      const combo = words.map((word) => +`${wordToDigit(getFirstDigit2(word))}${wordToDigit(getLastDigit2(word))}`);
      expect(combo).toEqual([29, 83, 13, 24, 42, 14, 76]);
      const sum = combo.reduce((acc, cur) => acc + cur, 0);
      expect(sum).toBe(281);
    });
    it("Test shared letters", async () => {
      const word = "332bfjbttrmbrxjqssr6oneight"
      const matches = returnDigits2(word);
      const expected = [ '3', '3', '2', '6', 'one', 'eight' ];
      expect(matches).toEqual(expected);
    });
  });
});
