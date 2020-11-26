const map = function(array, callback) {
  const results = new Array;

  for (let item of array) {
    results.push(callback(item))
  }
  return results
};

let assertArraysEqual = function(arr1, arr2) {
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return console.log("🔴🔴🔴 false");
    }
  }
  return console.log("👍👍👍 true");
};

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let index in arr1) {
      if (arr1[index] !== arr2[index]) {
        return false;
      }
    }
    return true;
  }
};

// TEST CASE
const words = ["ground", "control", "to", "major", "tomas"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o'])
assertArraysEqual(results3, ['o', 'n', undefined, 'j', 'm'])