# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
      
        d = {}
      
        level = 0
        
        def traverse(node, lev):
            print(node)
            if d.get(lev) == None:
                d[lev] = []
               
            if node == None:
                d[lev].append("None")
                return
            d[lev].append(node.val)
            if node.left:
                traverse(node.left, lev +1)
            else:
                if d.get(lev+1) == None:
                    d[lev+1] = []
                d[lev +1].append("None")
            if node.right:
                traverse(node.right,lev+1)
            else:
                if d.get(lev+1) == None:
                    d[lev+1] = []
                d[lev +1].append("None")
            
       
        traverse(root,level)
        
        for cur in d.values():
            l,r = 0, len(cur)-1
            while l < r:
                if cur[l] != cur[r]:
                    return False
                l+=1
                r-=1
            
        return True
    