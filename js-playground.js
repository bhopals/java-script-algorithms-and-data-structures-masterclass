/***** To Test JS CODE */
function collectOddsValues(arr) {
  let result = [];
  if (arr.length == 0) return result;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddsValues(arr.slice(1)));
  return result;
}

collectOddsValues([1, 2, 3, 4, 5, 6, 7]);
