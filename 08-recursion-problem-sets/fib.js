/****
 *
 *  Write a recursive function called <strong>fib</strong> which accepts a number and returns the `nth` number in the Fibonacci sequence.
 *  Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every
 *   number thereafter is equal to the sum of the previous two numbers.
 *
 */
function fibR(num) {
  if (num <= 2) return 1;
  return fibR(num - 2) + fibR(num - 1);
}
console.log(fibR(4), 3); // 3 - 1,2
console.log(fibR(10), 55); // 55
console.log(fibR(28), 317811); // 317811
console.log(fibR(35), 9227465); // 9227465

1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

function fibL(num) {
  let result = [1, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result.pop();
}
console.log(fibL(4), 3); // 3 - 1,2
console.log(fibL(10), 55); // 55
console.log(fibL(28), 317811); // 317811
console.log(fibL(35), 9227465); // 9227465
