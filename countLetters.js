const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  const results = {}
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
  }
}
  return results
}

const string = "hello"
const result1 = countLetters(string)
assertEqual(result1["e"], 1 )
console.log(result1)