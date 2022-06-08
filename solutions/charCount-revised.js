/***
 *
 * Write a function which takes in a string and returns counts of each character in the string. (Non- REGEX)
 *
 * More Peformant Solution than REGEX Solution
 *
 */
function charCount(str) {
  var obj = {};
  str = str.toLowerCase();
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // numeric (A-Z)
    !(code > 96 && code < 123) // numeric (a-z)
  ) {
    return false;
  }
  return true;
}
