class Node {
  constructor(val, next) {
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
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return;
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return this;
  }

  shift() {
    if (!this.head) return;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return oldHead.val;
  }

  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
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
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }
  reverse() {
    let currentNode = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let nextNode = null;
    let prevNode = null;

    // while (currentNode) {
    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
  // reverse() {
  //   let current = this.head;
  //   let reversedList = new SinglyLinkedList();
  //   while (current) {
  //     reversedList.unShift(current.val);
  //     current = current.next;
  //   }

  //   return reversedList;
  // }
}

const list = new SinglyLinkedList();

// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

list.push(0);
list.push(2);
list.push(4);
// console.log(list);
// console.log(list.traverse());
// console.log(list.pop());
// console.log(list);
// console.log(list.traverse());

console.log(list.shift());
console.log("**************");
console.log(list.traverse());

console.log(list.unShift(9));
console.log(list.traverse());

console.log(list.get(0));
console.log(list.set(0, 13));
console.log(list.insert(2, 5));
console.log(list.traverse());
console.log(list.remove(2));
console.log(list.traverse());
console.log(list.reverse());
console.log(list.traverse());
