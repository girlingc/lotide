const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(['boom', 3, true], ['boom', 3, false]), true); // => should FAIL
assertEqual(eqArrays(['kaboom', 3, true], ['boom', 3, true]), true); // => should FAIL