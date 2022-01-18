# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose
**_BEWARE:_  This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published as part of my learnings at Lighthouse Labs.

## Usage
**Install it:**
`npn=m install @girlingc/lotide`

**Require it:**
`const _ = require('@girlingc/lotide');`

**Call it:**
`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following funcitons are currently implemented:

### Functions:
* `head(arr)`: Returns the first value of an array.
* `tail(arr)`: Returns the last value of an array.
* `middle(arr)`: Returns the middle of an array (without the first and last value).
* `assertArraysEqual(actual, expected)`: Asserts that two arrays are equal to eachother.
* `assertEqual(actual, expected)`: Asserts that two values are equal to eachother.
* `assertObjectsEqual(actual, expected)`: Asserts that two objects are equal to eachother.
* `countLetters(str)`: Counts letters in a string.
* `countOnly(allItems, itemsToCount)`: Counts a specified number of values in a string.
* `eqArrays(arr1, arr2)`: Checks if two arrays are equal to eachother.
* `eqObjects(object1, object2)`: Checks if two objects are equal to eachother.
* `findKey(object, callback)`: Returns the key of a group of objects.
* `findKeyByValue(object, str)`: Returns the key from a specified value.
* `letterPositions(str)`: Returns the index of value from a string
* `map(array, callback)`: Returns a new array with specified values.
* `takeUntil(array, callback)`: Returns a new array until a specified value has been read.
* `without(arr1, itemsToRemove)`: Returns a new array while removing specified values.
