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

#### Push

- Adding a node to the end of the Doubly Linked list

- PUSH Pseudocode

  - Create a new node with the value passed to the function
  - If the HEAD property is null, set the HEAD and TAIL to be the newly created node
  - If not, set the `next` property on the tail to be that node
  - Set the `previous` property on the newly created node to be the tail
  - Set the tail to be the newly created node
  - Increment the length + 1
  - Return the Doubly Linked List

- CODE Sample
  ```
  push(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
      return this;
     }
  }
  ```

#### Pop

#### Shift
