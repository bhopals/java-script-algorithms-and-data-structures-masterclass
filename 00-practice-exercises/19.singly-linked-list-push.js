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
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
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
