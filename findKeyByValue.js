const assertEqual = require('./assertEqual');

let findKeyByValue = function(obj, show) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  for (let value in values) {
    if (values[value] === show) {
      return keys[value];
    }
  }
};
module.exports = findKeyByValue;