const assertEqual = require('./assertEqual');

let eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key])
      ;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;