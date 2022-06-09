/****
 *
 * Write a function called `same`, which accepts two arrays. The function should return true if every value in the
 * array has it's correcponding values squared in the second array. The frequency of values must be the same.
 *
 * Time Complexity - O(N)
 */
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter1[val] || 0) + 1;
  }

  console.log("frequencyCounter1:", frequencyCounter1); // {1:1, 2:2, 3:1, 5:1}
  console.log("frequencyCounter2:", frequencyCounter2); // {1:1, 4:2, 9:1, 11:1}
  for (let key in frequencyCounter1) {
    // If there is any KEY in frequencyCounter2 with KEY*2
    if (!(key * 2 in frequencyCounter2)) {
      return false;
    }
    // If there is any value in frequencyCounter matches with frequencyCounter2
    if (frequencyCounter2[key * 2] !== frequencyCounter1[key]) {
      return false;
    }
    return true;
  }
}
