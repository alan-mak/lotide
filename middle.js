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

let assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
     console.log(`🔴🔴🔴 false ${arr1} !== ${arr2}`);
  } else {
     console.log(`👍👍👍 true ${arr1} === ${arr2}`);
  }
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
assertArraysEqual(middle([1]), []); // => []
console.log(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]