class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  shift() {
    if (!this.first) return null;
    const removedFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.head = removedFirst.next;
    }
    this.size--;
    return removedFirst.val;
  }
}

const stack = new Stack();

stack.unshift(3);
stack.unshift(4);
stack.unshift(5);
console.log(stack);
console.log(stack.shift());
console.log(stack);
