/****
 * Return substring matched count
 */
function search(str, text) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < text.length; j++) {
      if (text[j] !== str[i + j]) break;
      if (j === text.length - 1) count++;
    }
  }
  return count;
}

console.log(search("owomgowomg", "omg"), 2);
console.log(search("testontestone", "one"), 1);
console.log(search("testontestone", "two"), 0);
console.log(search("adfefrdfrefrdssefreddefr", "efr"), 4);
