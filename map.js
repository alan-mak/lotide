const map = function(array, callback) {
  const results = new Array;

  for (let item of array) {
    results.push(callback(item))
  }
  return results
};
module.exports = map;

let eqArrays = require('./eqArrays');

let assertArraysEqual = require('./assertArraysEqual');