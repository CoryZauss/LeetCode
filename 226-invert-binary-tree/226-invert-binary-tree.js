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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    //(18% solution)
//     if (root === null) return root;
    
//     let temp = root.left ;
//     root.left = root.right;
//     root.right = temp;
    
    
//         invertTree(root.right)
    
//         invertTree(root.left)
    
    
//     return root;
    
//////////////
    
    
  if (root == null) return null
  let queue = [root]
  while (queue.length) {
    let current = queue.shift()
    let temp = current.left
    current.left = current.right
    current.right = temp
    if (current.left != null) queue.push(current.left)
    if (current.right != null) queue.push(current.right)
  }
  return root
    
};