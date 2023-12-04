// Read input.txt
const fs = require('fs');
const path = require('path');
const inputFileName = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputFileName, 'utf8').split('\n');
// remove last element
input.pop();

// PART 1
/**
 * @param {string} word
 * @returns {string[]}
 */
function returnDigits1(word) {
  const regex = /(\d)/gm;
  const matchs = word.match(regex);
  return matchs;
}

/**
 * @param {string} word
 * @returns {string}
 */
function getFirstDigit1(word) {
  return returnDigits1(word)?.[0];
}

/**
 * @param {string} word
 * @returns {string}
 */
function getLastDigit1(word) {
  const digits = returnDigits1(word);
  return digits?.[digits.length - 1];
}

// PART 2
/**
 * This function is needed because the regex.exec() method does not return overlapping matches.
 * @param {string} string
 * @param {RegExp} regex
 * @returns {string[]}
 */
function getOverlappingMatches(string, regex) {
  let matches = [];
  let match;
  while ((match = regex.exec(string)) !== null) {
    matches.push(match[0]);
    regex.lastIndex = match.index + 1;
  }
  return matches;
}

/**
 * @returns {string[]}
 */
function wordDigits() {
  return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
}

/**
 * @param {string} word
 * @returns {string}
 */
function wordToDigit(word) {
  if (!isNaN(word)) return word;
  const words = wordDigits();
  const index = words.indexOf(word);
  if (index === -1) {
    return undefined;
  }
  return `${index + 1}`;
}

/**
 * @param {string} word
 * @returns {string[]}
 */
function returnDigits2(word) {
  const words = wordDigits();
  const regex = new RegExp(`(${words.join('|')}|\\d)`, 'gm');
  const matchs = getOverlappingMatches(word, regex);
  console.log(matchs);
  return matchs;
}

/**
 * @param {string} word
 * @returns {string}
 */
function getFirstDigit2(word) {
  return returnDigits2(word)?.[0];
}

/**
 * @param {string} word
 * @returns {string}
 */
function getLastDigit2(word) {
  const digits = returnDigits2(word);
  return digits?.[digits.length - 1];
}

function main() {
  console.log('Day 01');
  let acc1 = 0;
  let acc2 = 0;
  for (const word of input) {
    console.log(`\n${word}`);
    let first = getFirstDigit1(word);
    let last = getLastDigit1(word);
    let num = +`${first}${last}`;
    if (isNaN(num)) {
      throw new Error(`NaN 01: ${word}`);
    }
    console.log(`\t${num}`);
    acc1 += num;
    first = wordToDigit(getFirstDigit2(word));
    last = wordToDigit(getLastDigit2(word));
    num = +`${first}${last}`;
    if (isNaN(num)) {
      throw new Error(`NaN 02: ${word}`);
    }
    console.log(`\t${num}`);
    acc2 += num;
  }
  console.log('\nPart 1');
  console.log(`Total sum: ${acc1}`);
  console.log('\nPart 2');
  console.log(`Total sum: ${acc2}`);
  console.log('\nend\n');
}

module.exports = {
  getFirstDigit1,
  getLastDigit1,
  returnDigits2,
  getFirstDigit2,
  getLastDigit2,
  wordToDigit,
  input,
};

if (require.main === module) {
  // This function is called when this file is the main module.
  main();
}
