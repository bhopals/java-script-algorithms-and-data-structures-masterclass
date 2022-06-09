/**
 *
 * Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where
 * the SUM is ZERO (0). Return an array that includes both values that SUM to ZERO or UNDFINED if a pair does not exist.
 *
 *  Time complexity O(N^2), Space Complexity O(1)
 *
 */
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4]));
console.log(sumZero([-4, -3, -2, -1, 0]));