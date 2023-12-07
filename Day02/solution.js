// Read input.txt
const fs = require('fs');
const path = require('path');
const inputFileName = path.join(__dirname, 'input.txt');
const input = fs.readFileSync(inputFileName, 'utf8').split('\n');
// remove last element
input.pop();

function debug(...args) {
  if (process.env.NODE_DEBUG) console.log(...args);
}

// bag had been loaded with only 12 red cubes, 13 green cubes, and 14 blue cubes
// line example "Game 1: 8 green, 4 red, 4 blue; 1 green, 6 red, 4 blue; 7 red, 4 green, 1 blue; 2 blue, 8 red, 8 green"
const initialCubes = { red: 12, green: 13, blue: 14 };
let sum1 = 0;
let sum2 = 0;
for (const line of input) {
  const regex = /^Game (\d+): (.*)$/gm;
  const regex2 = /(\d+) (\w+)/g;
  debug(line);
  const match = regex.exec(line);
  const game = +match[1];
  const cubes = match[2];
  const sets = cubes.split(';');
  let setsValid = true;
  const minConfig = { red: 0, green: 0, blue: 0 };
  for (const set of sets) {
    const bag = { red: 0, green: 0, blue: 0 };
    let match2;
    while ((match2 = regex2.exec(set))) {
      bag[match2[2]] += +match2[1];
      minConfig[match2[2]] = Math.max(minConfig[match2[2]], bag[match2[2]]);
    }
    setsValid = setsValid && Object.keys(bag).every((color) => bag[color] <= initialCubes[color]);
  }
  const cubePower = Object.keys(minConfig).reduce((acc, color) => acc * minConfig[color], 1);
  sum2 += cubePower;
  if (setsValid) {
    sum1 += game;
  }
}
console.log('PART 1', sum1);
console.log('PART 2', sum2);
