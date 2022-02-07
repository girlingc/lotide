const flatten = function(arr) {
  const newArr = []
  for (let i of arr) {
    for (let j of i) {
      newArr.push(j);
    }
  }
  return newArr
}

console.log(flatten(
  [
    ["a", 'b', 'c', 'd'],
    ['e', 'f', 'g'],
    ['h', 'i', 'j', 'k', 'l', 'm']
  ]
))