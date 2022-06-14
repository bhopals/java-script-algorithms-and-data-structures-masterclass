class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
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
  pop() {
    if (this.length === 0) return undefined;
    let tailItem = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = tailItem.prev;
      tailItem.prev = null;
      this.tail.next = null;
    }
    this.length--;
    return tailItem;
  }
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
      let current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter++;
      }
      return current;
    }
  }
}
