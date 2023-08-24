// PRINT LETF VIEW OF TREE
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// O(n) because you need to visit all node 

function leftView(root) {
    if (root === null) {
        return;
    }
    
    const queue = [];// Initialize a queue for level-order traversal
    queue.push(root) // Push the root node into the queue
    while (queue.length > 0) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();// Dequeue the front node from the queue

            // Print the first node in the current level (left view)
            if (i === 0) {
                process.stdout.write(currentNode.data + ' ');//console.log
            }
            
            // Enqueue the left and right children of the current node, if they exist
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Left View of Binary Tree:");
leftView(root); // Output: 1 2 4
