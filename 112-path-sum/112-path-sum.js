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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false
    let same = false;
    
    const dfs = (node, sum) => {
        let newSum = sum + node.val;
        
        if (!node.left && !node.right) {
            if (newSum === targetSum) {
                same = true;
                return;
            }
        }
        
        if (node.left) dfs(node.left, newSum)
        if (node.right) dfs(node.right, newSum)
        
    }
    dfs(root, 0)
    
    return same;
};