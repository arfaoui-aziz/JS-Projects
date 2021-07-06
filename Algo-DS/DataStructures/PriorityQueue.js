//! using a MinBinaryHeap

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (parent >= 0 && priority < this.values[parent].priority) {
      [this.values[parent], this.values[index]] = [
        this.values[index],
        this.values[parent],
      ];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
    return this;
  }
}

let priorityQueue = new PriorityQueue();

console.log(priorityQueue.enqueue("green", 2));
console.log(priorityQueue.enqueue("green", 2));
console.log(priorityQueue.enqueue("yellow", 1));
console.log(priorityQueue.enqueue("red", 0));
console.log(priorityQueue.enqueue("yellow", 1));
