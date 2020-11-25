let assertArraysEqual = function(arr1, arr2) {
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return console.log("🔴🔴🔴 false");
    }
  }
  return console.log("👍👍👍 true");
};

let eqArrays = function(arr1, arr2) {
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

let middle = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return []
  }
};

// TEST CASES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]