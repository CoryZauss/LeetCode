/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let test = true;
    
    const traverse = function(node1, node2) {
        if(!node1 && !node2) return
        
        if (node1 && !node2 ||
            node2 && !node1 ||
            node1.left && !node2.left ||
            node1.right && !node2.right ||
            node2.left && !node1.left ||
            node2.right && !node2.right ||
            node1.val !== node2.val 
           ){ 
            test = false
            return
        }
        
        if (node1.left || node2.left) traverse(node1.left, node2.left)
        if (node1.right || node2.right) traverse(node1.right, node2.right)
    }
     traverse(p,q)
    return test
};