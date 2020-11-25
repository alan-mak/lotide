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

// TEST CASES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]