class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function treeHeight(root) {
    if (!root) {
        return -1; // Height of an empty tree is -1
    }

    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

// Construct the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

const height = treeHeight(root);
console.log("Height of the binary tree:", height); // Output: Height of the binary tree: 2
