const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

let countLetters = function(input) {
  let noSpace = input.split(" ").join("");
  let count = {};

  return count;
};

// TEST CASES
let counter = countLetters('lhl');
assertEqual(counter["l"], 2);
assertEqual(counter["h"], 1)