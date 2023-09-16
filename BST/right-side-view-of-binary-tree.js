/**
199. Binary Tree Right Side View
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    DFS(root, 0, result);
    return result;  
};

// Pre order traversal in reverse
const DFS = function (node, currentLevel, result) {
    if (!node) return;

    if (currentLevel >= result.length) {
        result.push(node.val);
    }

    if (node.right) {
        DFS(node.right, currentLevel+1, result);
    }

    if (node.left) {
        DFS(node.left, currentLevel+1, result);
    }

}
