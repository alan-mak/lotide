# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alanmak95/lotide`

**Require it:**

`const _ = require('@alanmak95/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element in an array
* `tail(...)`: returns the last element in an array
* `middle(...)`: returns the middle element in an array
* `assertArraysEqual(...)`: compares two arrays to see if they are equal or not
* `assertEqual(...)`: compares two items to see if they are equal or not
* `assertObjectsEqual(...)`: compares two objects to see if they are equal or not
* `countLetters(...)`: counts the different letters in a string
* `countOnly(...)`: takes a collection of items and return count for a specific subset of those items
* `eqArrays(...)`: takes in two arrays and returns true or false based on a perfect match
* `eqObjects(...)`: return true or false based on a perfect match
* `findKey(...)`: scan an object and returns the first key for which the callback returns a truthy value
* `findKeyByValue(...)`: search a key on an object where its value matches a given value
* `flatten(...)`: lowers the elements of an array by one level
* `letterPositions(...)`: return all the indices in the string where each character is found 
* `map(...)`: return a new array based on the results of a callback function
* `takeUntil(...)`: return a "slice of the array with elements taken from the beginning" until callback provides a truthy value
* `without(...)`: return an array removing unwated elements


