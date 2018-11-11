var out;
for (var number = 1; number <= 100; number++ ) {
  if (number % 3 == 0) {
    out = ' Fizz';
  }
  else if (number % 5 == 0) {
    out = ' Buzz';
  }
  else if (number % 3 == 0 && number % 5 == 0) {
    out = ' FizzBuzz';
  }
  else { out = ''; }
     console.log(number + out);
}
