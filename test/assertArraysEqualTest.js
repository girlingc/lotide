const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([null, 2, 'boom'], [null, 2, 'boom']); // Should PASS
assertArraysEqual(['cool guy', 3, 1, 5, undefined], ['cool guy', 3, 1, 3, undefined]); // Should FAIL