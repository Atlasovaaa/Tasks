function reverseArray(some_arr) {
  new_arr = [];
  for (i = some_arr.length - 1; i >= 0; i--) {
    new_arr.push(some_arr[i]);
  }
  return new_arr;
}

function reverseArrayInPlace(some_arr) {
  for (let i = 0; i < Math.floor(some_arr.length / 2); i++) {
    let between = some_arr[i];
    some_arr[i] = some_arr[some_arr.length - 1 - i];
    some_arr[some_arr.length - 1 - i] = between;
  }
  return some_arr;
}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
