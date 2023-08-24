/**
 * Given a pointer to the root of a binary tree, 
 * you need to print the level order traversal of 
 * this tree. In level-order traversal, nodes are visited 
 * level by level from left to right. Complete the function  
 * and print the values in a single line separated by a space.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//breadth-first-traversal
function levelOrderTraversal(root) {
    if (!root) {
        return;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        process.stdout.write(node.data + " "); // Print the node's data

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
}

// Construct the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Level Order Traversal:");
levelOrderTraversal(root); // Output: 1 2 3 4 5 6 7
