class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /*** PRINT Linked List */
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  /**** ADD at the end */
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  /**** ADD at the begin */
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return true;
  }
  /**** REMOVE at the end */
  pop() {
    if (this.length === 0) return undefined;
    const current = this.head;
    const newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length++;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
  }
  /**** REMOVE at the begin */
  shift() {
    if (this.length === 0) return undefined;
    const newHead = this.head;
    this.head = newHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
  }

  /*** GET - retrieve element by index */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    const counter = 0;
    const current = this.head;
    const element = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return element;
  }
  /*** SET - Update element at index by new value */
  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  /*** REMOVE - remove element at index */
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return true;
  }
  /*** Reverse the Linked List - Same Linked List - No Temp variable*/
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  /*** Reverse the Linked List - Make a Copy */
  reverseC() {}
}

const list = new SinglyLinkedList();
console.log(JSON.stringify(list));

console.log(list.push("11"));
console.log(JSON.stringify(list));

console.log(list.push("12"));
console.log(list.unshift("00"));

console.log(JSON.stringify(list));
console.log(list.push("13"));
console.log(list.unshift("0"));

console.log(list.push("14"));
console.log(JSON.stringify(list));

console.log(list.print());
