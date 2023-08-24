
/**
 * Write a function, depthFirstValues, 
 * that takes in the root of a binary tree.
 *  The function should return an array containing 
 * all values of the tree in depth-first order.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

///// can have inorder, preorder, post-order
const depthFirstValues = (root) => {
    // todo
    //recursive 

    // if(root === null) return [];
    // const leftValues = depthFirstValues(root.left);
    // const rightValues = depthFirstValues(root.right);
    // return [root.val, ...leftValues, ...rightValues];
    
    
    //other way iterative solution??
    if(root === null) return [];
      
    const res = [];
    const stack =[root];
  
    while(stack.length > 0){
      const current = stack.pop();
      res.push(current.val)
      if(current.right) stack.push(current.right);
      if(current.left) stack.push(current.left);
        
    }
    return res;
  };
  
  module.exports = {
    depthFirstValues,
  };
  
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']