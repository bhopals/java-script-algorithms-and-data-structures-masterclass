/***
 *
 *  Write a function called maxSubarraySum which accepts an array of integers and a number called `n`.
 *  The function should calculate the maximum sum on `n` consecutive elements in the array.
 *
 *
 */
function maxSubarraySum(arr, count) {
  if (arr.length < count) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - count + 1; i++) {
    let temp = 0;
    for (let j = 0; j < count; j++) {
      temp += arr[j + i];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1), 6); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4), 13); // 13
console.log(maxSubarraySum([], 4), null); // null
