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
var minDepth = function(root) {
    if (!root) return 0;
    let min = Infinity

    var traverse = function (node, depth=1){
        if (!node.left && !node.right) {
            if (depth < min) min = depth
        }
        
        node.left && traverse(node.left, depth+1)
        node.right && traverse(node.right, depth+1)
    }
    
    traverse(root)
    return min;
    
};