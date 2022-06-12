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

- References
  - https://www.toptal.com/developers/sorting-algorithms
