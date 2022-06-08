/***
 *
 * Write a function which takes in a string and returns counts of each character in the string. (Using REGEX)
 *
 */
function charCount(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  }
}
