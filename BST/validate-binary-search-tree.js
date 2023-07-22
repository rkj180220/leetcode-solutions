/**
 * 98. Validate Binary Search Tree
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validateBST(root, -Infinity, Infinity);
};

function validateBST(node, minVal, maxVal) {
    // Base case
    if (node === null) {
        return true;
    }

    // Check if the current node's value is within the valid range
    if (node.val <= minVal || node.val >= maxVal) {
        return false;
    }

    // Recurse on the left and right subtrees, updating the valid range
    return (
        validateBST(node.left, minVal, node.val) &&
        validateBST(node.right, node.val, maxVal)
    );
}