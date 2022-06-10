/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent. This function should mimic the functionality of `Math.pow()`
 *
 */
function powerWithRecursion(num, count) {
  let result = 1;
  if (count < 1) return 1;
  result *= num * powerWithRecursion(num, count - 1);
  return result;
}
console.log(powerWithRecursion(2, 0), 1); // 1
console.log(powerWithRecursion(2, 2), 4); // 4
console.log(powerWithRecursion(2, 4), 16); // 16

function powerWithIteration(num, count) {
  let result = 1;
  for (let i = count; i > 0; i--) {
    result *= num;
  }
  return result;
}

console.log(powerWithIteration(2, 0), 1); // 1
console.log(powerWithIteration(2, 2), 4); // 4
console.log(powerWithIteration(2, 4), 16); // 16
