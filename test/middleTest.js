const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const { assert } = require('chai');

describe('#middle', () => {
  it("should return ['middle'] for ['no', 'middle', 'no']", () => {
    assert.deepEqual(middle(['no', 'middle', 'no']), ['middle']);
  });
  it("should return ['middle1', middle2'] for ['no', 'no', 'middle1', 'middle2', 'no', 'no']", () => {
    assert.deepEqual(middle(['no', 'no', 'middle1', 'middle2', 'no', 'no']), ['middle1', 'middle2']);
  });
});

