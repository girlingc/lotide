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



const letterPositions = function(sentence) {
  const index = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      index[sentence[i]] ? index[sentence[i]].push(i) : index[sentence[i]] = [i];
    }
  }
  return index;
};


console.log(letterPositions("hello"))

assertArraysEqual(letterPositions("hello").e, [1])
assertArraysEqual(letterPositions("hello").l, [2, 3])