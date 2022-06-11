/****
 * Write a recursive function called <strong>someRecursive</strong> which accepts
 * an array and a callback. The function returns true if a single value in the
 * array returns true when passed to the callback. Otherwise it returns false.
 *
 */
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd), true); // true
console.log(someRecursive([4, 6, 8, 9], isOdd), true); // true
console.log(someRecursive([4, 6, 8], isOdd), false); // false
console.log(
  someRecursive([4, 6, 8], (val) => val > 10),
  false
); // false

function someRecursiveL(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
}

console.log(someRecursiveL([1, 2, 3, 4], isOdd), true); // true
console.log(someRecursiveL([4, 6, 8, 9], isOdd), true); // true
console.log(someRecursiveL([4, 6, 8], isOdd), false); // false
console.log(
  someRecursiveL([4, 6, 8], (val) => val > 10),
  false
); // false
