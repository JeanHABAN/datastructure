class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function printLeftView(root) {
    if (root === null) {
        return;
    }

    const result = [];
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            if (i === 0) {
                result.push(currentNode.val);
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    return result;
}

function printRightView(root) {
    if (root === null) {
        return;
    }

    const result = [];
    const queue = [];
    queue.push(root);

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();

            if (i === levelSize - 1) {
                result.push(currentNode.val);
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }
    }

    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const leftView = printLeftView(root);
const rightView = printRightView(root);

const combinedView = leftView.concat(rightView.slice(1));

console.log(combinedView.join(' '));
