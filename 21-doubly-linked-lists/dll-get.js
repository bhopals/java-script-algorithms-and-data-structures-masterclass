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
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    // Get Node
    let current;
    let counter;
    if (index > this.length / 2) {
      //TAIL
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        counter--;
        current = current.prev;
      }
    } else {
      //HEAD
      current = this.head;
      counter = 0;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
    }
    return current;
  }
}
