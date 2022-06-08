/**
 *
 * Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where
 * the SUM is ZERO (0). Return an array that includes both values that SUM to ZERO or UNDFINED if a pair does not exist.
 *
 * Time complexity O(N), Space Complexity O(1)
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 4]));
console.log(sumZero([-4, -3, -2, -1, 0]));
