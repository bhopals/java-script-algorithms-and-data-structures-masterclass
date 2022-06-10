/****
 *
 * Write a recursive function called <strong>isPalindrome</strong> which returns
 * true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 *
 */

function isPalindrome(str) {
  function reverse(str) {
    if (str.length === 1) return str;
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
  return reverse(str) === str;
}

console.log(isPalindrome("awesome"), false); // false
console.log(isPalindrome("foobar"), false); // false
console.log(isPalindrome("tacocat"), true); // true
console.log(isPalindrome("amanaplanacanalpanama"), true); // true
console.log(isPalindrome("amanaplanacanalpandemonium"), false); // false
