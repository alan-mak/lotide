// Assert Equal TEST CODE
console.log("Assert Equal");
const assertEqual = require('../assertEqual');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(5, 13);
console.log("-----------------------");
// Head TEST CASES
console.log("Head");
const head = require('../head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 6);
console.log("-----------------------");
// Tail TEST CASES
console.log("Tail");
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log("-----------------------");
// Eq Arrays TEST CODE
console.log("Eq Arrays");
const eqArrays = require('../eqArrays');
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
console.log("-----------------------");
// Assert Array Equal TEST CODE
console.log("Assert Arrays Equal");
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
console.log("-----------------------");
// Count Only TEST CASES
console.log("Count Only Equal");
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
console.log("-----------------------");
// Eq Objects TEST CASES
console.log("Eq Objects");
let eqObjects = require('../eqObjects');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const abcd = { a: "1", b: "2", c: "3" };
const abcde = { a: "1", b: "3", c: "3" };
assertEqual(eqObjects(abcde, abcd), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
console.log("-----------------------");
// Assert Objects Equal Test Case
let assertObjectsEqual = require('../assertObjectsEqual')
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false
console.log("-----------------------");
// Count Letters TEST CASES
console.log('Count Letters');
let countLetters = require('../countLetters')
let counter = countLetters('lhl');
assertEqual(counter["l"], 2);
assertEqual(counter["h"], 1);
console.log("-----------------------");
// Find Key TEST CASES
console.log('Find Key');
let findKey = require('../findKey')
test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) // => "Akaleri"
test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0) // => "undefined"
test4 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "Blue Hill"

assertEqual(test1, "noma")
assertEqual(test2, "Akaleri")
assertEqual(test3, undefined)
assertEqual(test4, "Blue Hill")
console.log("-----------------------");
// Find Key By Value TEST CASES
console.log('Find Key by Value')
let findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
console.log("-----------------------");
// Flatten TEST CASES
console.log('Flatten')
let flatten = require('../flatten')
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log("-----------------------");
// Letter Positions TEST CASES
console.log('Letter Positions')
let letterPositions = require('../letterPositions')
assertArraysEqual(letterPositions('hello').e, [1])
console.log("-----------------------");
// Map TEST CASE
console.log("Map")
let map = require('../map')
const words1 = ["ground", "control", "to", "major", "tomas"];
const results1 = map(words1, word => word[0]);
const results2 = map(words1, word => word[1]);
const results3 = map(words1, word => word[2]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o'])
assertArraysEqual(results3, ['o', 'n', undefined, 'j', 'm'])
console.log("-----------------------");
// Middle TEST CASES
console.log("Middle");
let middle = require('../middle')
assertArraysEqual(middle([1]), []); // => []
console.log(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log("-----------------------");
// Take Until TEST CONDITIONS
console.log('Take Until');
let takeUntil = require('../takeUntil');
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const resultsA = takeUntil(data1, x => x < 0);
assertArraysEqual(resultsA, [ 1, 2, 5, 7, 2 ]);
console.log('---');
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const resultsB = takeUntil(data2, x => x === ',');
assertArraysEqual(resultsB, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
console.log("-----------------------");
// Without TEST CASES
console.log("Without");
let without = require('../without')
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], [2]); // => [1, 3]
const wordsA = ["hello", "world", "lighthouse"];
without(wordsA, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(wordsA, ["hello", "world", "lighthouse"]);