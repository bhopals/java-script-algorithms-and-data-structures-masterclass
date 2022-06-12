### Bubble Sort

#### Elementary Sorting Algorithm

- WHAT IS SORTING?

  - Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
  - EXAMPLES
    - Sorting numbers from smallest to largest
    - Sorting names alphabetically
    - Sorting movies based on revenue/rating/release year

- WHY DO WE NEED TO LEARN SORTING?

  - Sorting is an incredibly common task, so it's good to know how it works.
  - There are many different ways to sort things, and different techniques have their own Advantages and Disadvantages.

- Sorting Algorithm Animations

  - https://www.toptal.com/developers/sorting-algorithms

#### Built-in Javascript Sorting

- Telling JavaScript How to Sort

  - The built-in sort method accepts an optional COMPARATOR function.
  - You can use this COMPARATOR function to tell JavaScript how you want it to sort.
  - The comparator looks at pairs of elements (`a` and `b`), determines their SORT order bases on the return value
    - If it returns a NEGATIVE number, `a` should come before `b`
    - If it returns a POSITIVE number, `a` should come after `b`,
    - If it returns 0, `a` and `b` are the same as far as the sort is concerned

- EXAMPLE

  ```
    const sort = (arr, callback) => (callback && arr.sort(callback)) || arr.sort();

    console.log(sort(["Steele", "Colt", "Data Structures", "Algorithms"])); // [ 'Algorithms', 'Colt', 'Data Structures', 'Steele' ]
    console.log(sort(["S", "Co", "Dat", "Algo"], (a, b) => a.length - b.length)); // [ 'S', 'Co', 'Dat', 'Algo' ]
    console.log(sort(["Steele", "Col", "Da", "A"], (a, b) => b.length - a.length)); // [ 'Steele', 'Col', 'Da', 'A' ]
    console.log(sort([6, 4, 15, 10], (a, b) => a - b)); // [4, 6, 10, 15]
    console.log(sort([6, 4, 15, 10], (a, b) => b - a)); // [15, 10, 6, 4]
  ```

#### Bubble Sort: Overview

- BubbleSort

  - A sorting algorithm where the largest values bubble up to the top!
  - Here is the link to Visualize - https://visualgo.net/en/sorting

- Before we SORT, we Must SWAP!

  - Many sorting algorithms involves some type of swapping functionality (e.g. Swapping to numbers to put them in ORDER)
  - 1. ES5
    ```
     function swap(arr, idx1, idx2) {
         var temp = arr[idx1];
         arr[idx1] = arr[idx2];
         arr[idx2] = temp;
     }
    ```
  - 2. ES2015

    ```
     function swap(arr, idx1, idx2) => { [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; }
    ```

- BubbleSort Pseudocode

  - Start Looping from with a variable called `i` the end of the array towards the beginning.
  - Start an INNER Loop with a variable called `j` from the beginning until `i-1`.
  - If `arr[j]` is greater than `arr[j+1]`, swap those two values!
  - Return the Sorted Array

  - Example - Outer Loop Start from Beginning - Not Performant

    ```
    function bubbleSortBegin(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            }
        }
        return arr;
    }
    console.log(bubbleSortBegin([6, 4, 15, 10]));

    ```

    - Outer Loop starts from the END - More Performant (Less Iterations)

    ```
    function bubbleSortFromEnd(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            console.log("bubbleSortFromEnd - i", i);
            for (var j = 0; j > i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            }
        }
        return arr;
    }

    console.log(bubbleSortFromEnd([6, 4, 15, 10]));
    ```

#### Bubble Sort: Optimization (Using `noSwap` short circuit)

- Nearly sorted input array require special handling in Bubble Sort.
  Otherwise, despite the elements are already sorted, the loop will still go on from start to end (without swapping)

- To handle that, we can Short-Circuit our code. All we need to do is check last time through, Did we make any SWAP?
  If the answer is NO. If we didn't swap anything, that means we are DONE!

```
function bubbleSortFromEndAfterOptimize(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i > 0; i--) {
    console.log("bubbleSortFromEnd - i", i);
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log("inner - j:", i);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSortFromEndAfterOptimize([8, 1, 2, 3, 4, 5, 6, 7]));
```

### Bubble Sort: BIG O Complexity

- Generally its N*N (as we have Multiple loops (OUTER and INNER)) - `O(N*N)`
- However, for nearly Sorted array, and `noSwap` flag, its - `O(N)`

- References (Visulizations)
  - https://visualgo.net/en/sorting
  - https://www.toptal.com/developers/sorting-algorithms
