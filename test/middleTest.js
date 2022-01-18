const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle(['no', 'no', 'middle', 'no', 'no']), ['middle']); // should PASS
assertArraysEqual(middle(['no', 'no', 'middle1', 'middle2', 'no', 'no']), ['middle1', 'middle2']); // should PASS
assertArraysEqual(middle(['no', 'no']), []); // should PASS
