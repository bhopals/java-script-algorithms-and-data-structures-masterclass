class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
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
  pop() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    } else {
      const node = this.tail;

      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;

      node.next = null;
      node.prev = null;
      this.length--;
      return node;
    }
  }
}
