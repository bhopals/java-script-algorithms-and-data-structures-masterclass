/****
 *
 * Write a recursive function called <strong>isPalindrome</strong> which returns
 * true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 *
 */

function isPalindromeMy(str) {
  function reverse(str) {
    if (str.length === 1) return str;
    return str[str.lenght - 1] + reverse(str.slice(0, -1));
  }
  return reverse(str) === str;
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("awesome"), false); // false
console.log(isPalindrome("foobar"), false); // false
console.log(isPalindrome("tacocat"), true); // true
console.log(isPalindrome("amanaplanacanalpanama"), true); // true
console.log(isPalindrome("amanaplanacanalpandemonium"), false); // false
