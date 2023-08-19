/**
 * 111. Minimum Depth of Binary Tree
 * 
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * Finds the minimum depth of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The minimum depth of the binary tree.
 */
var minDepth = function(root) {
    // If the tree is empty, its minimum depth is 0.
    if (!root) {
        return 0;
    }

    // Initialize a queue for BFS. Each item contains a node and its depth.
    const queue = [{ node: root, depth: 1 }];

    while (queue.length > 0) {
        // Dequeue the first node from the queue along with its depth.
        const { node, depth } = queue.shift();

        // If the current node is a leaf (has no children), return its depth.
        if (!node.left && !node.right) {
            return depth;
        }

        // Add child nodes to the queue along with their incremented depths.
        if (node.left) {
            queue.push({ node: node.left, depth: depth + 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }
    
    // The loop will always find a leaf node, so this line is unreachable.
    return -1;
};
