let assertArraysEqual = function(arr1, arr2) {
  for (let index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return console.log("🔴🔴🔴 false");
    }
  }
  return console.log("👍👍👍 true");
};

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

// TEST CONDITIONS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, one);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);