### Doubly Linked Lists

- OBJECTIVES

  - Construct a Doubly Linked List
  - Compare and contrast Doubly and Singly Linked Lists
  - Implement basic operations on a Doubly Linked List

- WHAT IS DOUBLY LINKED LIST

  - Almost identical to Singly Linked Lists, except every node has ANOTHER Pointer, to the PREVIOUS node!
  - `next` and `prev` pointer

- EXAMPLE

  - null <- 12 <-> 9 <-> 5 <-> 14 -> null

- DIFFERENCE (Doubly v/s Singly)

  - In Doubly Linked, taking care of PREV and NEXT on every node, more work
  - More Memory ==== More Flexibility (Its Almost always a tradeoff!)

- SETTING UP OUR CLASS

  - Node

    ```
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
            this.prev = null;
        }
    }
    ```

  - DoubleLinkedList

  ```
  class DoublyLinkedList {
       constructor() {
           this.head = null;
           this.tail = null;
           this.length = 0;
       }
   }
  ```
