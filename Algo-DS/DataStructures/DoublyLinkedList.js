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
      this.tail = newNode;
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

  pop() {
    if (!this.head) return;

    const removedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.previous;
      this.tail.next = null;
      removedTail.previous = null;
    }
    this.length--;

    return removedTail;
  }

  shift() {
    if (!this.head) return;
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.previous = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let mid = Math.floor(this.length / 2);
    let currentNode = this.head;
    if (index > mid) {
      currentNode = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.previous;
      }
    } else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;

    //!Colt Solution
    // if(index < 0 || index >= this.length) return null;
    //     var count, current;
    //     if(index <= this.length/2){
    //         count = 0;
    //         current = this.head;
    //         while(count !== index){
    //             current = current.next;
    //             count++;
    //         }
    //     } else {
    //         count = this.length - 1;
    //         current = this.tail;
    //         while(count !== index){
    //             current = current.prev;
    //             count--;
    //         }
    //     }
    //     return current;
  }
}

const list = new DoublyLinkedList();
list.push(4);
list.push(3);
list.push(1);
console.log(list.push(50));
list.traverse();
console.log(list.pop());
list.traverse();
console.log(list.shift());
list.traverse();
console.log(list.unshift(7));
list.traverse();
console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(0));
