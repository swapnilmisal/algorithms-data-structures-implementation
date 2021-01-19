/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let itr = root;
  let q = [itr];
  let tempQ = [itr];
  let tempValArr = [itr.val];
  const response = [];

  while (tempQ.length) {
    tempQ = [];
    tempValArr = [];
    while (q.length) {
      const tempN = q.shift();
      tempValArr.push(tempN.val);
      if (tempN.left) tempQ.push(tempN.left);
      if (tempN.right) tempQ.push(tempN.right);
    }
    q = [...tempQ];
    response.push([...tempValArr]);
  }
  return response;
};
// @lc code=end
