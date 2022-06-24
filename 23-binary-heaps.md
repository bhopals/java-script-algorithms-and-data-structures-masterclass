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

#### Heap: ExtractMax Intro

- Removing from a HEAP

  - Remove in Heap Binary Tree means removing the top most item (First element of the Array -
    Which is Max as well)

  - Remove the Root
  - Replace with the most recently added (length - 1)
  - Adjust (`Sink Down`)
    - `Sink Down`
      - The procedure for deleting the ROOT from the heap (effectively extracting the maximum element in
        a max-heap or the minimum element in a min-heap) and restoring the properties is called DOWN-HEAP.
        Also known as `Bubble-down`, `Percolate-down`, `sift-down`, `trickle down`, `heapify-down`,
        `cascade down`, and `extract-min/max`.

- Kind of Remove and SWAP

- Example: [`41`, 39, 33, 18, 27, 12]

  ```
           41
      39          33
  18     27    12

  ```

  - Extract Max (Remove the Root element)

    ```
              _
        39          33
    18     27    12

    ```

    - Swap it with the last element of the NODE (Since that is the min. value we will have in TREE)

    ```
              12
        39          33
    18     27

    ```

    - Start SINK DOWN

      - Compare it (12) with its both of the children (39, 33), take whatever is larger

      ```
                    `12`
              `39`           33
           18     27

      ```

      - Swap with that value (Swap 39 with 12)

      ```
               `39`
          `12`          33
       18     27
      ```

    - Now Compare again till Either 12 is at the end of the node, or both of the CHILDREN are less than 12

    ```
              39
         `12`          33
      18     `27`
    ```

    (12 < 27 ==> SWAP)

    ```
             39
        `27`          33
     18     `12`
    ```

    - Now 12 Does not have any childer (Or in case any, both should be less than that)
    - and We are DONE!!!!

#### Heap: ExtractMax - Pseudocode

- Also called extractMax
- Swap the first value in the values property with the last one
- Pop from the values property, so you can return the value at the end. (`array.pop`)
- Have the new root "sink down" to the correct spot?

  - Your parent index starts at o (the root)
  - Find the Index of the LEFT child (`2*index + 1`) - Make sure it is not out of index out of bounds.
  - Find the Index of the RIGHT child (`2*index + 2`) - Make sure it is not out of index out of bounds.
  - If the LEFT or RIGHT child is greater than the element...SWAP.
  - If both LEFT and RIGHT children are larger, swap with the LARGEST child.
  - The Child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old root!

- Binary Heap extractMax Code:

```
extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    let element = this.values[0];
    let length = this.values.length;
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
```

#### Priority Queue Intro

- Building a Priority Queue

- WHAT IS A PRIORITY QUEUE

  - A data structure where each element has a priority.
  - Elements with higher priorities are served before elements with lower priorities.

- PRIORITY QUEUE is an ABSTRACT Concept and can be implemented using any means (Array, LinkedList, etc...)

  - 1.  A NAIVE VERSION

    - Use a list (ARRAY) to store all elements
      - `[ priority:3 priority:1 priority:2 priority:5 priority:4]` - Lowest Number is the HIGHEST Priority
    - Iterate over the entire thing to find the highest priority element.

  - BINARY HEAP TREE (Using Array)
    - Highest Priority always at the TOP/ROOT
    - Add ==> Insert && Bubble Up
    - Remove ==> Remove && Sink Down
