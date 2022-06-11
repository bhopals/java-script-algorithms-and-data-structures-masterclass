/****
 *
 * Write a function called `binarySearch` which accepts a sorted array
 * and a value and returns the index at which the value exists. Otherwise, return -1
 *
 */
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let midVal = arr[middle];
    if (midVal === value) {
      return middle;
    } else if (midVal < value) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2), 1);
console.log(binarySearch([1, 2, 3, 4, 5], 3), 2);
console.log(binarySearch([1, 2, 3, 4, 5], 5), 4);
console.log(binarySearch([1, 2, 3, 4, 5], 6), -1);
