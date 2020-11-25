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

const letterPositions = function(sentence) {
  const results = {};
  let noSpace = sentence.split(" ").join("");
  // logic to update results here
  for (let i in noSpace) {
    if(noSpace[i]) {
      results[noSpace[i]] = [i]
    } 
  }
  console.log(results)
  return results;
};

letterPositions('hello')