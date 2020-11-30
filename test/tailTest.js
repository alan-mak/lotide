// Tail TEST CASES
console.log("Tail");
const assert = require('chai').assert;
const tail = require('../tail');

describe("#Tail", () => {
  it('returns "Labs" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))
    assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 'Labs');
  });
  

  it('returns 3 for length of ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.strictEqual(words.length, 3)
  });

});