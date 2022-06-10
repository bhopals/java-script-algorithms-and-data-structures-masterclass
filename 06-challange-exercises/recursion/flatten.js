/****
 *
 * Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and returns
 * a new array with all values flattened.
 *
 */

function flatten(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arr = arr.concat(flatten(array[i]));
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}

console.log(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]]), [1, 2, 3]); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]); // [1,2,3]
