/**

222. Count Complete Tree Nodes
Given the root of a complete binary tree, return the number of the nodes in the tree.
According to Wikipedia, every level, except possibly the last, 
is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible.
It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    // Check for null condition
    if (!root) {
        return 0;
    }

    // Calculate the count of the upper portion of the binary tree (The level above the last level)
    // To calculate the upper portion we need to get the level of the complete binary tree
    // traverse through the leftmost node and get the count
    const height = getTreeHeight(root);
    // If there is only one level only the root node
    if (height === 0) {
        return 1;
    }

    const upperNodeCount = Math.pow(2, height) - 1;
    
    // Binary search the last level to find the exact count
    let left = 0;
    //let right = Math.pow(2, height) - 1;
    let right = upperNodeCount;
    while (left < right) {
        const mid = (left + right)/2;
        const idxToFind = Math.ceil(mid);
        if (nodeExists(idxToFind, height, root)) {
            left = idxToFind;
        } else {
            right = idxToFind - 1;
        }
    }

    // Either the left or right pointer can be used since both of them are same
    return upperNodeCount + left + 1;
};

const getTreeHeight = function(root) {
    let currentNode = root;
    let level = 0;
    while (currentNode.left) {
        level++;
        currentNode = currentNode.left;
    }
    return level;
}

// Binary search for finding the location of the node
const nodeExists = function(idxToFind, height, node) {
  let left = 0, right = Math.pow(2, height) - 1, count = 0;
  
  while(count < height) {
    const midOfNode = Math.ceil((left + right) / 2);
    
    if(idxToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    
    count++;
  }
  
  return node !== null;
}
