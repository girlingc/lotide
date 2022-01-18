const middle = function(arr) {
  const midValue = [];
  if (arr.length <= 2) {
  } else if (arr.length % 2 === 0) {
    midValue.push(arr[Math.round((arr.length - 2) / 2)]);
    midValue.push(arr[Math.round((arr.length - 1) / 2)]);

  } else {
    midValue.push(arr[Math.round((arr.length - 1) / 2)]);
  }
  return midValue;
};

module.exports = middle;

