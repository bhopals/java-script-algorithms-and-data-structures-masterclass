//SAME

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let frequencyCounterString1 = {};
  let frequencyCounterString2 = {};

  for (let str of string1.split("")) {
    frequencyCounterString1[str] = (frequencyCounterString1[str] || 0) + 1;
  }

  for (let str of string2.split("")) {
    frequencyCounterString2[str] = (frequencyCounterString2[str] || 0) + 1;
  }
  console.log("frequencyCounterString1>", frequencyCounterString1);
  console.log("frequencyCounterString2>", frequencyCounterString2);
  for (let key in frequencyCounterString1) {
    if (frequencyCounterString1[key] !== frequencyCounterString2[key]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram("", ""), true); // true
console.log(validAnagram("aaz", "zza"), false); // false
console.log(validAnagram("anagram", "nagaram"), true); // true
console.log(validAnagram("rat", "car"), false); // false
console.log(validAnagram("awesome", "awesom"), false); // false
console.log(validAnagram("qwerty", "qeywrt"), true); // true
console.log(validAnagram("texttwisttime", "timetwisttext"), true); // true
