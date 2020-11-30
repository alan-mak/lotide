let assertArraysEqual = require('./assertArraysEqual');

let eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  let noSpace = sentence.split(" ").join("");
  // logic to update results here
  for (let index in noSpace) {
    let i = parseInt(index);
    if (results[noSpace[i]]) {
      results[noSpace[i]].push(i)
    } else {
      results[noSpace[i]] = [i];
    }
  
  }
  return results;
};
module.exports = letterPositions;