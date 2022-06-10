/***** To Test JS CODE */
function collectOdds(arr) {
  const result = [];

  function helper(elements) {
    if (elements.length == 0) return;
    if (elements[0] % 2 !== 0) {
      result.push(elements[0]);
    }
    helper(elements.slice(1));
  }
  helper(arr);
  console.log(result);
  return result;
}

collectOdds([1, 2, 3, 4, 5, 6, 7]);
