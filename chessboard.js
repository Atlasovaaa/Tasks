var group = '';
var dim = 8;
for (var i = 1; i <= dim; i++) {
  for (var j = 1; j <= dim; j++) {
    if ((i + j) % 2 == 0) {
      group += '#';
    }
    else {
      group += ' ';
    }

  }
  group = group + '\n';
}
console.log(group);
