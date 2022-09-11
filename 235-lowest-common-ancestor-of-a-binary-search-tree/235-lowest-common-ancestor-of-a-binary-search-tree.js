/**
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
    let result = null;
    
    const dfs = (node) => {
        if (node === null) return false;
        let l = dfs(node.left)
        let r = dfs(node.right);
        let curr = node === p || node === q;
        
        if ( l + r + curr >= 2) result = node;
        
        return l || r || curr
        
    }
    
    dfs(root)
    return result
};