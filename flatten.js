// FUNCTION IMPLEMENTATION
let eqArrays = require('./eqArrays');

let assertArraysEqual = require('./assertArraysEqual');

let flatten = function(input) {
  let newArr = new Array;
  for (let arr of input) {
    if (Array.isArray(arr)) {
      for (let subArr of arr) {
        newArr.push(subArr);
      }
    } else {
      newArr.push(arr);
    }
  }
  return newArr;
};

module.exports = flatten;