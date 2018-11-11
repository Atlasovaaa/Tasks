function CreateArray(first, last, step) {

  var elements = [];


  if (typeof step == 'undefined') {
    if (first < last) {
    step = 1;
    }
    else {
    step = -1;
    }
  }

  if (step > 0) {
    for (i = first; i <= last; i += step) {
      elements.push(i);
    }
  }
  if (step < 0) {
    for (i = first; i >= last; i += step) {
      elements.push(i);
    }
  }

  return elements;
}


function sum(elements) {
  elements_sum = 0;
  for(i = 0; i < elements.length; i++) {
    elements_sum += elements[i];
  }
  return elements_sum;
}

console.log(CreateArray(1, 10));
console.log(sum(CreateArray(1, 10)));

console.log(CreateArray(5, 2, -1));
console.log(sum(CreateArray(5, 2, -1)));
