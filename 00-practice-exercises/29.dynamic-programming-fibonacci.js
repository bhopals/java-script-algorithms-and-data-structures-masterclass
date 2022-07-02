/*** Dynamic Programming With MEMOZIATION - An Optimal and Effecient Solution */
function fib(n, memo = []) {
  if (meme[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

/*** Non-Efficient Solution */
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
