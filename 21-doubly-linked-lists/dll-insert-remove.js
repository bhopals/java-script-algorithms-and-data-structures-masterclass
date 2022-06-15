class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
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
      this.length++;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
    return this;
  }
  insert(index, val) {
    const prevNode = this.get(index - 1);
    if (element) {
      const node = new Node(val);
      nextNode = prevNode.next;

      node.next = nextNode;
      nextNode.prev = node;

      node.prev = prevNode;
      prevNode.next = node;

      return true;
    }
    return false;
  }
  remove(index) {
    const rNode = this.get(index);
    if (element) {
      const prevNode = rNode.prev;
      const nextNode = rNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      rNode.prev = null;
      rNode.next = null;

      return true;
    }
    return undefined;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;

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
