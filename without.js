let eqArrays = require('./eqArrays');
let assertArraysEqual = require('./assertArraysEqual');

let without = function(source, itemsToRemove) {
  let kept = [];
  for (let word of source) {
    let counter = 0;
    for (let hazard of itemsToRemove) {
      if (word === hazard) {
        //Don't add source i
        counter ++;
      }
    }
    if (counter === 0) {
      kept.push(word);
    }
  }
  return kept;
};
module.exports = without;