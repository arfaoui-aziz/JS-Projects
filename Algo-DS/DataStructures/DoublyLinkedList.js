class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
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
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //*correct
      //   const oldTail = this.tail;
      //   oldTail.next = newNode;
      //   this.tail = newNode;
      //   this.tail.previous = oldTail;

      //!shorter
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(4);
list.push(3);
list.push(1);
console.log(list.push(50));
