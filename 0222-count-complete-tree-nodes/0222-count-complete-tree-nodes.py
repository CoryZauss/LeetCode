# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        
        l, r = root, root
        h_l, h_r = 0, 0 # height of l and r
        
        while l != None:
            h_l+=1
            l = l.left
        while r != None:
            h_r += 1
            r=r.right
        
        if h_l == h_r:
            return (1<<h_l) -1
        return 1+ self.countNodes(root.left) + self.countNodes(root.right)