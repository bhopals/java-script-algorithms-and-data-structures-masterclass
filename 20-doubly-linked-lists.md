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

- Removing a node from the END of the Doubly Linked List

- POP Pseudocode

  - If there is no HEAD, return undefined
  - Store the current tail in a variable to return later
  - If the length is 1, set the HEAD and TAIL to be null
  - Update the tail to be the previous Node
  - Set the newTail's next to null;

- POP Code
  ```
    pop() {
        if (this.length === 0) return undefined;
        let tailItem = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = tailItem.prev;
            tailItem.prev = null; (To sever the connection of Chopped Node)
            this.tail.next = null;
        }
        this.length--;
        return tailItem;
    }
  ```

#### Shift (Removes from the Begin)

- Removing a NODE from the beginning of the Doubly Linked List

- SHIFT Pseudocode

  - If length is 0, return undefined
  - Store the current head property in a variable (we will cal it OLD head)
  - If the Length is ONE
    - Set the head to be null
    - Set the tail to be null
  - ELSE
    - Update the head to be the next of the OLD HEAD
    - Set the OLD head's next to NULL
  - Decrement the length
  - Return the HEAD

- SHIFT Code
  ```
   shift() {
        if (this.length === 0) return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
  ```

#### Unshift

- Adding a NODE at the beginning of the Doubly Linked List

- UNSHIFT Pseudocode

  - Create a new node with the value passed to the function
  - If the lenght is 0
    - Set the HEAD to the new node
    - Set the TAIL to be the new node
  - ELSE
    - Set the prev property on the head of the list to be the new node
    - Set the next property on the new node to be the head property
    - Update the head to be the new node
  - Increment the length
  - Return the list

- UNSHIFT Code
  ```
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  ```

#### Get

- Accessing a node in a Doubly Linked List by its position
- In this we have an option to Traverse from Both Sides (HEAD or TAIL), and
  we can optimize traversing by figuring out which Side we Use (Based on the length)

  - EXAMPLE - A Doubly Linked List of Size 20.
    - If the GET Index is 15, we would use TAIL to traverse.
    - If the GET Index is 12, we would use TAIL to traverse.
    - If the GET Index is 3, we would use HEAD to traverse.
    - If the GET Index is 8, we would use HEAD to traverse.

- GET Pseudocode

  - If the INDEX is less than 0 or greater or equal to the length, return undefined
  - If the INDED is less than or equal to half the length of the list
    - Loop through the list starting from the HEAD and loop towards the middle
    - Return the node once it is found
  - If the INDED is greated than half the length of the list
    - Loop through the list starting from the TAIL and loop towards the middle
    - Return the node once it is found

- GET Code

  ```
    get(index) {
      if (index < 0 || this.length <= index) return undefined; // Index Out of bound
      const middle = Math.floor(this.length / 2);
      if (index > middle) {
        // Traverse from the TAIL
        console.log("WORKING FROM THE END...");
        let counter = this.length - 1;
        let current = this.tail;
        while (counter !== index) {
          current = current.next;
          counter--;
        }
        return current;
      } else {
        // Traverser from the HEAD
        console.log("WORKING FROM THE START...");
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
          current = current.next;
          counter++;
        }
        return current;
      }
    }
  ```

#### Set

- Replacing the value of a Node to the in a Doubly Linked List

- SET Pseudocode

  - Create a variable which is the result of the `get` method at the index passed to the function
    - If the `get` method returns a valid node, set the value of the node to be the value passed to the function
    - Return true
  - Otherwise return false;

- SET Code

  ```
    set(index, value) {
      const foundNode = this.get(index);
      if (foundNode) {
        foundNode.val = value;
        return true;
      }
      return false;
    }

  ```

#### Insert

- Adding a Node in a Doubly Linked List by a certain position

- INSERT Pseudocode

  - If the INDEX is less than ZERO or greater than equal to the lenght return false;
  - If the INDEX is 0, use `unshift` (INSERT at the Beginning)
  - If the INDEX is same as length, use `push` (INSERT at the end)
  - Use the get method to access the index-1 to access the item right before we want to insert
  - Set the NEXT and PREV Properties on the correct nodes to link everything together
    - Set prev and next of the new node
    - Set the prev and next of the index-1 node
  - Increment the length
  - Return true

- INSERT Code

#### Remove

- REMOVE Pseudocode

- REMOVE Code
