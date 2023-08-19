/**
 * 110. Balanced Binary Tree
 * Given a binary tree, determine if it is height-balanced.
 *
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Checks if a binary tree is height-balanced.
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {boolean} - True if the tree is height-balanced, false otherwise.
 */
var isBalanced = function(root) {
    return checkBalance(root) !== -1;
};

/**
 * Helper function to check the balance of a subtree and calculate its height.
 * @param {TreeNode} node - The current node being checked.
 * @return {number} - The height of the subtree if balanced, -1 otherwise.
 */
const checkBalance = function(node) {
    if (!node) {
        return 0; // Height of an empty subtree is 0.
    }
    
    const leftHeight = checkBalance(node.left);
    const rightHeight = checkBalance(node.right);
    
    // If any subtree is unbalanced, return -1 to indicate unbalanced.
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    }
    
    // Return the height of the current subtree.
    return Math.max(leftHeight, rightHeight) + 1;
};
