const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, str) {
  for (const [key, value] of Object.entries(object)) {
    if (value === str) {
      return `${key}`
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy")
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, undefined), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Good Wife"), "drama")