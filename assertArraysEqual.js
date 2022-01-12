const assertArraysEqual = function(arr1, arr2) {
  if (arr1 === arr2)  console.log(true);
  if (arr1 == null || arr2 == null) console.log(false);
  if (arr1.length !== arr2.length) console.log(false);

  let isFalse = false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      isFalse = true;
      break;
    }
  }
  if (isFalse === false) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


assertArraysEqual([null, 2, 'boom'], [null, 2, 'boom']);
assertArraysEqual(['cool guy', 3, 1, 4, undefined], ['cool guy', 3, 1, 5, undefined])