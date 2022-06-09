/***
 * Implement a function called, `areThereDuplicates` which accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments passed in. You can solve this using the frequency
 * counter pattern OR the multiple pointers pattern.
 *
 * Frequency pattern:
 *
 */
function areThereDuplicatesFP(...elements) {
  const frequencyCounter = {};
  for (let i = 0; i < elements.length; i++) {
    const val = elements[i];
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicatesFP(1, 2, 3), false); //false
console.log(areThereDuplicatesFP(1, 2, 2), true); //true
console.log(areThereDuplicatesFP("a", "b", "c", "a"), true); //true
console.log(areThereDuplicatesFP("a", "b", "c", "d"), false); //false

/***
 * Implement a function called, `areThereDuplicates` which accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments passed in. You can solve this using the frequency
 * counter pattern OR the multiple pointers pattern.
 *
 * Multiple Pointer pattern:
 *
 */

function areThereDuplicatesMPP(...args) {
  //String sorting will not work
  const sortedArray = args.sort((a, b) => a > b);
  console.log("sortedArray", sortedArray);
  let left = 0;
  let next = 1;

  while (left < sortedArray.length) {
    if (sortedArray[left] === sortedArray[next]) {
      return true;
    }
    left++;
    next++;
  }
  return false;
}

console.log(areThereDuplicatesMPP(1, 2, 3), false); //false
console.log(areThereDuplicatesMPP(1, 2, 2), true); //true
console.log(areThereDuplicatesMPP("a", "b", "c", "a"), true); //true
console.log(areThereDuplicatesMPP("a", "b", "c", "d"), false); //false

/***
 * Implement a function called, `areThereDuplicates` which accepts a variable number of arguments, and checks
 * whether there are any duplicates among the arguments passed in. You can solve this using the frequency
 * counter pattern OR the multiple pointers pattern.
 *
 * One Liner - Using SET
 *
 */

function areThereDuplicatesSet(...args) {
  return new Set(args).size !== args.length;
}
console.log(areThereDuplicatesSet(1, 2, 3), false); //false
console.log(areThereDuplicatesSet(1, 2, 2), true); //true
console.log(areThereDuplicatesSet("a", "b", "c", "a"), true); //true
console.log(areThereDuplicatesSet("a", "b", "c", "d"), false); //false
