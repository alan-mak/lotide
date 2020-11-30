let eqArrays = require('./eqArrays');
let assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  // ...
  const newArr = [];
  for (let number of array) {
    if (!callback(number)) {
      newArr.push(number)
    } else {
      break;
    }
  }
  return newArr;
}
// Instead of  x => x < 0; we can write it fully like this
const one = function(x) {
  return x < 0;
}
module.exports = takeUntil;