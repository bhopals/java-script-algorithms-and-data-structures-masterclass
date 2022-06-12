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
}

let list = new SinglyLinkedList();
console.log(list); // SinglyLinkedList { head: null, tail: null, length: 0 }

list.push("HELLO");
console.log(list);
// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: null },
//   tail: Node { val: 'HELLO', next: null },
//   length: 1
// }

list.push("GOOD BYE!!");
console.log(list);
// SinglyLinkedList {
//   head: Node { val: 'HELLO', next: Node { val: 'GOOD BYE!!', next: null } },
//   tail: Node { val: 'GOOD BYE!!', next: null },
//   length: 2
// }

list.push("GOOD BYE !!!");
console.log(list);
list.push("GOOD BYE !!!!");
console.log(JSON.stringify(list));
