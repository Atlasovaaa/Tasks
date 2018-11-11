function countChar(some_string, some_symbol) {
  count = 0;
  for (i = 0; i < some_string.length - 1; i++) {
    if (some_string[i] == some_symbol) {
      count += 1;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, 'B');
}

string = 'aBBBcd';
console.log(string);
console.log(countBs(string));
console.log(countChar(string, 'c'));
