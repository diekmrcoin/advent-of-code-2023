// Read input.txt
const fs = require('fs');
const path = require('path');
const inputFileName = path.join(__dirname, 'input.txt');
const input = fs
  .readFileSync(inputFileName, 'utf8')
  .split('\n')
  .map((line) => line.trim());
// remove last element
input.pop();

function debug(...args) {
  if (process.env.NODE_DEBUG) console.log(...args);
}
let sum1 = 0;

for (const line of input) {
  const numbers = /(\d+)/g;
  let match;
  while ((match = numbers.exec(line))) {
    debug(match);
    // Check if the number has a symbol before it or after it
    const prevChar = line.charAt(match.index - 1);
    const nextChar = line.charAt(match.index + match[0].length);
    // Check diagonally the line above and below
    const prevLine = input[input.indexOf(line) - 1];
    const nextLine = input[input.indexOf(line) + 1];
    if(prevChar !== '.') sum1 += parseInt(match[0]);
    else if(nextChar !== '.') sum1 += parseInt(match[0]);
    else if(prevLine){

    }
    else if(nextLine){
      
    }
  }
}
