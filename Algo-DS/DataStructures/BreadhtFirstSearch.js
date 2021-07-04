//! Breadht First Search (BFS)
//* example
//      10
//   6     15
// 3  8      20

//? 1st iteration
// queue = [10] root , visitedNodes = []
//? 2nd iteration
// queue = [6,15]  , visitedNodes = [10]
//? 3rd iteration
// queue = [15,3,8]  , visitedNodes = [10,6]
//? 4th iteration
// queue = [3,8,20]  , visitedNodes = [10,6,15]
//? 5th iteration
// queue = [8,20]  , visitedNodes = [10,6,15,3]
//? 6th iteration
// queue = [20]  , visitedNodes = [10,6,15,3,8]
//? last iteration queue is empty
// queue = []  , visitedNodes = [10,6,15,3,8,20]

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // sinon  we get an infinite loop in case of inserting an existing value
      if (value === currentNode.value) return;
      while (true) {
        if (value < currentNode.val) {
          //   if (!currentNode.left) { //
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  BFS() {
    if (!this.root) return;
    let queue = [];
    let visitedNodes = [];
    let currentNode = this.root;
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      visitedNodes.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
    return visitedNodes;
  }
}

const tree = new Tree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);
console.log(tree.BFS());
