/**
 *
 * Write a function called `sumZero` which accepts a sorted array of integers. The function should find the first pair where
 * the SUM is ZERO (0). Return an array that includes both values that SUM to ZERO or UNDFINED if a pair does not exist.
 *
 *  Time complexity O(N), Space Complexity O(1)
 *
 */
function countUniqueValuesWhileLoop(arr) {
  let j = 1;
  let i = 0;
  while (j <= arr.length) {
    if (arr[i] == arr[j]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      i++;
      j++;
    }
  }
  return i;
}

console.log(countUniqueValuesWhileLoop([1, 1, 1, 1, 1, 1, 2]), 2);
console.log(countUniqueValuesWhileLoop([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]), 7);
console.log(countUniqueValuesWhileLoop([]), 0);
console.log(countUniqueValuesWhileLoop([-2, -1, -1, 0, 1]), 4);

function countUniqueValuesForLoop(arr) {
  if (arr.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}

console.log(countUniqueValuesForLoop([1, 1, 1, 1, 1, 1, 2]), 2);
console.log(countUniqueValuesForLoop([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]), 7);
console.log(countUniqueValuesForLoop([]), 0);
console.log(countUniqueValuesForLoop([-2, -1, -1, 0, 1]), 4);

/*** Using Set - Shortcut one - But not recommended as you are using in-built function method */
function countUniqueValuesSet(arr) {
  return Array.from(new Set(Array.from(arr))).length;
}

console.log(countUniqueValuesSet([1, 1, 1, 1, 1, 1, 2]), 2);
console.log(countUniqueValuesSet([1, 2, 3, 4, 4, 7, 7, 12, 12, 13]), 7);
console.log(countUniqueValuesSet([]), 0);
console.log(countUniqueValuesSet([-2, -1, -1, 0, 1]), 4);
