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

let without = function(source, itemsToRemove) {
  let kept = [];
  for (let word of source) {
    let counter = 0;
    for (let hazard of itemsToRemove) {
      if (word === hazard) {
        //Don't add source i
        counter ++;
      }
    }
    if (counter === 0) {
      kept.push(word);
    }
  }
  return kept;
};

// TEST CASES
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], [2]); // => [1, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);