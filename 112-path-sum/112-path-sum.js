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
// var hasPathSum = function(root, targetSum) {
//     if (!root) return false
//     let same = false;
    
//     const dfs = (node, sum) => {
//         let newSum = sum + node.val;
        
//         if (!node.left && !node.right) {
//             if (newSum === targetSum) {
//                 same = true;
//                 return;
//             }
//         }
        
//         if (node.left) dfs(node.left, newSum)
//         if (node.right) dfs(node.right, newSum)
        
//     }
//     dfs(root, 0)
    
//     return same;
// };

/*
1. Use DFS to try all possible paths.
2. Keep track of the sum of path during traversal. When leaf node is reached, check if
the sum of path equals the target. If so, return true, else continue DFS traversal to
try other paths.
*/
var hasPathSum = function(root, targetSum) {
    return dfs(root, targetSum);
    // T.C: O(N)
    // S.C: O(H)
};

const dfs = (root, target) => {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right) {
        return target - root.val === 0;
    }
    return dfs(root.left, target - root.val) || 
        dfs(root.right, target - root.val);
}