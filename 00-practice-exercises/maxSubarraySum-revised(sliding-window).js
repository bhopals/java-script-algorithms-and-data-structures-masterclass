/***
 *
 *  Write a function called maxSubarraySum which accepts an array of integers and a number called `n`.
 *  The function should calculate the maximum sum on `n` consecutive elements in the array.
 *
 *  Time Complexity O(N), Space Complexity O(1)
 */
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2), 10); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4), 17); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1), 6); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4), 13); // 13
console.log(maxSubarraySum([], 4), null); // null
