/***
 *
 * Write a function called `collectStrings` which accepts an object and returns an array of all the values
 * in the object that have a typeof string
 */

function collectStrings(obj) {
  let result = [];
  Object.keys(obj).forEach((element) => {
    const value = obj[element];
    if (Object.prototype.toString.call(value) === "[object String]") {
      result.push(value);
    } else {
      return (result = result.concat(collectStrings(value)));
    }
  });
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
