/****
 *
 * Sort Method (a and b element ==> a-b)
 *   - If it returns a NEGATIVE number, `a` should come before `b`
 *   - If it returns a POSITIVE number, `a` should come after `b`,
 *   - If it returns 0, `a` and `b` are the same as far as the sort is concerned
 *
 */
const sort = (arr, callback) => (callback && arr.sort(callback)) || arr.sort();

console.log(sort(["Steele", "Colt", "Data Structures", "Algorithms"])); // [ 'Algorithms', 'Colt', 'Data Structures', 'Steele' ]
console.log(sort(["S", "Co", "Dat", "Algo"], (a, b) => a.length - b.length)); // [ 'S', 'Co', 'Dat', 'Algo' ]
console.log(sort(["Steele", "Col", "Da", "A"], (a, b) => b.length - a.length)); // [ 'Steele', 'Col', 'Da', 'A' ]
console.log(sort([6, 4, 15, 10], (a, b) => a - b)); // [4, 6, 10, 15]
console.log(sort([6, 4, 15, 10], (a, b) => b - a)); // [15, 10, 6, 4]
