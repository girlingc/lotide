const without = function(arr1, itemsToRemove) {
  arr1 = arr1.filter(i => !itemsToRemove.includes(i));
  console.log(`The new array is ${arr1}`);
};

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


const words = ["falco", "falcon", "fox", "ness", "pichu", "marth"];
without(words, ["fox", "falco", "marth", "falcon"]);
assertArraysEqual(words, ["falco", "falcon", "fox", "ness", "pichu", "marth"]);

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

without([null, undefined, 1, 1.47, 'some', true, ''], [null, undefined, false, ''])