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
 * @return {boolean}
 */
// var isValidBST = function(root) {
//    let stack = [], current = root, prev;
    
//     while ( current || stack.length) {
//         while ( current != null) {
//             stack.push(current)
//             current = current.left;
//         }
//         current = stack.pop();
//         if (prev && current.val <= prev.val) return false;
        
//         prev = current
//         current = current.right
//     }
//     return true
// };

const dfs = (node, l, r) => {
    if (!node) return true;
    if (l && l.val >= node.val) return false;
    if (r && r.val <= node.val) return false;
    return dfs(node.left, l, node) && dfs(node.right, node, r)
}

const isValidBST = (root) => dfs(root, null, null)

