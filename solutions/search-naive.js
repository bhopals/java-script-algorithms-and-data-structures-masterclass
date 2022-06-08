/***
 * Given a SORTED array of integers, write a function called search, that accepts a value and returns the index where the
 * value is passed to the function is located. If the value is not found, return -1.
 *
 * Complexity O(N) - Linear Search - Brute Force
 *
 */

function search(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4), 3); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6), 5); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11), -1); // -1
