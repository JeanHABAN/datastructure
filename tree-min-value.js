/**
 * Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. 
 * The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// breadth first traversal
// const treeMinValue = (root) => {
//   // todo
//   let smallest = Infinity;
//   const queue = [ root ];
  
//   while(queue.length > 0){
//     const current = queue.shift();
//     if(current.val < smallest) smallest = current.val;
//     if(current.left !== null) queue.push(current.left);
//     if(current.right !== null) queue.push(current.right);
//   }
  
//   return smallest;
// };


// Depth first traversal (iteration)
// const treeMinValue = (root) => {
//   // todo
//   let smallest = Infinity;
//   const stack = [ root ];
  
//   while(stack.length > 0){
//     const current = stack.pop();
//     if(current.val < smallest) smallest = current.val;
//     if(current.left !== null) stack.push(current.left);
//     if(current.right !== null) stack.push(current.right);
//   }
  
//   return smallest;
// };


// Recursive
// depth first traversal
const treeMinValue = (root) => {
    // todo
    if(root === null ) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin)
  };
  module.exports = {
    treeMinValue,
};
  
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValue(a); // -> -2