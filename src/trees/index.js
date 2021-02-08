class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    let flag = true;

    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (flag) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            flag = false;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            flag = false;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search() {}
}

export default BinarySearchTree;
