### Binary Heaps

- Heaps are another category of TREE
- TYPES OF HEAPS

  - Heap
  - Binary Heap
  - B-heap
  - Weak heap
  - Binominal heap
  - Fibonacci heap
  - AF-heap
  - 2-3 heap
  - Soft heap
  - Pairing heap
  - Leftist heap
  - etc. (A huge List...)

- BINARY HEAP

  - A Binary Heap is a heap data structure that takes the form of a binary tree. Binary heaps are a
    common way of implementing PRIORITY QUEUES
  - A BINARY HEAP is defined as a Binary tree with TWO ADDITIONAL CONSTRAINTS.

    - SHAPE PROPERTY

      - A Binary Heap is a COMPLETE BINARY TREE; that is, all levels of the tree, except possibly the
        last one (deepest) are fully filled, and if the last levels on the tree is not complete, the nodes
        of that level are filled from left to right. (Can't have just RIGHT node. But can have just LEFT NODE)

    - HEAP PROPERTY
      - The KEY stored in each node is either greater than or equal to (>=) or less than or equal to (<=>)
        the keys in the node's children. It should be in TOTAL ORDER.

- OBJECTIVES

  - Define what a Binary Heap is
  - Compare and constrast min and max heaps
  - Implement basic methods on heaps
  - Understand where heaps are used in the real world and what other data structures can be constructed from heaps

- WHAT IS BINARY HEAP?

  - Very similar to Binary Search Tree, but with some different rules!

  - In a `MaxBinaryHeap`, PARENT nodes are always LARGER that CHILD nodes (In any ORDER).
  - In a `MinBinaryHeap`, PARENT nodes are always SMALLER than CHILD nodes (In any ORDER).

  - EXAMPLE (Max Binary Heap) - Parent Node is Greater than Child Node Values

  ```
            41
       39         33
   18     27   12

  ```

  - MAX BINARY HEAP

    - Each parent has at most two child nodes.
    - The value of each parent node is always GREATER than its child nodes.
    - In a Max Binary Heap the parent is GREATER than the children, but there are no
      guarantees between sibling nodes. (It can be in any order)
    - A Binary Heap is as compact as possible. All the children of each node are as
      full as they can be and Left Children are filled out first.
    - No implied ordering between Siblings
    - EXAMPLE

          ```
                         100
                   19            36
                17     3     25        1
             2     7
          ```

- MIN BINARY HEAP

  - Each parent has at most two child nodes.
  - The value of each parent node is always SMALLER than its child nodes.
  - In a Min Binary Heap the parent is SMALLER than the children, but there are no
    guarantees between sibling nodes. (It can be in any order)
  - A Binary Heap is as compact as possible. All the children of each node are as
    full as they can be and Left Children are filled out first.
  - No implied ordering between Sibling
  - EXAMPLE

        ```
                         1
                    2             3
               17     19     36        7
           25     100
        ```

- WHY DO WE NEED TO KNOW THIS?
  - Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
  - They are also used quite a bit with GRAPH TRAVERSAL Algorithms

#### Storing Heaps

- There is an EASY way of storing a Binary HEAP.... - A LIST/AN ARRAY

- An Max Binary Heap Example - Stored in ARRAY

        ```
                            100
                    19                  36
               17        12        25         5
             9   15    6   11    13   8     1   4
       ```

[100,19,36,17,12,25,5,9,15,6,11,13,8,1,4]

- FIND A CHILD OF ANY PARENT

  - Solution: (To find Child of any Parent)
    - For any (Parent) INDEX of an ARRAY `n`...
    - The Left CHILD is STORED at `2n+1`
    - The Right CHILD is STORED at `2n+2`
    - Example
      - If Parent Index is 5:
      - Left Child would be at `(2*5)+1` ==> 11th Index
      - Right Child would be at `(2*5)+2` ==> 12th Index

- WHAT IF WE HAVE A CHILD NODE AND WANT TO FIND ITS PARENT?
  - Solution: (To find Parent of any Child)
    - For any CHILD Node at INDEX `n`...
    - Its parent is at INDEX `Math.floor((n-1)/2)`
    - Example (From the above Example)
      - Parent of `4` (INDEX=14) and `1`(INDEX=13)
      - `Math.floor((14-1)/2)` ==> 6th Index
      - `Math.floor((13-1)/2)` ==> 6th Index

#### Binary Heap: Insert Intro - Max Binary Heap

- Adding to a Max Binary Heap

  - ADD to the END (Push at the end of the array)
  - Bubble UP (Keep Swaping with other nodes until it finds the right spot)

    - Remember the Rule - The Parent Node should be greater than the Child Nodes

  - EXAMPLE

    - This is the Existing Max Binary Heap

    ```
               41
        39           33
    18     27    12

    ```

    const maxArray = [41,39,33,18,27,12]

    - Suppose you want to ADD 55

      - 1. Add at the end of the ARRAY - `maxArray.push(55)`

           ```
                       41
                   39           33
               18     27    12     55

           ```

           [41,39,33,18,27,12,55]

      - 2. Bubble up to find the right SPOT for 55 (so Parent Node is Greater than the Child)

        - Take the Node value and compare it with Parent (55 > 33), If Node is greater than Parent, SWAP

        ```
                      41
                  39           55
              18     27    12     33

        ```

        [41,39,55,18,27,12,33]

        - Take the Node value and compare it with Parent (55 > 41), If Node is greater than Parent, SWAP

        ```
                      55
                  39           44
              18     27    12     33

        ```

        [55,39,41,18,27,12,33]

- Just Remeber TWO Formulas

  - Find Parent = `Math.floor((n+1)/2)`
  - Find Child = `2N+1` - (Left Child), `2n+2` - Right Child

- BINARY HEAP INSERT Psuedocode
  - Push the value into the values property on the HEAP
  - Bubble the value up to its correct spot!
    - Create a variable called INDEX which is the Length of the values property-1
    - Create a variable called parentIndex which is the floor on (index-1)/2
    - Keep Looping as long as the values element at the parentIndex is less that the values
      element at the child index
      - Swap the value of the values element at the parent indexz with the value of the element
        property at the child index
      - Set the index to be the parentIndex, and start over!

```
   insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const pIndex = Math.floor((idx - 1) / 2);
      const pValue = this.values[pIndex];
      if (element <= pValue) break;
      this.values[pIndex] = element;
      this.values[idx] = pValue;
      idx = pIndex;
    }
  }
```
