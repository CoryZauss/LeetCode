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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let sum = []
    let nodesOnLevel = []
    
    const recurse = (node, lvl) => {
        let level = lvl || 0
        if (sum[level] !== undefined){
            sum[level] = sum[level] + node.val
        }  else {
            sum[level] = node.val
        }
       
        if (nodesOnLevel[level] !== undefined){
            nodesOnLevel[level] = nodesOnLevel[level] + 1
        }  else {
            nodesOnLevel[level] = 1
        }
        
        if (node.left) recurse(node.left, level+1)
        if (node.right) recurse(node.right, level+1)
    }
    recurse(root)
    for ( let i = 0; i < sum.length; i++){
        sum[i] = sum[i]/ nodesOnLevel[i]
    }
    return sum;
};