/**
 * Write a function called<strong> isSubsequence</strong> which takes in two
 * strings and checks whether the characters in the first string form a
 * subsequence of the characters in the second string. In other words, the
 * function should check whether the characters in the first string appear
 * somewhere in the second string, <strong>without their order changing.</strong>
 *
 */
function isSubsequence(sub, main) {
  if (sub.length === 0 || sub.length > main.length) {
    return false;
  }
  let j = 0;
  let i = 0;
  let str = "";
  while (j < main.length) {
    if (sub[i] == main[j]) {
      str += main[j];
      i++;
    }
    if (i === sub.length) return true;
    j++;
  }
  console.log(`str:${str}, sub: ${sub}`);
  return str === sub;
}

console.log(isSubsequence("hello", "hello world"), true); // true
console.log(isSubsequence("sing", "sting"), true); // true
console.log(isSubsequence("abc", "abracadabda"), true); // true
console.log(isSubsequence("abc", "acb"), false); // false (order matters)

/***
 * isSubsequence Solution - Recursive but not O(1) Space
 */

function isSubsequenceR(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequenceR("hello", "hello world"), true); // true
console.log(isSubsequenceR("sing", "sting"), true); // true
console.log(isSubsequenceR("abc", "abracadabda"), true); // true
console.log(isSubsequenceR("abc", "acb"), false); // false (order matters)
