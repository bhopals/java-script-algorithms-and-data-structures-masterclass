/****
 *
 * Write a function called `stringifyNumbers` which takes in
 * an object and finds all of the values which are numbers and converts them to
 * strings. Recursion would be a great way to solve this!
 *
 */
function stringifyNumbers(obj) {
  let result = {};
  Object.keys(obj).forEach((element) => {
    let value = obj[element];
    if (Object.prototype.toString.call(value) === "[object Object]") {
      result[element] = stringifyNumbers(value);
    } else if (Number.isInteger(value)) {
      result[element] = value + "";
    } else {
      result[element] = value;
    }
  });
  return result;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
