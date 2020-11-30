const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
  // Line used to show how to display an object using a different package.
  // console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;