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
    
    const dfsInvert =(node) => {
        if(!node) return
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        dfsInvert(node.left)
        dfsInvert(node.right)
    }
    dfsInvert(root)
    return root
};