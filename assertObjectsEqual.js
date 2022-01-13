const eqArrays = function(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const [key, value] of Object.entries(object1)) {
    if (Array.isArray(value)) {
      if (!eqArrays(value, object2[key])) {
        return false;
      } else {
        continue;
      }
    }
    if (value !== object2[key]) {
      console.log(value, object2[key]);
      return false;
    }
  } return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba); // => should PASS
assertObjectsEqual(ab, abc); // => should FAIL
assertObjectsEqual(cd, dc); // => should PASS
assertObjectsEqual(cd, cd2); // => should FAIL