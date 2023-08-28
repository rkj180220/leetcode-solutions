/**
102. Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        let levelSize = queue.length; 
        const levelNodes = [];
        // Loop through each level
        for (let i = 0; i < levelSize; i++) {  
            const node = queue.shift();
            levelNodes.push(node.val);
            
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        // push the level nodes array to the result
        result.push(levelNodes);
    }

    return result;
};


// JS instead of slice which results in O(n^2) use splice at the end to get O(m+n)
**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const result = [];
    while (queue.length > 0) {
        let levelSize = queue.length; 
        const levelNodes = [];
        // Loop through each level
        for (let i = 0; i < levelSize; i++) {  
            const node = queue[i];
            levelNodes.push(node.val);
            
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
        // Remove the processed nodes
        queue.splice(0, levelSize);
        // push the level nodes array to the result
        result.push(levelNodes);
    }

    return result;
};
