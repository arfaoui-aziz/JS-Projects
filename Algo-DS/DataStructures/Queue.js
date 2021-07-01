class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //push(val)
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //shift()
  dequeue() {
    if (!this.first) return null;
    const removedFirst = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = removedFirst.next;

    this.size--;
    return removedFirst.val;
  }
}

const queue = new Queue();

console.log(queue.enqueue("first"));
console.log(queue.enqueue("2nd"));
console.log(queue.enqueue("3rd"));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
