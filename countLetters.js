const assertEqual = require('./assertEqual');

let countLetters = function(input) {
  let noSpace = input.split(" ").join("");
  let count = {};
  for (let letter of noSpace) {
    if (count[letter]) {
      count[letter] += 1;
    } else {
      count[letter] = 1;
    }
  }
  return count;
};

module.exports = countLetters;