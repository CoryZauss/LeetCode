# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
# ITTERATE SOLUTION
#         res = []
        
#         def inorder(root):
#             if not root: #if node is null we exit
#                 return
#             inorder(root.left)
#             res.append(root.val)
#             inorder(root.right)
#         inorder(root)
#         return res
            
    # DFS SOLUTION
        res = []
        
        stack = [] # LIFO
        cur = root
        
        while cur or stack: #if either is not empty
            while cur:
                #go left as long as we can, add each node to stack
                stack.append(cur)
                cur = cur.left
            #while loop ends means cur is now null ( we reached the end )
            cur = stack.pop() #remove last in 
            res.append(cur.val) # add this node to result
            cur = cur.right 
        
        return res