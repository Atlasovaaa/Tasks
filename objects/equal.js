deepEqual = (first_value, second_value) => {
      if (first_value === second_value) return true;

      if (first_value == null || typeof first_value != "object" ||
          second_value == null || typeof second_value != "object") return false;

      let first_value_key = Object.keys(first_value), second_value_key = Object.keys(second_value);

      if (first_value_key.length != second_value_key.length) return false;

      for (let key of first_value_key) {
        if (!second_value_key.includes(key) || !deepEqual(first_value[key], second_value[key])) return false;
      }

      return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
