arrayToList = (our_arr) => {
  let list = null;
  for (let i = our_arr.length - 1; i >= 0; i--) {
    list = {
              value: our_arr[i],
              rest: list
          };
  }
  return list;
}

listToArray = (our_list) => {
  let arr = [];
  for (let node = our_list; node !== null; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

var prepend = (a, b) => list = { value: a, rest: b }

nth = (list, n) => {
    if (!list) { return undefined; }
    else{
      return (n == 0) ? list.value : nth(list.rest, n - 1);
    }
  }

var array = [1, 2, 3, 4];
console.log(listToArray(arrayToList(array)));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 2));
