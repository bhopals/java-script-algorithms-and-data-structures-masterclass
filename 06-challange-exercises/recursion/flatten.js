/****
 *
 * Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and returns
 * a new array with all values flattened.
 *
 */

function flatten(arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten([1, 2, 3, [4, 5]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]), [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]]), [1, 2, 3]); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), [1, 2, 3]); // [1,2,3]
