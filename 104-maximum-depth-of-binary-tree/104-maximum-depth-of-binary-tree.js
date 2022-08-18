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
var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0
    const traverse = (node, d=1) => {
        if(!node.left && !node.right) {
            max = Math.max(max, d)
            return;
        }
        if (node.left) traverse(node.left, d+1);
        if (node.right) traverse(node.right, d+1);
    
    }
    traverse(root)
    return max
};

