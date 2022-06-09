/**
 * Write a function called ``sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities: Time: O(N)
 *
 *
 */

function sameFrequency(val1, val2) {
  const frequencyVal1 = {};
  const frequencyVal2 = {};
  const val1Array = val1.toString().split("");
  const val2Array = val2.toString().split("");
  if (val1Array.length !== val2Array.length) {
    return false;
  }

  for (let i = 0; i < val1Array.length; i++) {
    const value = val1Array[i];
    frequencyVal1[value] = (frequencyVal1[value] || 0) + 1;
  }

  for (let i = 0; i < val2Array.length; i++) {
    const value = val2Array[i];
    frequencyVal2[value] = (frequencyVal2[value] || 0) + 1;
  }

  for (let key in frequencyVal1) {
    if (frequencyVal1[key] !== frequencyVal2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 128), true);
console.log(sameFrequency(34, 14), false);
console.log(sameFrequency(3589578, 5879385), true);
console.log(sameFrequency(22, 22), true);
