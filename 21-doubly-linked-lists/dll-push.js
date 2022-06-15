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
      const prevNode = this.tail;
      prevNode.next = newNode;
      newNode.prev = prevNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}

var dl = new DoublyLinkedList();
console.log(dl.push(5));
console.log(dl.push(5));
console.log(dl.head.val);
console.log(dl.tail.val);
