// Read input.txt
const fs = require('fs');
const path = require('path');
const inputFileName = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputFileName, 'utf8').split('\n');
// remove last element
input.pop();

/**
 * @param {string} word
 * @returns {string[]}
 */
function returnDigits(word) {
  const regex = /(\d)/gm;
  const matchs = word.match(regex);
  return matchs;
}

/**
 * @param {string} word
 * @returns {string}
 */
function getFirstDigit(word) {
  return returnDigits(word)?.[0];
}

/**
 * @param {string} word
 * @returns {string}
 */
function getLastDigit(word) {
  const digits = returnDigits(word);
  return digits?.[digits.length - 1];
}

function main() {
  console.log('Day 01');
  console.log('\nPart 1');
  let acc = 0;
  for (const word of input) {
    const first = getFirstDigit(word);
    const last = getLastDigit(word);
    console.log(`${word} -> first: ${first}, last: ${last}`);
    acc += +`${first}${last}`;
  }
  console.log(`\nTotal sum: ${acc}`);
  console.log('\nPart 2');

  console.log('\nend\n');
}

module.exports = {
  getFirstDigit,
  getLastDigit,
  input,
};

if (require.main === module) {
  // This function is called when this file is the main module.
  main();
}
