/***
 * Write a recursive function called `reverse`  which accepts a string and returns a new string in reverse.
 */

function reverse1(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse1(str.slice(0, -1));
}

console.log(reverse1("awesome")); // 'emosewa'
console.log(reverse1("rithmschool")); // 'loohcsmhtir'

function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse2(str.slice(1)) + str[0];
}

console.log(reverse2("awesome")); // 'emosewa'
console.log(reverse2("rithmschool")); // 'loohcsmhtir'
