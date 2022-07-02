/*** Dynamic Programming With TABULATION (Bottom Up Approach) - An Optimal and Effecient Solution */
function fibTable(n) {
  if (n <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbs[i] = fibNumbs[i - 1] + fibNums[i - 2];
  }
  return fibNumbs[n];
}

/*** Dynamic Programming With MEMOZIATION (Top Down Approach) - An Optimal and Effecient Solution */
function fibMemo(n, memo = []) {
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
