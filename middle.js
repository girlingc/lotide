const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const middle = function(arr) {
  const midValue = []
  if (arr.length <= 2) {
  } else if (arr.length % 2 === 0) {
    midValue.push(arr[Math.round((arr.length - 2) / 2)])
    midValue.push(arr[Math.round((arr.length - 1) / 2)])

  } else {
    midValue.push(arr[Math.round((arr.length - 1) / 2)])
  }
  return midValue
}

console.log(middle(['no', 'no', 'middle', 'no', 'no']))
console.log(middle(['no', 'no', 'middle 1', 'middle 2', 'no', 'no']))
console.log(middle(['no']))

assertArraysEqual(middle(['no', 'no', 'middle', 'no', 'no']), ['middle']) // should PASS
assertArraysEqual(middle(['no', 'no', 'middle1', 'middle2', 'no', 'no']), ['middle1', 'middle2']) // should PASS
assertArraysEqual(middle(['no', 'no']), []) // should PASS
