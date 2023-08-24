/**
 * find inorder successor of BST ()
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findMinNode(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}

function findInOrderSuccessor(root, target) {
    if (root === null || target === null) {
        return null;
    }
    
    // If the right subtree of the target node is not null,
    // the successor is the leftmost node in the right subtree.
    if (target.right !== null) {
        return findMinNode(target.right);
    }
    
    // Traverse the tree to find the target node while keeping track of the successor.
    let successor = null;
    while (root !== null) {
        if (target.value < root.value) {
            successor = root;
            root = root.left;
        } else if (target.value > root.value) {
            root = root.right;
        } else {
            break;
        }
    }
    
    return successor;
}

// Example usage
const root = new TreeNode(20);
root.left = new TreeNode(9);
root.right = new TreeNode(25);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(12);
root.left.right.left = new TreeNode(11);
root.left.right.right = new TreeNode(14);

const targetNode = root.left.right.right; // Find the successor of node with value 9
const successor = findInOrderSuccessor(root, targetNode);
if (successor) {
    console.log("Inorder successor:", successor.value);
} else {
    console.log("No inorder successor found.");
}
