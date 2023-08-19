/**
 * 104. Maximum Depth of Binary Tree
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Calculates the maximum depth of a binary tree.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The maximum depth of the binary tree.
 */
var maxDepth = function(root) {
    // Start DFS traversal with the root node and depth 0.
    return DFS(root, 0);
};

/**
 * Depth-first search (DFS) traversal function.
 * @param {TreeNode} node - The current node being visited.
 * @param {number} depth - The current depth of the traversal.
 * @return {number} - The maximum depth of the binary tree.
 */
const DFS = function(node, depth) {
    // Base Case: If the node is null (reached a leaf), return the current depth.
    if (!node) {
        return depth;
    }
    
    // Increase the depth for the current node.
    depth++;
    
    // Recursively calculate the maximum depth for the left and right subtrees.
    const leftDepth = DFS(node.left, depth);
    const rightDepth = DFS(node.right, depth);
    
    // Return the maximum depth among the left and right subtrees.
    return Math.max(leftDepth, rightDepth);
}
