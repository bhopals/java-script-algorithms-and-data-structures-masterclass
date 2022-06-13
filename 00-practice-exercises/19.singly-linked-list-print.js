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

  push(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      //work around - for now
      if (this.length === 0) {
        this.head = this.tail = null;
      }
      return current;
    }
  }
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    //work around - for now
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return node;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) !!this.push(val);
    if (index === 0) return !!this.unshift(val); // A way to convert `this` or other return to boolean - coersion
    let prevNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  insertN(index, val) {
    // Out of bound - Error
    if (index < 0 || index > this.length) return false;
    // Index == Length => insert at the end - PUSH()
    if (index === this.length) {
      this.push(val);
    }
    // Index == 0 ==> insert at the start/begin - unshift
    if (index === 0) {
      this.unshift(val);
    }

    const prevNode = this.get(index - 1);
    if (prevNode) {
      const newNode = new Node(val);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
console.log(list); // SinglyLinkedList { head: null, tail: null, length: 0 }

list.push("HELLO");
list.push("HELLO");
list.insertN(1, "SINGH");
list.push("HELLO");

// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: null },
//   tail: Node { val: 'HELLO', next: null },
//   length: 1
// }

// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOOD BYE!!', next: null } },
//   tail: Node { val: 'GOOD BYE!!', next: null },
//   length: 2
// }

console.log(JSON.stringify(list));
