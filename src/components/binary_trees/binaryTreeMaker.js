class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
class binaryTreeMaker {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return this;
    }
    while (current) {
      // first check if the val is less than current node's value we are on in the while loop. then check if theres a value in the next node (otherwise it will overwrite the nodes value that we are currently iterated onto)
      if (val <= current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          // instead of a break and this will break us out of the loop
          //   current = null;
          return this;
        }
        // dont need second if statement because it has to be greater
        //   } else if (val > current.val) {
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          //   current = null;
          return this;
          // try having these as two if statements and then have them as return statements
        }
      }
    }
  }
}
export default binaryTreeMaker;
