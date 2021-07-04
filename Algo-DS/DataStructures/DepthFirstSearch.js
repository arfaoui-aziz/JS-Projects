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

  DFS_PreOrder() {
    let visitedNodes = [];
    let currentNode = this.root;
    const traverse = (currentNode) => {
      visitedNodes.push(currentNode.val);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    };
    traverse(currentNode);
    //or directly traverse(this.root);
    return visitedNodes;
  }

  DFS_PreOrder_Iterative() {
    let visitedNodes = [];
    let currentNode = this.root;
    let stack = [];
    stack.push(currentNode);

    while (stack.length) {
      currentNode = stack.pop();
      visitedNodes.push(currentNode.val);

      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
    }
    return visitedNodes;
  }
}

const tree = new Tree();

//4it    10
//1it   /  \5it
//3it  6    15
//2it / \    \6it
//   3  8      20

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree);
console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PreOrder_Iterative());
