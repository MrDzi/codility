/***

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

***/

/**
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
const diameterOfBinaryTree = function(root) {
  let lengthLeft = 0;
  let lengthRight = 0;

  const countLength = (n) => {
    let length = 0;

    const countChildNodesLength = (node) => {
      if (node.left || node.right) {
        length++;
        if (node.left.val) {
          countChildNodesLength(node.left);
        }
        if (node.right.val) {
          countChildNodesLength(node.right);
        }
      }
    };
    countChildNodesLength(n);

    return length;
  }

  if (root.left) {
    lengthLeft = countLength(root.left) + 1;
  }
  if (root.right) {
    lengthRight = countLength(root.right) + 1;
  }

  return lengthLeft + lengthRight;
};
