class Node {
  construct(val, next) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  construct() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    if (this.length === 0) {
      this.head = new Node(value);
      this.tail = new Node(value);
    } else {
      this.tail.next = value;
      this.tail = new Node(value);
    }
    length++;
  }
}

const list = new SinglyLinkedList();

// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
