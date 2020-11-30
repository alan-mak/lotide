let eqArrays = require('./eqArrays');
let assertArraysEqual = require('./assertArraysEqual');

let middle = function(arr) {
  let newArr = [];
  let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[mid]);
  } else if (arr.length % 2 === 0) {
    for (let i = (mid - 1); i <= mid; i++) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
module.exports = middle;