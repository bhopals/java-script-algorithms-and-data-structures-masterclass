/****
 *
 * Write a function called `same`, which accepts two arrays. The function should return true if every value in the
 * array has it's correcponding values squared in the second array. The frequency of values must be the same.
 *
 * Time Complexity - O(N^2)
 */
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i] * 2);
    if (index == -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}
