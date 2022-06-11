/***
 *
 *  Write a recursive function called `capitalizeFirst`</strong>`. Given an
 *  array of strings, capitalize the first letter of each string in the array.
 */
function capitalizeFirstR(arr) {
  let result = [];
  if (arr.length === 0) return result;
  result.push(arr[0][0].toUpperCase().concat(arr[0].slice(1)));
  return result.concat(capitalizeFirstR(arr.slice(1)));
}

function capitalizeFirstL(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase().concat(arr[i].slice(1)));
  }
  return result;
}

console.log(capitalizeFirstL(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirstR(["car", "taco", "banana"])); // ['Car','Taco','Banana']
