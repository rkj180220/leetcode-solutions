/**
236. Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
    return root;
  }

  const leftLCA = lowestCommonAncestor(root.left, p, q);
  const rightLCA = lowestCommonAncestor(root.right, p, q);

  // both the subtree's has ancestor then the current node is the ancestor
  if (leftLCA && rightLCA) {
    return root;
  } else if (leftLCA) {
    // If there is an ancestor in the left side then that is the common ancestor since there is no element in right side
    return leftLCA;
  } else if (rightLCA) {
    // If there is an ancestor in the right side and nothing in left side then the ancestor is the rightLCA
    return rightLCA;
  }
};
