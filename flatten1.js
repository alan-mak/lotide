// FUNCTION IMPLEMENTATION
let assertArraysEqual = function(arr1, arr2) {
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return console.log("🔴🔴🔴 false");
    }
  }
  return console.log("👍👍👍 true");
};

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

// TEST CASES
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);